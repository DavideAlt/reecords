import { Injectable } from '@angular/core';
import { ReecordsService } from './reecords.service';

@Injectable({
  providedIn: 'root'
})
export class OfTheDayService {
  private _currentDate: string;
  private _songOfTheDay: string | null = null;
  private _albumOfTheDay: string | null = null;
  private _artistOfTheDay: string | null = null;
  private _lastUpdatedDate: string | null = null;

  constructor(private _reecordsService: ReecordsService) {
    this._currentDate = this.getCurrentDate();
  }

  private getCurrentDate = (): string => {
    let date = new Date();

    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear().toString();

    return `${day}${month}${year}`;
  }

  updateNewDate() {
    if (this._currentDate !== this._lastUpdatedDate) {
      this._songOfTheDay = this.generateNewSongOfTheDay();
      this._albumOfTheDay = this.generateNewAlbumOfTheDay();
      this._artistOfTheDay = this.generateNewArtistOfTheDay();
    }
  }
  
  generateNewSongOfTheDay(): string {
    return this._reecordsService.getRandomSong();
  }
  
  generateNewAlbumOfTheDay(): string {
    return this._reecordsService.getRandomAlbum();
  }
  
  generateNewArtistOfTheDay(): string {
    return this._reecordsService.getRandomArtist();
  }
  
  getSongOfTheDay(): string {
    this._currentDate = this.getCurrentDate();
    this.updateNewDate();
    return this._songOfTheDay!;
  }

  getAlbumOfTheDay(): string {
    this._currentDate = this.getCurrentDate();
    this.updateNewDate();
    return this._albumOfTheDay!;
  }

  getArtistOfTheDay(): string {
    this._currentDate = this.getCurrentDate();
    this.updateNewDate();
    return this._artistOfTheDay!;
  }
}
