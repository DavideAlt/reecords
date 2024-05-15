import { Injectable } from '@angular/core';
import { ReecordsService } from './reecords.service';
import { Song } from '../model/Song';
import { Album } from '../model/Album';
import { Artist } from '../model/Artist';

@Injectable({
  providedIn: 'root'
})
export class OfTheDayService{
  private _currentDate: string;
  private _songOfTheDay: Song;
  private _albumOfTheDay: Album;
  private _artistOfTheDay: Artist;
  private _lastUpdatedDate: string | null = null;

  constructor(private _reecordsService: ReecordsService) {
    this._currentDate = this.getCurrentDate();
    this._songOfTheDay = this.songOfTheDay;
    this._albumOfTheDay = this.albumOfTheDay;
    this._artistOfTheDay = this.artistOfTheDay;
  }

  private getCurrentDate = (): string => {
    let date = new Date();

    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear().toString();

    return `${day}${month}${year}`;
  }

  generateNewSongOfTheDay() {
    this._reecordsService.getRandomSong().then(song => this._songOfTheDay = song);
  }
  
  generateNewAlbumOfTheDay() {
    this._reecordsService.getRandomAlbum().then(album => this._albumOfTheDay = album);
  }
  
  generateNewArtistOfTheDay() {
    this._reecordsService.getRandomArtist().then(artist => this._artistOfTheDay = artist);
  }
  
  get songOfTheDay(): Song {
    if (this._currentDate !== this._lastUpdatedDate) {
      this.generateNewSongOfTheDay();
    }
    return this._songOfTheDay!;
  }

  get albumOfTheDay(): Album {
    if (this._currentDate !== this._lastUpdatedDate) {
      this.generateNewAlbumOfTheDay();
    }
    return this._albumOfTheDay!;
  }

  get artistOfTheDay(): Artist {
    if (this._currentDate !== this._lastUpdatedDate) {
      this.generateNewArtistOfTheDay();
    }
    return this._artistOfTheDay!;
  }
}
