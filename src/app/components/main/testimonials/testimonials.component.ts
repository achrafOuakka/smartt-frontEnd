import { Title } from 'src/app/interfaces/title';
import { Component, OnInit } from '@angular/core';
import { Card3 } from 'src/app/interfaces/card3';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials : {title : Title,card?: Array<{objet:Array<Card3>}>};

  listProfile : Array<{objet:Array<Card3>}> = [];
  lenghtListProfile = 0;
  constructor() {

    this.listProfile = [
      {
        objet:[{imgPath: 'testimonials-4.jpg', fullName : 'Matt Brandon', profile : 'Freelancer', description:' Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. '},
        {imgPath: 'testimonials-5.jpg', fullName : 'John Larson', profile : 'Entrepreneur', description:' Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. '}]
      },
      {
        objet:[{imgPath: 'testimonials-1.jpg', fullName : 'Saul Goodman', profile : 'Ceo & Founder', description:' Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. '},
        {imgPath: 'testimonials-2.jpg', fullName : 'Sara Wilsson', profile : 'Designer', description:' Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. '}]
      },
      {
        objet:[{imgPath: 'testimonials-3.jpg', fullName : 'Jena Karlis', profile : 'Store Owner', description:' Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. '},
        {imgPath: 'testimonials-4.jpg', fullName : 'Matt Brandon', profile : 'Freelancer', description:' Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. '}]
      },
      {
        objet:[{imgPath: 'testimonials-5.jpg', fullName : 'John Larson', profile : 'Freelancer', description:' Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. '},
        ]
      }
      ];

      this.lenghtListProfile = this.listProfile.length;

      this.testimonials = {
        title : {title:'TESTIMONIALS', subTitle:'Magnam dolores commodi suscipit eum quidem consectetur velit:'},
        card: this.listProfile};

      console.log(this.lenghtListProfile)
  }
  ngOnInit(): void {

  }

}
