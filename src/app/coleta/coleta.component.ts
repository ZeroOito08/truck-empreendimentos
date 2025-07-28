// src/app/coleta/coleta.component.ts (Versão Corrigida)

import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
// IMPORTS CORRIGIDOS E ADICIONADOS:
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-coleta',
  standalone: true, // Mantemos como standalone
  imports: [
    CommonModule,
    ReactiveFormsModule // Importamos o ReactiveFormsModule aqui
  ],
  templateUrl: './coleta.component.html',
  styleUrls: ['./coleta.component.css']
})
export class ColetaComponent implements AfterViewInit {

  @ViewChild('coletaSection') coletaSection!: ElementRef;

  // Lógica do formulário reativo
  coletaForm: FormGroup;
  formSubmitting = false;
  formSuccess = false;
  formError = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.coletaForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }

  // Lógica de animação original
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

  // Lógica de envio do formulário
  onSubmit(): void {
    if (this.coletaForm.invalid) {
      this.coletaForm.markAllAsTouched();
      return;
    }

    this.formSubmitting = true;
    this.formSuccess = false;
    this.formError = false;

    const formspreeEndpoint = 'https://formspree.io/f/mrblqagw';

    this.http.post(formspreeEndpoint, this.coletaForm.value, { headers: { 'Accept': 'application/json' }})
      .subscribe({
        next: () => {
          this.formSuccess = true;
          this.coletaForm.reset();
        },
        error: () => {
          this.formError = true;
        }
      }).add(() => {
        this.formSubmitting = false;
      });
  }

  // Método auxiliar original
  getGoogleMapsLink(address: string): string {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  }
}