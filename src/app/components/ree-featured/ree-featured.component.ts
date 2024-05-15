import { Component, OnInit } from '@angular/core';
import { Song } from '../../model/Song';
import { OfTheDayService } from '../../services/of-the-day.service';
import { AuthService } from '../../auth/auth.service';
import { Album } from '../../model/Album';
import { Artist } from '../../model/Artist';

@Component({
  selector: 'ree-featured',
  templateUrl: './ree-featured.component.html',
  styleUrl: './ree-featured.component.scss'
})
export class ReeFeaturedComponent implements OnInit {
  songOfTheDay: Song = new Song(0, '', [], '');
  albumOfTheDay: Album = new Album(0, '', [], '', 0);
  artistOfTheDay: Artist = new Artist(0, '', []);

  constructor(private _ofTheDay: OfTheDayService, public _authService: AuthService) {
    setTimeout(() => {
      this.songOfTheDay = this._ofTheDay.songOfTheDay;
      this.albumOfTheDay = this._ofTheDay.albumOfTheDay;
      this.artistOfTheDay = this._ofTheDay.artistOfTheDay;
    }, 3000);
  }

  ngOnInit(): void {
  }
}
