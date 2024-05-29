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

  private _spotifyBaseSearchUri = 'https://api.spotify.com/v1/';
  private _spotifyTopSongsID = '37i9dQZEVXbMDoHDwVN2tF';

  constructor(private _http: HttpClient, private _authService: AuthService) {}

  private get headers(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this._authService.token}`
    });
  }

  /* 
   * START OF METHODS NEEDED FOR FEATURED COMPONENT 
   */
  
  private getRandomItem<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
  }

  getRandomSearchQuery() {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    return chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  getRandomSong(): Observable<Song> {
    const query = this.getRandomSearchQuery();
    
    return this._http.get<any>(`${this._spotifyBaseSearchUri}search?q=${query}&type=track&limit=50`, { headers: this.headers})
    .pipe(
      map(res => {
        const tracks = res.tracks.items as Song[];
        const track = this.getRandomItem(tracks);
        return new Song(track.id, track.name, track.artists, track.album);
      }),
      catchError(err => {
        console.error('getRandomSong '+ err);
        return of(new Song('', '', [], new Album('', '', [], '', 0, '')));
      })
    );
  }
  
  getRandomAlbum(): Observable<Album> {
    const query = this.getRandomSearchQuery();

    return this._http.get<any>(`${this._spotifyBaseSearchUri}search?q=${query}&type=album&limit=50`, { headers: this.headers })
      .pipe(
        map(res => {
          const albums = res.albums.items as Album[];
          const album = this.getRandomItem(albums);
          return new Album(album.id, album.name, album.artists, album.release_date, album.total_tracks, album.imageRef);
        }),
        catchError(err => {
          console.error('getRandomAlbum ', err);
          return of(new Album('', '', [], '', 0, ''));
        })
      );
  }
  
  getRandomArtist(): Observable<Artist> {
    const query = this.getRandomSearchQuery();
    return this._http.get<any>(`${this._spotifyBaseSearchUri}search?q=${query}&type=artist&limit=50`, { headers: this.headers })
      .pipe(
        map(res => {
          const artists = res.artists.items as Artist[];
          const artist = this.getRandomItem(artists);
          return new Artist(artist.id, artist.name, artist.genres);
        }),
        catchError(err => {
          console.error('getRandomArtist ', err);
          return of(new Artist('', '', []));
        })
      );
  }
  
  /* 
   * END OF METHODS NEEDED FOR FEATURED COMPONENT 
   */

  
  /* 
   * START OF METHODS NEEDED FOR TOTY COMPONENT 
   */

  getTopSongs(): Observable<Song[]> {
    return this._http.get<any>(`${this._spotifyBaseSearchUri}playlists/${this._spotifyTopSongsID}`, { headers: this.headers })
    .pipe(
      map(res => {    
        return res.tracks.items.map((item: any) => {
          const track = item.track;
          const artists = track.artists.map((artist: any) => new Artist(artist.id, artist.name, []));
          const album = new Album(track.album.id, track.album.name, track.album.release_date, track.album.total_tracks, artists, track.album.images[0].url);
          const song = new Song(track.id, track.name, artists, album);
          return song;
        });
      }),
      catchError(err => {
        console.error('getTopSongs ', err);
        return of([]);
      })
    );
  }

  /* 
   * END OF METHODS NEEDED FOR TOTY COMPONENT 
   */

    /* 
   * START OF METHODS NEEDED FOR SONG-DETAIL COMPONENT 
   */

    getSongById(trackID: string): Observable<Song> {
      return this._http.get<any>(`${this._spotifyBaseSearchUri}tracks/${trackID}`, { headers: this.headers })
      .pipe(
        map(track => {
        const artists = track.artists.map((artist: any) => new Artist(artist.id, artist.name, []));
        const album = new Album(track.album.id, track.album.name, track.album.release_date, track.album.total_tracks, artists, track.album.images[0].url);
        const foundTrack = new Song(track.id, track.name, artists, album);
        return foundTrack;
      })
    );
    }
  
    /* 
     * END OF METHODS NEEDED FOR SONG-DETAIL COMPONENT 
     */
}
