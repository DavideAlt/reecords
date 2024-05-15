import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _oauthService: OAuthService) {
    this.configure();
  }

  public configure() {
    this._oauthService.configure(authConfig);
    this._oauthService.tryLoginCodeFlow();
  }

  public login() {
    this._oauthService.initCodeFlow();
  }

  public logout() {
    this._oauthService.logOut();
  }

  public get token() {
    return this._oauthService.getAccessToken();
  }

  public get isLoggedIn(): boolean {
    return this._oauthService.hasValidAccessToken();
  }
}
