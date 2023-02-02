import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  listProfile : Array<{objet:any}> = [];
  lenghtListProfile = 0;
  constructor() {


  }
  ngOnInit(): void {
    this.listProfile = [
      {
        objet:[{img: 'testimonials-4.jpg', title : 'Matt Brandon', subTitle : 'Freelancer', text:' Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. '},
        {img: 'testimonials-5.jpg', title : 'John Larson', subTitle : 'Entrepreneur', text:' Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. '}]
      },
      {
        objet:[{img: 'testimonials-1.jpg', title : 'Saul Goodman', subTitle : 'Ceo & Founder', text:' Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. '},
        {img: 'testimonials-2.jpg', title : 'Sara Wilsson', subTitle : 'Designer', text:' Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. '}]
      },
      {
        objet:[{img: 'testimonials-3.jpg', title : 'Jena Karlis', subTitle : 'Store Owner', text:' Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. '},
        {img: 'testimonials-4.jpg', title : 'Matt Brandon', subTitle : 'Freelancer', text:' Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. '}]
      },
      {
        objet:[{img: 'testimonials-5.jpg', title : 'John Larson', subTitle : 'Freelancer', text:' Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. '},
        {img: 'testimonials-1.jpg', title : 'Saul Goodman',subTitle : 'Ceo & Founder', text:' Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. '}]
      }
      ];

      this.lenghtListProfile = this.listProfile.length;

      console.log(this.lenghtListProfile)
  }

}
