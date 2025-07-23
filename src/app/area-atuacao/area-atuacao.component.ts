// src/app/area-atuacao/area-atuacao.component.ts
import { Component, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_brazilLow from '@amcharts/amcharts5-geodata/brazilLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-area-atuacao',
  standalone: true,
  imports: [],
  templateUrl: './area-atuacao.component.html',
  styleUrls: ['./area-atuacao.component.css']
})
export class AreaAtuacaoComponent implements AfterViewInit, OnDestroy {
  private root!: am5.Root;

  private estadosDeAtuacao = ["BR-MT", "BR-MS", "BR-RO", "BR-AC", "BR-MG"];

  constructor(private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      let root = am5.Root.new("chartdiv");

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: "none",
          panY: "none",
          projection: am5map.geoMercator(),
          homeZoomLevel: 1.2,
          homeGeoPoint: { latitude: -14, longitude: -54 }
        })
      );

      // --- Série de Polígonos (Estados) ---
      let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_brazilLow,
          exclude: ["BR-FN"]
        })
      );

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        interactive: true,
        fill: am5.color(0xffffff),
        stroke: am5.color(0xcccccc)
      });

      polygonSeries.mapPolygons.template.adapters.add("fill", (fill, target) => {
        const dataItem = target.dataItem;
        if (dataItem && this.estadosDeAtuacao.includes((dataItem.dataContext as any).id)) {
          return am5.color(0xf29201); // Laranja
        }
        return fill;
      });

      // --- Série para os ÍCONES de coleta ---
      let iconsSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

      iconsSeries.bullets.push(() => {
        return am5.Bullet.new(root, {
          sprite: am5.Picture.new(root, {
            src: "assets/reciclagem_coleta.png",
            width: 30,
            height: 30,
            centerX: am5.p50,
            centerY: am5.p50,
            tooltipText: "{name}"
          })
        });
      });

      iconsSeries.data.setAll([
        { geometry: { type: "Point", coordinates: [-58.787675, -13.543912] }, name: "Ponto de Coleta - Sapezal/MT" },
        { geometry: { type: "Point", coordinates: [-57.515599, -11.253973] }, name: "Ponto de Coleta - Juara/MT" }
      ]);
      
      this.root = root;
    });
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}