import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarCursosPageRoutingModule } from './agregar-cursos-routing.module';

import { AgregarCursosPage } from './agregar-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarCursosPageRoutingModule
  ],
  declarations: [AgregarCursosPage]
})
export class AgregarCursosPageModule {}
