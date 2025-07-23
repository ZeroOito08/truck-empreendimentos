// src/app/area-atuacao/area-atuacao.component.ts
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
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

  ngAfterViewInit(): void {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

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
        return am5.color(0xf29201);
      }
      return fill;
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xf29201)
    });


    // --- Série de Pontos para os NOMES dos estados ---
    let labelsSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    labelsSeries.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Label.new(root, {
          text: "{name}",
          fill: am5.color(0xffffff),
          fontWeight: "bold",
          fontSize: "0.9em",
          centerX: am5.p50,
          centerY: am5.p50
        })
      });
    });


    // --- Série de Pontos para os ÍCONES de coleta ---
    let iconsSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    iconsSeries.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Picture.new(root, {
          src: "assets/logo_truck_reciclagem_coleta.png",
          width: 30, // Largura do ícone
          height: 30, // Altura do ícone
          centerX: am5.p50,
          centerY: am5.p50
        })
      });
    });

    // Adiciona os dados para os ícones com as coordenadas corretas
    iconsSeries.data.setAll([
      { geometry: { type: "Point", coordinates: [-58.7876, -13.5439] } }, // Sapezal
      { geometry: { type: "Point", coordinates: [-57.5155, -11.2539] } }  // Juara
    ]);


    // --- Lógica para adicionar os nomes APENAS nos estados de atuação ---
    polygonSeries.events.on("datavalidated", () => {
      labelsSeries.data.setAll([]); // Limpa dados antigos

      polygonSeries.dataItems.forEach((dataItem) => {
        const id = (dataItem.dataContext as any).id;
        if (this.estadosDeAtuacao.includes(id)) {
          const polygon = dataItem.get("mapPolygon");
          if (polygon) {
            const stateAbbreviation = id.split('-')[1];
            labelsSeries.data.push({
              geometry: polygon.visualCentroid(),
              name: stateAbbreviation
            });
          }
        }
      });
    });

    this.root = root;
  }

  ngOnDestroy(): void {
    if (this.root) {
      this.root.dispose();
    }
  }
}