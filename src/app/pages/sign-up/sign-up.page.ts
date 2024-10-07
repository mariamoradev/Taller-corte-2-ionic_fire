import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  public image!: FormControl;
  public name!: FormControl;
  public lastName!: FormControl;
  public email!: FormControl;
  public password!: FormControl;
  public registerForm!: FormGroup;
  public age!: FormControl;
  public id!: FormControl;
  public phone!: FormControl;

  constructor() { 
    this.initForm();
  }

  ngOnInit() {
  }

  public doRegister(){
    console.log(this.registerForm.value);
  }

  private initForm(){
    this.image = new FormControl("");
    this.name = new FormControl("",[Validators.required]);
    this.lastName = new FormControl("",[Validators.required]);
    this.email = new FormControl("",[Validators.required]);
    this.password = new FormControl("",[Validators.required]);
    this.age = new FormControl("",[Validators.required]);
    this.id  = new FormControl("",[Validators.required]);
    this.phone = new FormControl("",[Validators.required]);
    this.registerForm = new FormGroup({
      image: this.image,
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      age: this.age,
      id: this.id,
      phone: this.phone


      
    });
  }

}
