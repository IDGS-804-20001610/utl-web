import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { InicioComponent } from './inicio/inicio.component';
import { TsuTiComponent } from './tsu-ti/tsu-ti.component';
import { TsuDsmComponent } from './tsu-dsm/tsu-dsm.component';
import { SoyEstudianteComponent } from './soy-estudiante/soy-estudiante.component';
import { SoyAdministrativoComponent } from './soy-administrativo/soy-administrativo.component';
import { SoyAspiranteComponent } from './soy-aspirante/soy-aspirante.component';
import { SoyDocenteComponent } from './soy-docente/soy-docente.component';
import { SoyEgresadoComponent } from './soy-egresado/soy-egresado.component';
import { SoyEmpresarioComponent } from './soy-empresario/soy-empresario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NoticiasComponent,
    QuienesSomosComponent,
    InicioComponent,
    TsuTiComponent,
    TsuDsmComponent,
    SoyEstudianteComponent,
    SoyAdministrativoComponent,
    SoyAspiranteComponent,
    SoyDocenteComponent,
    SoyEgresadoComponent,
    SoyEmpresarioComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
