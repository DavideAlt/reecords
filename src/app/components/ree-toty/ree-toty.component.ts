import { Component, OnInit } from '@angular/core';
import { Song } from '../../model/Song';
import { ReecordsService } from '../../services/reecords.service';

@Component({
  selector: 'ree-toty',
  templateUrl: './ree-toty.component.html',
  styleUrl: './ree-toty.component.scss'
})
export class ReeTotyComponent implements OnInit {
  topSongs: Song[] = [];

  constructor(private _reecordsService: ReecordsService) {}

  ngOnInit(): void {
    this._reecordsService.getTopSongs().subscribe(songs => {
        this.topSongs = songs.slice(0, 10);
    });
  }

}
