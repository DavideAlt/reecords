import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public _authService: AuthService, private _router: Router) {}


  navigateToHome() {
    this._router.navigate(['\main']);
  }

  login() {
    this._authService.login();
  }

  logout() {
    this._authService.logout();
  }
}
