import { Component, OnInit } from '@angular/core';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  images:any=[];

  constructor(private imagePicker: ImagePicker) { }

  getImages() {
    var options:ImagePickerOptions={
      maximumImagesCount:1,
      width:100,
      height:100
    }
    this.imagePicker.getPictures(options).then((results)=>{
      for(var interval = 0; interval<results.lenght; interval++){
        let filename = results[interval].substring(results[interval].lastIndexOf('/')+1);
        let path = results[interval].substring(0,results[interval].lastIndexOf('/')+1)
        
      }
    } );
  }
  ngOnInit() {
  }

}
