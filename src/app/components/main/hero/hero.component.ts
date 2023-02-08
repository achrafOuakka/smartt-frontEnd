import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  here : {title:string, text:string, buttonText:string, imagePath:string };

  constructor() {
    this.here = {title:'string', text:'string', buttonText:'string', imagePath:'string' };
   }

  ngOnInit(): void {

  }

}
