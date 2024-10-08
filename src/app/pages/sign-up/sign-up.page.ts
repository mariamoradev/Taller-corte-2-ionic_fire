import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

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

  constructor(private readonly authSrv: AuthService) { 
    this.initForm();
  }

  ngOnInit() {
  }

  public async doRegister(){
    try {
      console.log(this.registerForm.value);
      const{email, password} = this.registerForm.value;
      const response= await this.authSrv.register(email, password);
       
    } catch (error) {
      console.error(error);
    }
    
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
