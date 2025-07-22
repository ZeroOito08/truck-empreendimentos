import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // <-- 1. IMPORTAR O PLUGIN AQUI

gsap.registerPlugin(ScrollTrigger); // <-- 2. REGISTRAR O PLUGIN AQUI

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChildren('sectionTitle') sectionTitles!: QueryList<ElementRef>;
  @ViewChildren('sectionText') sectionTexts!: QueryList<ElementRef>;

  constructor() { }

  ngAfterViewInit(): void {
    // Esconde os elementos antes de animar
    const elementsToAnimate = [
      ...this.sectionTitles.map(el => el.nativeElement),
      ...this.sectionTexts.map(el => el.nativeElement)
    ];
    gsap.set(elementsToAnimate, { opacity: 0, y: 30 }); // Começa um pouco para baixo
    
    this.initAnimations();
  }

  initAnimations(): void {
    // Animação para os títulos h2
    this.sectionTitles.forEach((title: ElementRef) => {
      gsap.to(title.nativeElement, { // Usando gsap.to para animar PARA o estado final
        duration: 1.2,
        y: 0, // Posição final
        opacity: 1, // Visibilidade final
        ease: 'power3.out',
        scrollTrigger: {
          trigger: title.nativeElement,
          start: 'top 90%', 
          toggleActions: 'play none none reset'
        }
      });
    });

    // Animação para os parágrafos
    this.sectionTexts.forEach((text: ElementRef) => {
      gsap.to(text.nativeElement, { // Usando gsap.to
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: text.nativeElement,
          start: 'top 95%',
          toggleActions: 'play none none reset'
        }
      });
    });
  }
}