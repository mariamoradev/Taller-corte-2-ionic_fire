import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireStorageModule} from "@angular/fire/compat/storage"
import { environment } from 'src/environments/environment.prod';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ]
})
export class CoreModule { }
