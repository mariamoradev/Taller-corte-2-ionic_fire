import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],

})
export class AuthPage implements OnInit {

  public email!: FormControl;
  public password!: FormControl;
  public loginForm!: FormGroup;
 

  constructor(private readonly authSrv: AuthService, private readonly navCtrl: NavController){
    this.initForm();
  }

  ngOnInit() {
  }

  public async doLogin(){
    try{
      const { email, password } = this.loginForm.value;
      await this.authSrv.Login(email, password);
      this.navCtrl.navigateForward("home");
    }catch(error){
      console.error(error);
    }
  }


  private initForm(){
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password =  new FormControl('', [Validators.required]);
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });

  }
}
