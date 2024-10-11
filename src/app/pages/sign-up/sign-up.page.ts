import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingService } from 'src/app/shared/components/controllers/loading/loading.service';
import { ToastService } from 'src/app/shared/services/toast.service';


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
  public image!: FormControl;
  public email!: FormControl;
  public password!: FormControl;
  public registerForm!: FormGroup;
  

  constructor(private readonly authSrv: AuthService, private readonly navCtrl: NavController, 
    private readonly LoadingSrv: LoadingService, private readonly AngularFire: AngularFirestore,
    private readonly StorageSrv: StorageService, private readonly toastservice: ToastService) { 
    this.initForm();
  }

  ngOnInit() {
  }

  public async doRegister(){
    try { 
      await this.LoadingSrv.show();
      console.log(this.registerForm.value);
      const{email, password, image} = this.registerForm.value;
      const response: any= await this.authSrv.register(email, password);
      const userID = response.user?.uid;
      if(!userID){
        throw new Error('Failed to get user ID.');
      }
      this.navCtrl

      //extraccion de imagen
      let imageurl = "";
      if(image){
        imageurl = await this.StorageSrv.uploadFileAndGetUrl(image);
      }else {
        console.warn('No image was provided.');
      }
      //llamas la funcion del register y mandarlo
      await this.signUser(userID, email, imageurl);{
        await this.LoadingSrv.dimiss();

        //Mensaje exito:
        this.toastservice.presentToast('Registration successful, welcome!',2000,'top');

        // navegation pagina de inicio de sesión
        this.navCtrl.navigateForward("/auth");
      } 
       
    } catch (error) {
      console.error(error);
      await this.LoadingSrv.dimiss();

      //Mensajito error:
      this.toastservice.presentErrorToast('Registration failed. Please try again.');
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
    this.registerForm = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      age: this.age,
      email: this.email,
      password: this.password,
      image: this.image,
      phone: this.phone,

    });
  }
  //Mandar los datos
  private async signUser(userID: string, email: string, imageurl: string){
    try{
      await this.AngularFire.collection('user').doc(userID).set({
        email,
        image: imageurl, 
        name: this.registerForm.get('name')?.value,
        lastName: this.registerForm.get('lastName')?.value,
        age: this.registerForm.get('age')?.value,
        phone: this.registerForm.get('phone')?.value,
        
      });
      console.log('Yes');
    }catch(error){
      console.error('No', error);
      throw error;
    }
  }

}
