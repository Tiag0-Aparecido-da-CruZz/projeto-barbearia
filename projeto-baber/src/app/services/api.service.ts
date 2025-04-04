import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  login(username: string, password: string) {
    // Simulação de login bem-sucedido
    if (username === 'admin' && password === '123') {
      return of({ token: 'fake-token' }).pipe(delay(1000));
    }

    // Simulação de erro no login
    return throwError(() => new Error('Usuário ou senha inválidos')).pipe(delay(1000));
  }
}
