import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: UserService, private toast: NgToastService, private router: Router) { }
  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.toast.error({detail:"ERROR", summary:"Please Login First!"});
      this.router.navigate(['login']);
      return false;
    }
    // logged in, so return true
    this.authService.isLoggedIn();
    return true;
  }
}