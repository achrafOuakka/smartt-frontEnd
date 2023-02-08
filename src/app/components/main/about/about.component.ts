import { Card0 } from './../../../interfaces/card0';
import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/interfaces/title';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about? : { title: Title, textLeft:string ,textRight:string, buttonText:string, imgPath:string, cards : Array<Card0>}| null = null;

  constructor() { }

  ngOnInit(): void {

    let listCard : Array<Card0> = [
      {icon:'fa-smile-o',title: '65',text: '<b>Happy Clients</b> consequuntur voluptas nostrum aliquid ipsam architecto ut.'},
      {icon:'fa-newspaper-o',title: '85',text: '<b>Projects</b> adipisci atque cum quia aspernatur totam laudantium et quia dere tan'},
      {icon:'fa-clock-o',title: '18',text: '<b>Years of experience</b> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel'},
      {icon:'fa-star',title: '15',text: '<b>Awards</b> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der'},
    ]

    this.about = {
      title: {title:'QUI SOMMES NOUS?', subTitle:''},
      textLeft:'<p>Nous sommes une équipe d\'ingénieurs et d\'experts avec une passion pour les nouvelles technologies et leur impact sur notre quotidien. Nous intervenons sur des prestations telles que:</p> <ul> <li class=""> <i class="fa fa-angle-double-right fa-lg" ></i> Transformation Digitale </li> <li> <i class="fa fa-angle-double-right fa-lg" ></i> Définition d\'architectures IT et Data </li> <li> <i class="fa fa-angle-double-right fa-lg" ></i> Conception d\'applications et produits digitaux </li> </ul> <p>Contactez-nous pour recevoir notre offre de service complète</p>' ,
      textRight:'<p> Nous avons créé Onesyly partant d\'une volonté d\'adresser nos clients start-ups, PME et grands groupese pour outiller la tech afin d\'adresser les besoins business. <br> Nous sommes installés à Paris et intervenons en France et aussi auprès de nos clients à l\'international. <br> A travers nos expertises, nous assurons le lien entre les dernières nouveautés technologiques et les problématiques rencontrées par nos clients pour assurer leur transformation digitale. <br> Vous souhaitez nous parler de vos projets? Contactez-nous!</p>',
      buttonText:'Nous contacter',
      imgPath:'./assets/images/about-003.svg',
      cards : listCard}
  }

}
