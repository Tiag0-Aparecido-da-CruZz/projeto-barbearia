import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: []
})
export class LoginComponent {
  usuario = '';
  senha = '';
  mensagem = '';

  constructor(private http: HttpClient, private router: Router) {}

  fazerLogin() {
    this.http.post<any>('http://localhost:8080/login', {
      usuario: this.usuario,
      senha: this.senha
    }).subscribe({
      next: (res) => {
        // Aqui você pode salvar token ou algo parecido
        this.router.navigate(['/agendamento']);
      },
      error: () => {
        this.mensagem = 'Usuário ou senha inválidos.';
      }
    });
  }
}
