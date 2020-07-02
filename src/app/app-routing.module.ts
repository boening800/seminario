import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import { GrecursosComponent} from '../app/components/grecursos/grecursos.component';
import { GpersonalComponent} from '../app/components/gpersonal/gpersonal.component';
import { TipodenunciaComponent } from '../app/components/tipodenuncia/tipodenuncia.component';
import { AsigrecursosComponent } from '../app/components/asigrecursos/asigrecursos.component';
const routes: Routes = [
  { path: 'home', component:HomeComponent,
    children:[
      {path:'grecursos', component:GrecursosComponent},
      {path:'gpersonal', component:GpersonalComponent},
      {path:'tipodenuncia',component:TipodenunciaComponent},
      {path:'asignarrecurso',component:AsigrecursosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
