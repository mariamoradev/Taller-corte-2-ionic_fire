import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

type buttonType = "text" | "number" | "tel" | "email" | "password";

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent  implements OnInit {

  @Input() control!: FormControl;
  @Input() type: buttonType = "text" ;
  @Input() label!: string;
  @Input() autocomplete!: string;
  @Input() icon!: string;

  isPassword!:boolean;
  hide: boolean = true;

  constructor() { }

  ngOnInit() {
    if (this.type == 'password') this.isPassword = true;
  }

  public setValue(event: any){
    this.control.setValue(event.target.value);
  }

  showOrHidePassword(){
    this.hide = !this.hide;
    if (this.hide)this.type = 'password';
    else this.type = 'text';
  }
}
