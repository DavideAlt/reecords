import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public _authService: AuthService) {}

  login() {
    this._authService.login();
  }

  logout() {
    this._authService.logout();
  }
}
