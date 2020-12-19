import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarCursosPage } from './agregar-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarCursosPageRoutingModule {}
