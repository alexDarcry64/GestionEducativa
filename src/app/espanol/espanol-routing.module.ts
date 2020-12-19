import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspanolPage } from './espanol.page';

const routes: Routes = [
  {
    path: '',
    component: EspanolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspanolPageRoutingModule {}
