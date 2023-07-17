import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent {

  @Input() public playlistThumbnails:string | undefined;
  @Input() public title:string | undefined;
  @Input() public description:string | undefined;

}
