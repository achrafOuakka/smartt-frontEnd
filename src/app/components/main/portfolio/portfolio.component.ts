import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/interfaces/title';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio: {title: Title,cards : any,listTag: Array<string>}| null = null;

  listPortfolio : Array<{imgPath: string, title : string, tag:string,linkAccessDetails? : string,linkShowImage? : string }> = [];
  currentTag = "all";

  listTag : Array<string> = [];
  constructor() {
  }

  ngOnInit(): void {
    this.listPortfolio = [
      {imgPath: 'portfolio-1.jpg', title : 'App 1', tag:'app'},
      {imgPath: 'portfolio-2.jpg', title : 'Web 3', tag:'web'},
      {imgPath: 'portfolio-3.jpg', title : 'App 2', tag:'app'},
      {imgPath: 'portfolio-4.jpg', title : 'card 2', tag:'card'},
      {imgPath: 'portfolio-5.jpg', title : 'Web 2', tag:'web'},
      {imgPath: 'portfolio-6.jpg', title : 'App 3', tag:'app'},
      {imgPath: 'portfolio-7.jpg', title : 'Card 1', tag:'card'},
      {imgPath: 'portfolio-8.jpg', title : 'Card 3', tag:'card'},
      {imgPath: 'portfolio-9.jpg', title : 'Web 1', tag:'web'},
    ];
    this.listTag = ['all','app','web','card'];

    this.portfolio = {
      title: {title:'PORTFOLIO', subTitle:'Necessitatibus eius consequatur ex aliquid fuga eum quidem'},
      cards : this.listPortfolio,
      listTag: this.listTag};
  }

  filterBytag(tag : string){
    this.currentTag = tag;
  }

}
