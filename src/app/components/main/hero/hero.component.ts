import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero : {title:string, text:string, buttonText:string, imgPath:string };

  constructor() {
    this.hero = {
     title:'Guider votre transformation digitale',
     text:'Nos expertises tech pour construire votre business de demain',
     buttonText:'En savoir plus',
     imgPath:'./assets/images/hero-002.png' };
   }

  ngOnInit(): void {

  }

}
