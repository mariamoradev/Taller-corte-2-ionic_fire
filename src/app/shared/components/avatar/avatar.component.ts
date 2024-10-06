import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent  implements OnInit {
  protected image = "https://ionicframework.com/docs/img/demos/avatar.svg";

    @Input() control = new FormControl(); //Para que el formulario sea reactivo
    @Input() onlyView = false; //limitarlo a solo lectura

    protected mimeType = "image/jpeg"; //para que solo sean archivos de imagenes
  constructor() { }

  ngOnInit() {}


  public uploadFile(event:any){
    console.log(event.target.files[0]);
  }

}
