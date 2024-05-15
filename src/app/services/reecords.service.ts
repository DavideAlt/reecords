import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReecordsService {

  constructor(private _http: HttpClient, private _authService: AuthService) {}
  
  getRandomSong(): string {
    return '';
  }
  
  getRandomAlbum(): string {
    return '';
  }
  
  getRandomArtist(): string {
    return '';
  }
}
