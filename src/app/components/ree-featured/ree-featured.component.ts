import { Component, OnInit } from '@angular/core';
import { Song } from '../../model/Song';
import { OfTheDayService } from '../../services/of-the-day.service';
import { Album } from '../../model/Album';
import { Artist } from '../../model/Artist';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'ree-featured',
  templateUrl: './ree-featured.component.html',
  styleUrl: './ree-featured.component.scss',
  animations: [
    trigger('hoverAnimation', [
      state('normal', style({
        transform: 'scale(1)',
        opacity: 1,
      })),
      state('hover', style({
        transform: 'scale(1.1)',
        opacity: 1,
      })),
      transition('normal => hover', [
        animate('0.3s')
      ]),
      transition('hover => normal', [
        animate('0.3s')
      ])
    ])
  ]
})

export class ReeFeaturedComponent implements OnInit {

  artistOfTheDay: Artist = new Artist('', '', []);
  albumOfTheDay: Album = new Album('', '', [this.artistOfTheDay], '', 0, '');
  songOfTheDay: Song = new Song('', '', [this.artistOfTheDay], this.albumOfTheDay);

  hoverSong = 'normal';
  hoverAlbum = 'normal';
  hoverArtist = 'normal';

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
