import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-coleta',
  templateUrl: './coleta.component.html',
  styleUrls: ['./coleta.component.css']
})
export class ColetaComponent implements AfterViewInit {

  @ViewChild('coletaSection') coletaSection!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => this.initAnimations(), 0);
  }

  initAnimations(): void {
    const sectionEl = this.coletaSection.nativeElement;
    gsap.from(sectionEl, {
      duration: 1.2,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top 90%',
        toggleActions: 'play none none reset'
      }
    });
  }

  getGoogleMapsLink(address: string): string {
    const encodedAddress = encodeURIComponent(address);
    // Esta é a URL correta para buscar um endereço no Google Maps
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  }
  
}