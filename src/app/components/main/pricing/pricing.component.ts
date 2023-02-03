import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  listPricing : Array<{title: string, prix : string, li_no:Array<number>}> = [];
  listPricingItems : Array<any> = [];

  constructor() {
    this.listPricing = [
      {title: 'Free', prix : '0', li_no:[3,4]},
      {title: 'Business', prix : '19', li_no:[4]},
      {title: 'Developer', prix : '29', li_no:[]},
    ];
    this.listPricingItems = ['Aida dere','Nec feugiat nisl','Nulla at volutpat dola','Pharetra massa','Massa ultricies mi']
  }

  ngOnInit(): void {
  }

}
