import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  listTeam : Array<{img: string, title : string, text:string}> = [];
  constructor() {
    this.listTeam = [
      {img: 'team-1.jpg', title : 'Walter White', text:'Chief Executive Officer'},
      {img: 'team-2.jpg', title : 'Sarah Jhonson', text:'Product Manager'},
      {img: 'team-3.jpg', title : 'William Anderson', text:'CTO'},
      {img: 'team-4.jpg', title : 'Amanda Jepson', text:'Accountant'},
    ];
  }

  ngOnInit(): void {
  }

}
