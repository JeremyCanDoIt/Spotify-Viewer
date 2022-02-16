import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistData } from '../../data/artist-data';
import { AlbumData } from '../../data/album-data';
import { TrackData } from '../../data/track-data';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  searchString:string;
  carouselId:string="dasdasda";
  searchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[];

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
    let selector=document.getElementById("selectCat");
    for (const category of this.searchCategories) {
      var el = document.createElement("option");
      el.textContent = category;
      el.value = category;
      selector.appendChild(el);
  }
  }

  search() {
    //TODO: call search function in spotifyService and parse response
    this.spotifyService.searchFor(this.searchCategory,this.searchString).then((promise) =>
    this.resources=promise
    
    );
    
    if(this.searchCategory=="Album"||this.searchCategory=="Artist"){
        
    }
  }

}
