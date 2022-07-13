import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartasComponent } from './components/cartas/cartas.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'episodios',
    component: EpisodiosComponent
  },
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'personajes/:id',
    component: CartasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
