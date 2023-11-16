import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
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


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'carreras_tsu_ti', component: TsuTiComponent },
  { path: 'carreras_tsu_ti_dsm', component: TsuDsmComponent },
  { path: 'soy-administrativo', component: SoyAdministrativoComponent },
  { path: 'soy-alumno', component: SoyEstudianteComponent },
  { path: 'soy-aspirante', component: SoyAspiranteComponent },
  { path: 'soy-docente', component:SoyDocenteComponent },
  { path: 'soy-egresado', component: SoyEgresadoComponent },
  { path: 'soy-empresario', component: SoyEmpresarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}