import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  public name!: FormControl; 
  public lastName!: FormControl;
  public age!: FormControl;
  public phone!: FormControl;
  public id!: FormControl;
  public image!: FormControl;
  public email!: FormControl;
  public password!: FormControl;
  public registerForm!: FormGroup;
  
  
  

  constructor(private readonly authSrv: AuthService, private readonly navCtrl: NavController) { 
    this.initForm();
  }

  ngOnInit() {
  }

  public async doRegister(){
    try {
      console.log(this.registerForm.value);
      const{email, password} = this.registerForm.value;
      const response= await this.authSrv.register(email, password);
      this.navCtrl
       
    } catch (error) {
      console.error(error);
    }
    
  }

  private initForm(){
    this.name = new FormControl("",[Validators.required]);
    this.lastName = new FormControl("",[Validators.required]);
    this.age = new FormControl("",[Validators.required]);
    this.image = new FormControl("");
    this.email = new FormControl("",[Validators.required]);
    this.password = new FormControl("",[Validators.required]);
    this.phone = new FormControl("",[Validators.required]);
    this.id  = new FormControl("",[Validators.required]);
    this.registerForm = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      age: this.age,
      email: this.email,
      password: this.password,
      image: this.image,
      phone: this.phone,
      id: this.id,
    });
  }

}
