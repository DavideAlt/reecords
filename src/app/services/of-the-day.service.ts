import { Injectable } from '@angular/core';
import { ReecordsService } from './reecords.service';
import { Song } from '../model/Song';
import { Album } from '../model/Album';
import { Artist } from '../model/Artist';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfTheDayService{
  private _currentDate: string;
  private _songOfTheDay!: Song;
  private _albumOfTheDay!: Album;
  private _artistOfTheDay!: Artist;
  private _lastUpdatedDate: string = '';

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

  getNewSongOfTheDay(): Observable<Song> {
    if (this._currentDate !== this._lastUpdatedDate) {
      return this._reecordsService.getRandomSong().pipe(
        tap(song => {
          this._songOfTheDay = song;
          this._lastUpdatedDate = this._currentDate;
        })
      );
    }
    return of(this._songOfTheDay);
  }
  
  getNewAlbumOfTheDay(): Observable<Album> {
    if (this._currentDate !== this._lastUpdatedDate) {
      return this._reecordsService.getRandomAlbum().pipe(
        tap(album => {
          this._albumOfTheDay = album;
        })
      );
    }
    return of(this._albumOfTheDay);
  }

  getNewArtistOfTheDay(): Observable<Artist> {
    if (this._currentDate !== this._lastUpdatedDate) {
      return this._reecordsService.getRandomArtist().pipe(
        tap(artist => {
          this._artistOfTheDay = artist;
        })
      );
    }
    return of(this._artistOfTheDay);
  }
}
