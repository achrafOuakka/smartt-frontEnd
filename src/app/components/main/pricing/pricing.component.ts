import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/interfaces/title';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricing : {title : Title,card?: Array<{title: string, prix : string, li_no:Array<number>}>};

  listPricing : Array<{title: string, prix : string, li_no:Array<number>}> = [];
  listDetailsFeatures : Array<any> = [];

  constructor() {
    this.listPricing = [
      {title: 'Free', prix : '0', li_no:[3,4]},
      {title: 'Business', prix : '19', li_no:[4]},
      {title: 'Developer', prix : '29', li_no:[]},
    ];
    this.listDetailsFeatures = ['Aida dere','Nec feugiat nisl','Nulla at volutpat dola','Pharetra massa','Massa ultricies mi']

    this.pricing = {
      title : {title:'PRICING', subTitle:'Sit sint consectetur velit nemo qui impedit suscipit alias ea'},
      card: this.listPricing};
  }

  ngOnInit(): void {
  }

}
