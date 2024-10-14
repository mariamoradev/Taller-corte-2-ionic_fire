import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from '../shared/services/toast.service';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private authService: AuthService, private router: Router, private toastService: ToastService){ }

  logout() {
    this.authService.logOut().then(() => {
    this.toastService.presentToast('Log out successful',2000,'top');
    this.router.navigate(['/auth']);//me manda para el login
  }).catch(error => {
      this.toastService.presentErrorToast('Error: ' + error.message);
    });
  }
}