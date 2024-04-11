import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnComponent } from './components/btn/btn.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BtnVoltarComponent } from './components/btn-voltar/btn-voltar.component';
import { CardProjectsComponent } from './components/card-projects/card-projects.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    HomeComponent,
    ContatoComponent,
    SobreMimComponent,
    ProjectsComponent,
    BtnVoltarComponent,
    CardProjectsComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
