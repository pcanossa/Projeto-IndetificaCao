import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from './home/navbar/navbar.component';
import { PrincipalComponent } from './home/principal/principal.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CadastroUserComponent } from './home/cadastro-user/cadastro-user.component';
import { AnimalPublicComponent } from './home/animal-public/animal-public.component';
import { CadastroAnimalComponent } from './user/cadastro-animal/cadastro-animal.component';
import { AdotadosComponent } from './user/adotados/adotados.component';
import { PerdidosComponent } from './user/perdidos/perdidos.component';
import { EncontradoComponent } from './home/encontrado/encontrado.component';
import { ListaEncontradosComponent } from './home/lista-encontrados/lista-encontrados.component';
import { LoginComponent } from './login/login.component';
import { AnimaisComponent } from './user/animais/animais.component';
import { AnimalPageComponent } from './user/animal-page/animal-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    UserComponent,
    PrincipalComponent,
    CadastroUserComponent,
    AnimalPublicComponent,
    CadastroAnimalComponent,
    AdotadosComponent,
    PerdidosComponent,
    EncontradoComponent,
    ListaEncontradosComponent,
    LoginComponent,
    AnimaisComponent,
    AnimalPageComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
 }
