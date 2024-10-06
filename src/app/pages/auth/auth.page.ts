import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],

})
export class AuthPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])

  })

  constructor() { }

  ngOnInit() {
  }

  submit(){
    if (this.form.value) {
      console.log(this.form.value); // Imprime en consola si todo esta bien
    } else {
      console.log('Formulario inválido'); // Imprime si todo esta mal
    }
  }
}
