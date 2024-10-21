import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { LoadingService } from 'src/app/shared/components/controllers/loading/loading.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],

})
export class AuthPage implements OnInit {
   public email!: FormControl;
   public password!: FormControl;
   public loginForm!: FormGroup;
 

  constructor(private readonly authSrv: AuthService, private readonly navCtrl: NavController, private readonly toastservice: ToastService, private readonly loadingSrv: LoadingService){
    this.initForm();
  }

  ngOnInit() {
  }

  public async doLogin(){
  try{
      await this.loadingSrv.show();
      const { email, password } = this.loginForm.value;
      await this.authSrv.Login(email, password);
      await this.loadingSrv.dimiss();
      this.navCtrl.navigateForward("home");
      
      //Mensaje de bienvenida en caso de exito:
      this.toastservice.presentToast('Welcome, dear user', 2000, 'top');
    }catch(error){
      await this.loadingSrv.dimiss();
      this.toastservice.presentErrorToast('Invalid email or password, please try again');
    }
    
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
