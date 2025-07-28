// src/app/app.component.ts

import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'truck-empreendimentos';

  // Adicione a referência ao botão
  @ViewChild('scrollToTopBtn') scrollToTopBtn!: ElementRef;

  // Adicione o ouvinte de rolagem
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 300) { // Mostra o botão após rolar 300px
      this.scrollToTopBtn.nativeElement.classList.add('show');
    } else {
      this.scrollToTopBtn.nativeElement.classList.remove('show');
    }
  }

  // Adicione o método para rolar ao topo
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}