import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agendamento',
  standalone: true,
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css'],
  imports: []
})
export class AgendamentoComponent {
  nome = '';
  horario = '';
  mensagem = '';
  horariosDisponiveis = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

  constructor(private http: HttpClient) {}

  agendar() {
    if (this.nome && this.horario) {
      this.http.post<any>('http://localhost:8080/agendamentos', {
        nome: this.nome,
        horario: this.horario
      }).subscribe({
        next: () => {
          this.mensagem = `Horário marcado para ${this.nome} às ${this.horario}.`;
        },
        error: () => {
          this.mensagem = 'Erro ao agendar. Tente novamente.';
        }
      });
    } else {
      this.mensagem = 'Por favor, preencha todos os campos.';
    }
  }
}
