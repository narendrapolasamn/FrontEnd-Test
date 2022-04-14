import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-music-search-item',
  templateUrl: './music-search-item.html',
  styleUrls: ['./music-search-item.scss']
})
export class MusicSearchItemComponent {
  @Input() searchItems:any;
  constructor(){
    
  }
}
