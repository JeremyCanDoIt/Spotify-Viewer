import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  @Input() resource:ResourceData;
  imgURL:string;
  name:string;
  url:string;
  id:string;
  constructor() {
    
   }

  ngOnInit() {
    this.url=this.resource.url;
    this.id=this.resource.id;
    this.imgURL=this.resource.imageURL;
    this.name=this.resource.name;
  }

}
