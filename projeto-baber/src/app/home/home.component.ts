import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h1>Bem-vindo ao Agendamento da Barbearia Project!</h1>
      <p>Escolha uma opção:</p>

      <div class="button-container">
        <button (click)="navegarPara('/login')">Login</button>
        <button (click)="navegarPara('/agendamento')">Agendar Horário</button>
      </div>
    </div>
  `,
  styles: [`
    .container {
      text-align: center; 
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh; /* Centraliza na tela toda */
    }

    .button-container {
      display: flex;
      gap: 20px;
      margin-top: 20px;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      background-color: #007bff;
      color: white;
      border-radius: 5px;
      transition: background 0.3s;
    }

    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class HomeComponent {
  navegarPara(url: string) {
    window.location.href = url; // Simples e funcional
  }
}
