import { Component, OnInit } from '@angular/core';
import { Card3 } from 'src/app/interfaces/card3';
import { Title } from 'src/app/interfaces/title';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team : {title : Title,cards?: Array<Card3>}| null = null;

  listTeam : Array<Card3> = [];
  constructor() {
    this.listTeam = [
      {imgPath: 'team-1.jpg', fullName : 'Walter White', profile:'Chief Executive Officer'},
      {imgPath: 'team-2.jpg', fullName : 'Sarah Jhonson', profile:'Product Manager'},
      {imgPath: 'team-3.jpg', fullName : 'William Anderson', profile:'CTO'},
      {imgPath: 'team-4.jpg', fullName : 'Amanda Jepson', profile:'Accountant'},
    ];
    this.team = {
      title : {title:'team', subTitle:'Necessitatibus eius consequatur ex aliquid fuga eum quidem'},
      cards: this.listTeam};
  }

  ngOnInit(): void {
  }

}
