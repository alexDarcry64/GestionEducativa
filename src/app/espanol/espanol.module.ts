import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspanolPageRoutingModule } from './espanol-routing.module';

import { EspanolPage } from './espanol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspanolPageRoutingModule
  ],
  declarations: [EspanolPage]
})
export class EspanolPageModule {}
