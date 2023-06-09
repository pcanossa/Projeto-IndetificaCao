import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/home/principal/principal.component';
import { AnimaisComponent } from './pages/user/animais/animais.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroUserComponent } from './pages/home/cadastro-user/cadastro-user.component';
import { AdotadosComponent } from './pages/user/adotados/adotados.component';
import { PerdidosComponent } from './pages/user/perdidos/perdidos.component';
import { AnimalPageComponent } from './pages/user/animal-page/animal-page.component';
import { CadastroAnimalComponent } from './pages/user/cadastro-animal/cadastro-animal.component';
import { AtualizarDadosUserComponent } from './pages/user/atualizar-dados-user/atualizar-dados-user.component';
import { AtualizarDadosAnimalComponent } from './pages/user/atualizar-dados-animal/atualizar-dados-animal.component';
import { EncontradoComponent } from './pages/home/encontrado/encontrado.component';
import { ListaEncontradosComponent } from './pages/home/lista-encontrados/lista-encontrados.component';
import { AnimalPublicComponent } from './pages/home/animal-public/animal-public.component';

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
  },
  {
    path: 'adotados',
    component: AdotadosComponent
  },
  {
    path: 'perdidos',
    component: PerdidosComponent
  },
  {
    path: 'animalPage',
    component: AnimalPageComponent
  },
  {
    path: 'novoAnimal',
    component: CadastroAnimalComponent
  },
  {
    path: 'atualizarUser',
    component: AtualizarDadosUserComponent
  },

  {
    path: 'atualizarAnimal',
    component: AtualizarDadosAnimalComponent
  },
  {
    path: 'encontreiAnimal',
    component: EncontradoComponent
  },
  {
    path: 'listaEcontrados',
    component: ListaEncontradosComponent
  },
  {
    path: 'animalPublic',
    component: AnimalPublicComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
