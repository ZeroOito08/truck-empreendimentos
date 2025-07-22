import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements AfterViewInit {

  @ViewChildren('sectionTitle') sectionTitle!: QueryList<ElementRef>;
  @ViewChildren('sectionText') sectionTexts!: QueryList<ElementRef>;
  @ViewChildren('founderCard') founderCards!: QueryList<ElementRef>;

  constructor() { }

  ngAfterViewInit(): void {
    // Garante que a animação só comece depois que tudo estiver pronto
    setTimeout(() => this.initAnimations(), 0);
  }

  initAnimations(): void {
    const title = this.sectionTitle.first.nativeElement;
    const introParagraphs = this.sectionTexts.map(el => el.nativeElement);
    const cards = this.founderCards.map(el => el.nativeElement);

    // 1. Anima o título principal
    gsap.from(title, {
      duration: 1.2, y: 50, opacity: 0, ease: 'power3.out',
      scrollTrigger: { trigger: title, start: 'top 90%', toggleActions: 'play none none reset' }
    });

    // 2. Anima os parágrafos da história em sequência
    gsap.from(introParagraphs, {
      duration: 1, y: 30, opacity: 0, ease: 'power3.out', stagger: 0.2,
      scrollTrigger: { trigger: introParagraphs[0], start: 'top 95%', toggleActions: 'play none none reset' }
    });

    // 3. Anima os cards dos fundadores em sequência
    gsap.from(cards, {
      duration: 1.2, y: 50, opacity: 0, ease: 'power3.out', stagger: 0.3,
      scrollTrigger: { trigger: cards[0], start: 'top 85%', toggleActions: 'play none none reset' }
    });
  }
}