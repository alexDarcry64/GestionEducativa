import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatbotPageRoutingModule } from './chatbot-routing.module';

import { ChatbotPage } from './chatbot.page';
import { AutosizeModule } from 'ngx-autosize';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatbotPageRoutingModule,
    AutosizeModule
  ],
  declarations: [ChatbotPage]
})
export class ChatbotPageModule {}
