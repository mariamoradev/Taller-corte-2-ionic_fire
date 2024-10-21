import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from '../shared/services/toast.service';
import { AuthService } from '../shared/services/auth/auth.service';
import { LoadingController } from '@ionic/angular';
import { LoadingService } from 'src/app/shared/components/controllers/loading/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public id: string="";

  constructor(private authService: AuthService, private router: Router, private toastService: ToastService, private readonly loadingSrv: LoadingService){ }

  async ngOnInit() {
    this.id = await this.authService.getCurrentUid() ;
  }
  async logout() {
    try {
      await this.loadingSrv.show();
      await this.authService.logOut();
      this.toastService.presentToast('Log out successful', 2000, 'top');
      await this.loadingSrv.dimiss();
      this.router.navigate(['/auth']); // me manda pal' login
    } catch (error) {
      await this.loadingSrv.dimiss(); 
      this.toastService.presentErrorToast('Error: ' + error.message);
    } 
     
  }
} 
