import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],

})
export class AuthPage implements OnInit {
   public email!: FormControl;
   public password!: FormControl;
   public loginForm!: FormGroup;
 

  constructor(private readonly authSrv: AuthService, private readonly navCtrl: NavController, private readonly toastservice: ToastService ){
    this.initForm();
  }

  ngOnInit() {
  }

  public async doLogin(){
  try{
      const { email, password } = this.loginForm.value;
      await this.authSrv.Login(email, password);
      this.navCtrl.navigateForward("home");
      //Mensaje de bienvenida en caso de exito:
      this.toastservice.presentToast('Welcome, dear user', 2000, 'top');
    }catch(error){
      console.error(error);
      this.toastservice.presentErrorToast('Invalid email or password, please try again');
    }
    console.log(this.loginForm.value);
  }


  private initForm(){
    this.email = new FormControl('', [Validators.email, Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }
}
