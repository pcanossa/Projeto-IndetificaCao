import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/home/principal/principal.component';
import { AnimaisComponent } from './pages/user/animais/animais.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroUserComponent } from './pages/home/cadastro-user/cadastro-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user',
    component: AnimaisComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
