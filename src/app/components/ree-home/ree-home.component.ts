import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'ree-home',
  templateUrl: './ree-home.component.html',
  styleUrl: './ree-home.component.scss'
})
export class ReeHomeComponent {
  isLoading = true;

  constructor(public _authService: AuthService, private _router: Router) {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
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
