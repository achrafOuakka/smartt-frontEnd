import { Card0 } from './../../../interfaces/card0';
import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/interfaces/title';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact : {
    title : Title,
    card : {icon: string, text : string, listDetailsFeatures:Array<string>},
    card1 : Card0,
    map : string,
  };

  constructor() {

    this.contact = {
      title : {title:'NOUS CONTACTER', subTitle:''},
      card : {icon: '', text : '', listDetailsFeatures:[]},
      card1 : {},
      map : '',
    }

  }

  ngOnInit(): void {
  }

}
