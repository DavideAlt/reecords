import { Component, OnInit } from '@angular/core';
import { Song } from '../../model/Song';
import { OfTheDayService } from '../../services/of-the-day.service';
import { Album } from '../../model/Album';
import { Artist } from '../../model/Artist';

@Component({
  selector: 'ree-featured',
  templateUrl: './ree-featured.component.html',
  styleUrl: './ree-featured.component.scss'
})
export class ReeFeaturedComponent implements OnInit {
  songOfTheDay: Song = new Song('', '', [], '');
  albumOfTheDay: Album = new Album('', '', [], '', 0);
  artistOfTheDay: Artist = new Artist('', '', []);

  constructor(private _ofTheDay: OfTheDayService) {}
  
  ngOnInit(): void {
    this._ofTheDay.getNewSongOfTheDay().subscribe(song => {
      this.songOfTheDay = song;
    });

    this._ofTheDay.getNewAlbumOfTheDay().subscribe(album => {
      this.albumOfTheDay = album;
    });

    this._ofTheDay.getNewArtistOfTheDay().subscribe(artist => {
      this.artistOfTheDay = artist;
    });
  }
}
