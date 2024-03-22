import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {SobreMimComponent} from './pages/sobre-mim/sobre-mim.component'
import { ContatoComponent } from './pages/contato/contato.component';
import { ProjectsComponent } from './pages/projects/projects.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'sobremim',
    component: SobreMimComponent
  },
  {
    path:'contato',
    component: ContatoComponent
  },
  {
    path:'projetos',
    component: ProjectsComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
