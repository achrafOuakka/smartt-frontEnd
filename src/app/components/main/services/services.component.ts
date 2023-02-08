import { Card0 } from './../../../interfaces/card0';
import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/interfaces/title';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  service: {title: Title,card0 : Array<Card0>,card1: Array<{imgPath: string, title : string, text:string,link? : string }>};

  constructor() {

    this.service= {title: {},card0 : [],card1: []};

  }

  ngOnInit(): void {
  }

}
