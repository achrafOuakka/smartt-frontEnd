import { Component, OnInit } from '@angular/core';
import { Card0 } from 'src/app/interfaces/card0';
import { Title } from 'src/app/interfaces/title';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  features: {title: Title,card: Array<{icon: string, colorIcon : string, text:string}>};

  listFeatues : Array<{icon: string, colorIcon : string, text:string}> = [];

  constructor() {
    this.listFeatues = [
      {icon: 'fa-archive', colorIcon : '#ffbb2c', text:'Lorem Ipsum'},
      {icon: 'fa-bar-chart ', colorIcon : '#5578ff', text:'Dolor Sitema'},
      {icon: 'fa-calendar-minus-o ', colorIcon : '#e80368', text:'Sed perspiciatis'},
      {icon: 'fa-paint-brush ', colorIcon : '#e361ff', text:'Magni Dolores'},
      {icon: 'fa-database', colorIcon : '#47aeff', text:'Nemo Enim'},
      {icon: 'fa-certificate ', colorIcon : '#ffa76e', text:'Eiusmod Tempor'},
      {icon: 'fa-file-text-o ', colorIcon : '#11dbcf', text:'Midela Teren'},
      {icon: 'fa-tag', colorIcon : '#4233ff', text:'Pira Neve'},
      {icon: 'fa-anchor ', colorIcon : '#b2904f', text:'Dirada Pack'},
      {icon: 'fa-music', colorIcon : '#b20969', text:'Moton Ideal'},
      {icon: 'fa-signal', colorIcon : '#ff5828', text:'Verdo Park'},
      {icon: 'fa-hand-o-up ', colorIcon : '#29cc61', text:'Flavor Nivelanda'}
    ];

    this.features = {
      title:{title:'Features', subTitle:'Necessitatibus eius consequatur ex aliquid fuga eum quidem'},
      card : []};
  }

  ngOnInit(): void {
  }

}
