import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // 🔹 Importando RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule] // 🔹 Adicionando RouterModule aqui!
})
export class AppComponent {
  constructor(private router: Router) {}

  navegarPara(rota: string) {
    this.router.navigate([rota]);
  }
}
