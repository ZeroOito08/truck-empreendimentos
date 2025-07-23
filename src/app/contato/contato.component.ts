import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  constructor() { }

  /**
   * Função chamada quando o formulário é enviado.
   */
  onSubmit() {
    // Ação temporária para confirmar que o formulário funciona.
    alert('Formulário enviado com sucesso!');

    // No futuro, você pode adicionar aqui a lógica para
    // enviar os dados para um servidor ou serviço de e-mail.
  }
}