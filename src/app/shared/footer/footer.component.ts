// import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// @Component({
//   selector: 'app-footer',
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.css']
// })
// export class FooterComponent implements AfterViewInit {

//   @ViewChild('footerContainer') footerContainer!: ElementRef;

//   constructor() { }

//   ngAfterViewInit(): void {
//     this.initFooterAnimation();
//   }

//   initFooterAnimation(): void {
//     // Anima o footer a partir de uma posição 25% para baixo e opacidade 0
//     gsap.from(this.footerContainer.nativeElement, {
//       scrollTrigger: {
//         trigger: this.footerContainer.nativeElement,
//         start: 'top bottom', // A animação começa quando o topo do footer toca a base da tela
//         end: 'bottom bottom', // A animação termina quando o rodapé toca a base da tela
//         scrub: 1.5, // Conecta a animação suavemente à barra de rolagem
//       },
//       yPercent: 25,
//       opacity: 0,
//       ease: 'none',
//     });
//   }

//   scrollToTop(): void {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   }
// }

// src/app/shared/footer/footer.component.ts

// src/app/shared/footer/footer.component.ts (versão limpa)

import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {

  @ViewChild('footerContainer') footerContainer!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.initFooterAnimation();
  }

  initFooterAnimation(): void {
    gsap.from(this.footerContainer.nativeElement, {
      scrollTrigger: {
        trigger: this.footerContainer.nativeElement,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1.5,
      },
      yPercent: 25,
      opacity: 0,
      ease: 'none',
    });
  }
}