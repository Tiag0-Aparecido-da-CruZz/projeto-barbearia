import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const usuarioLogado = localStorage.getItem('token'); // Verifica se há token de login
    if (!usuarioLogado) {
      this.router.navigate(['/login']); // Redireciona para login se não estiver logado
      return false;
    }
    return true;
  }
}
