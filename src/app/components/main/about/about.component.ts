import { Card0 } from './../../../interfaces/card0';
import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/interfaces/title';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about? : { title: Title, buttonText:string, imagePath:string, card : Card0};

  constructor() { }

  ngOnInit(): void {
    this.about = {
      title: {title:'QUI SOMMES NOUS?', subTitle:''},
      buttonText:'string',
      imagePath:'string',
      card : {}}
  }

}
