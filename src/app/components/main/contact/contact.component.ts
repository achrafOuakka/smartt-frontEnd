import { Card0 } from './../../../interfaces/card0';
import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/interfaces/title';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact : {
    title : Title,
    card : {title: string, text : string, listSocial:Array<{icon : string,link:string}>},
    cards1 : Array<Card0>,
    map : string,
  }| null = null;

  constructor() {}

  ngOnInit(): void {
    let listSocial= [
      {icon :'fa-twitter' ,link:'https://www.twitter.com/'},
      {icon :'fa-facebook' ,link:'https://www.facebook.com/'},
      {icon :'fa-instagram' ,link:'https://www.instagram.com/'},
      {icon :'fa-linkedin' ,link:'https://www.linkedin.com/'},
    ]
    this.contact = {
      title : {title:'NOUS CONTACTER', subTitle:''},
      card : {
        title: 'Onesyly Consulting',
        text : '<p>Consulting et accompagnement de projets gr&acirc;ce &agrave; nos expertises tech &amp; innovation.</p><p>Nous vous aidons &agrave; r&eacute;ussir votre transformation digitale.</p>',
        listSocial: listSocial},
      cards1 : [
        {icon:'fa-map-marker',title:' Onesyly Consulting 10 rue de Penthièvre 75008, Paris'},
        {icon:'fa-envelope',title:'contact@onesyly.com'},
      ],
      map : '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26469.51916469148!2d-6.864499788137546!3d33.974809227509176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x60a61da0a2789ad0!2sDISTINKTEC!5e0!3m2!1sfr!2sma!4v1675943234398!5m2!1sfr!2sma" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    }
  }

}
