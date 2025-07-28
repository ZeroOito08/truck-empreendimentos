// src/app/contato/contato.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-contato',
    imports: [
        CommonModule,
        ReactiveFormsModule // Necessário para formulários reativos em componentes standalone
    ],
    templateUrl: './contato.component.html',
    styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  contatoForm: FormGroup;
  formSubmitting = false;
  formSuccess = false;
  formError = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contatoForm.invalid) {
      this.contatoForm.markAllAsTouched();
      return;
    }

    this.formSubmitting = true;
    this.formSuccess = false;
    this.formError = false;

    this.http.post('https://formspree.io/f/mzzvrabv', this.contatoForm.value, { headers: { 'Accept': 'application/json' }})
      .subscribe({
        next: () => {
          this.formSuccess = true;
          this.contatoForm.reset();
        },
        error: () => {
          this.formError = true;
        }
      }).add(() => {
        this.formSubmitting = false;
      });
  }
}