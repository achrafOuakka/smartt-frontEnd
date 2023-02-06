import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  listPortfolioProcess : Array<{img: string, title : string, category:string}> = [];
  currentPortfolioFilter = "all";

  listCategory : Array<string> = [];
  constructor() {
    this.listPortfolioProcess = [
      {img: 'portfolio-1.jpg', title : 'App 1', category:'app'},
      {img: 'portfolio-2.jpg', title : 'Web 3', category:'web'},
      {img: 'portfolio-3.jpg', title : 'App 2', category:'app'},
      {img: 'portfolio-4.jpg', title : 'card 2', category:'card'},
      {img: 'portfolio-5.jpg', title : 'Web 2', category:'web'},
      {img: 'portfolio-6.jpg', title : 'App 3', category:'app'},
      {img: 'portfolio-7.jpg', title : 'Card 1', category:'card'},
      {img: 'portfolio-8.jpg', title : 'Card 3', category:'card'},
      {img: 'portfolio-9.jpg', title : 'Web 1', category:'web'},
    ];

    this.listCategory = ['all','app','web','card'];
  }

  ngOnInit(): void {
  }

  filterByCategory(category : string){
    this.currentPortfolioFilter = category;
  }

}
