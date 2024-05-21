import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isLoading = true;

  constructor(public _authService: AuthService, private _router: Router) {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('a');
        
        this.isLoading = true;
      }
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  login() {
    this._authService.login();
  }

  logout() {
    this._authService.logout();
  }
}
