import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // ✅ Página inicial correta
  { path: 'login', component: LoginComponent },
  { path: 'agendamento', component: AgendamentoComponent }
];
