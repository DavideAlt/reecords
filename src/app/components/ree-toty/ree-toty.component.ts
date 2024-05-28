import { Component, OnInit } from '@angular/core';
import { Song } from '../../model/Song';
import { ReecordsService } from '../../services/reecords.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ree-toty',
  templateUrl: './ree-toty.component.html',
  styleUrl: './ree-toty.component.scss'
})
export class ReeTotyComponent implements OnInit {
  topSongs: Song[] = [];

  constructor(private _reecordsService: ReecordsService, private _router: Router) {}

  ngOnInit(): void {
    this._reecordsService.getTopSongs().subscribe(songs => {
        this.topSongs = songs.slice(0, 10);
    });
  }

  
  goToSongDetail(songID: string) {
    this._router.navigate([`/track/${songID}`]);
  }

}
