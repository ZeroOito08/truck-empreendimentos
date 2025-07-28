// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-parceiros',
//   templateUrl: './parceiros.component.html',
//   styleUrl: './parceiros.component.css'
// })
// export class ParceirosComponent {

// }

// src/app/parceiros/parceiros.component.ts

import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-parceiros',
    templateUrl: './parceiros.component.html',
    styleUrls: ['./parceiros.component.css'],
    standalone: false
})
export class ParceirosComponent implements OnInit, AfterViewInit {

  @ViewChild('sectionTitle') sectionTitle!: ElementRef;

  // Lista original de parceiros
  parceiros = [
    { nome: 'Reciclanip', logo: 'assets/images/parceiros/parceiro_logo_reciclanip.png' },
    { nome: 'Anip', logo: 'assets/images/parceiros/parceiro_logo_anip.png' },
    { nome: 'Ciplan', logo: 'assets/images/parceiros/parceiro_logo_ciplan.png' },
    { nome: 'Greenplat', logo: 'assets/images/parceiros/parceiro_logo_greenplat.png' },
    { nome: 'Grupo CBL', logo: 'assets/images/parceiros/parceiro_logo_grupo_cbl.png' },
    { nome: 'Interag', logo: 'assets/images/parceiros/parceiro_logo_interag.png' },
    { nome: 'Sindirecicle', logo: 'assets/images/parceiros/parceiro_logo_sindirecicle.png' },
    { nome: 'Verdera', logo: 'assets/images/parceiros/parceiro_logo_verdera.png' },
    { nome: 'Votorantim', logo: 'assets/images/parceiros/parceiro_logo_votorantim.png' }
  ];

  // NOVA PROPRIEDADE PARA A ANIMAÇÃO
  parceirosAnimados: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Duplica a lista de parceiros para criar o efeito de loop infinito
    this.parceirosAnimados = [...this.parceiros, ...this.parceiros];
  }

  ngAfterViewInit(): void {
    const titleEl = this.sectionTitle.nativeElement;
    gsap.from(titleEl, {
      duration: 1.2,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleEl,
        start: 'top 90%',
        toggleActions: 'play none none reset'
      }
    });
  }
}
