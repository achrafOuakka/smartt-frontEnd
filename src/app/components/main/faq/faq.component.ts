import { FaqService } from './../../../services/faq.service';
import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/interfaces/title';
import { Faq } from 'src/app/interfaces/faq';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faq : {title : Title,cards: Array<Faq>}| null = null;

  listFaq : Array<Faq> = [];

  constructor(
    private faqService : FaqService
  ) {
  }

  ngOnInit(): void {

    // this.listFaq = [
    //   {icon: 'fa-question-circle-o', question: 'Non consectetur a erat nam at lectus urna duis ?', answer : 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'},
    //   {icon: 'fa-question-circle-o', question: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque ?', answer : 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.'},
    //   {icon: 'fa-question-circle-o', question: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi ?', answer : 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.'},
    //   {icon: 'fa-question-circle-o', question: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla ?', answer : 'Aperiam itaque sit optio et deleniti eos nihil quidem cumque. Voluptas dolorum accusantium sunt sit enim. Provident consequuntur quam aut reiciendis qui rerum dolorem sit odio. Repellat assumenda soluta sunt pariatur error doloribus fuga.'},
    //   {icon: 'fa-question-circle-o', question: 'Tempus quam pellentesque nec nam aliquam sem et tortor consequat ?', answer : 'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in'},
    // ];

    this.getAllFaqs();

  }


  /* get all faq */
  getAllFaqs() {
    this.faqService.getAllFaqsFromBack().subscribe(
      (listData : Faq[]) => {
        if(!UtilsService.isEmptyArray(listData))
        this.listFaq = listData;
        this.faq = {
          title:{title:'FREQUENTLY ASKED QUESTIONS', subTitle:''},
          cards: this.listFaq};
      },
      error => {
        console.log(error);
       }
    );

}

}
