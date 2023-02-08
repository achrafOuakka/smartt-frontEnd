import { Card0 } from './../../../interfaces/card0';
import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/interfaces/title';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: {title: Title,cards0: Array<Card0>,cards1: Array<{imgPath: string, title : string, text:string,link : string }>} | null = null;
  constructor() {
  }

  ngOnInit(): void {

    this.services= {
      title: {title:'SERVICES', subTitle:'Nos services:'},
      cards0 : [
        {
          icon:'fa-file-text-o',
          title:'Consulting',
          text:'Comprendre vos enjeux business et utiliser les outils tech pour trouver des solutions innovantes et adaptées.'
        },
        {
          icon:'fa-dribbble',
          title:'Digital Factory',
          text:'Nous produisons les applications que vous imaginez avec notre équipe : Product, UX/UI Design, développement, QA, Infra et Delivery.'
        },
        {
          icon:'fa-globe',
          title:'Outsourcing',
          text:'Notre pôle de développement offshore pour appuyer vos projets de développement et test.'
        },

      ],
      cards1: [
        {
          imgPath:'./assets/images/services-001.jpg',
          title:'Card title',
          text:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          link:'#'
        },
        {
          imgPath:'./assets/images/services-002.jpg',
          title:'Card title',
          text:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          link:'#'
        },
        {
          imgPath:'./assets/images/services-003.jpg',
          title:'Card title',
          text:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          link:'#'
        },
        {
          imgPath:'./assets/images/services-004.jpg',
          title:'Card title',
          text:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          link:'#'
        },
      ]};
  }

}
