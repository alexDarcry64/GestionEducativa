import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {
  
  mensajes = [
    {
      user:'simon',
      createdAt: 1554090856000,
      msg: 'Hola, en que puedo Ayudarte'
    },
    {
      user:'max',
      createdAt: 1554090956000,
      msg: 'Gracias'
    },
    {
      user:'simon',
      createdAt: 1554091056000,
      msg: 'denada'
    },
  ];

  currentUser = 'simon'; 
  newMsg = '';
  @ViewChild(IonContent) content: IonContent

  constructor() { }

  sendMessage(){
    this.mensajes.push({
      user: 'simon',
      createdAt: new Date().getTime(),
      msg:this.newMsg
    });

    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }

  ngOnInit() {
  }

}
