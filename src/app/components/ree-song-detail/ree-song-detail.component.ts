import { Component, OnInit } from '@angular/core';
import { Song } from '../../model/Song';
import { ActivatedRoute } from '@angular/router';
import { ReecordsService } from '../../services/reecords.service';
import { Artist } from '../../model/Artist';

@Component({
  selector: 'ree-song-detail',
  templateUrl: './ree-song-detail.component.html',
  styleUrl: './ree-song-detail.component.scss'
})
export class ReeSongDetailComponent implements OnInit{
  song: Song = new Song('IDIDIDID','NAMENAME', [
    new Artist('', 'ARTISTARTIST', []),
    new Artist('', 'ARTIST22222', [])
  ], 'ALBUMALBUM');

  constructor(private _route: ActivatedRoute, private _reecordsService: ReecordsService) {}

  ngOnInit(): void {
    if (history.state.track) {
      this.song = history.state.track;
      return;
    }

    this._route.url.subscribe(segments => {
      let trackID = segments[segments.length-1].toString();
      this.findTrackById(trackID);
    })
  }

  private findTrackById(trackID: string) {
    this._reecordsService.getSongById(trackID).subscribe(
      track => {
        this.song = track;
      }
    );
  }

}
