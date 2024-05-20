import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Song } from '../model/Song';
import { Album } from '../model/Album';
import { Artist } from '../model/Artist';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReecordsService {

  private _baseSearchUri ='https://api.spotify.com/v1/';

  constructor(private _http: HttpClient, private _authService: AuthService) {}

  private get headers(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this._authService.token}`
    });
  }

  private getRandomItem<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
  }

  getRandomSearchQuery() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    return chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  getRandomSong(): Observable<Song> {
    const query = this.getRandomSearchQuery();
    
    return this._http.get<any>(`${this._baseSearchUri}search?q=${query}&type=track&limit=50`, { headers: this.headers})
    .pipe(
      map(res => {
        const tracks = res.tracks.items as Song[];
        const track = this.getRandomItem(tracks);
        return new Song(track.id, track.name, track.artists, track.album);
      }),
      catchError(err => {
        console.error('getRandomSong '+ err);
        return of(new Song(0, '', [], ''));
      })
    );
  }
  
  getRandomAlbum(): Observable<Album> {
    const query = this.getRandomSearchQuery();

    return this._http.get<any>(`${this._baseSearchUri}search?q=${query}&type=album&limit=50`, { headers: this.headers })
      .pipe(
        map(res => {
          const albums = res.albums.items as Album[];
          const album = this.getRandomItem(albums);
          return new Album(album.id, album.name, album.artists, album.releaseDate, album.totalTracks);
        }),
        catchError(err => {
          console.error('getRandomAlbum ', err);
          return of(new Album(0, '', [], '', 0));
        })
      );
  }
  
  getRandomArtist(): Observable<Artist> {
    const query = this.getRandomSearchQuery();
    return this._http.get<any>(`${this._baseSearchUri}search?q=${query}&type=artist&limit=50`, { headers: this.headers })
      .pipe(
        map(res => {
          const artists = res.artists.items as Artist[];
          const artist = this.getRandomItem(artists);
          return new Artist(artist.id, artist.name, artist.genres);
        }),
        catchError(err => {
          console.error('getRandomArtist ', err);
          return of(new Artist(0, '', []));
        })
      );
  }
}
