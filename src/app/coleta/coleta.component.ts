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

  // Array para armazenar os arquivos selecionados
  selectedFiles: File[] = [];

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

  // --- LÓGICA PARA MANIPULAR ARQUIVOS ---

  /**
   * Chamado quando o usuário seleciona arquivos no input.
   * @param event O evento do input de arquivo.
   */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      // Adiciona os novos arquivos à lista existente
      for (let i = 0; i < input.files.length; i++) {
        this.selectedFiles.push(input.files[i]);
      }
    }
  }

  /**
   * Remove um arquivo da lista de selecionados.
   * @param index O índice do arquivo a ser removido.
   */
  removeFile(index: number): void {
    this.selectedFiles.splice(index, 1);
  }

  // Função para o Google Maps (continua igual)
  getGoogleMapsLink(address: string): string {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  }
}