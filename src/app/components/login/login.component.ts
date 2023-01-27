import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /********************************************************************************************/
  /**************************************** The attributes  ***********************************/
  /********************************************************************************************/

  token: string = "";
  formLogin: FormGroup;
  isSubmitLogin = false;
  messageError: string = "";
  currentLang : string = "";

  /********************************************************************************************/
  /************************************* Initialization functions  ****************************/
  /*******************************************************************************************/

  constructor(
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    // private toastr : ToastrService,
    // private alertServ : AlertService,
    private route: Router,
    // public transtale : TranslateService,//pour utiliser dans View
    // private currnetLangService : CurrentLangService,
    // private paramService : ReferencialService,
    // private messageServ : MessageService

  ) {
        //initialize  Form
        this.formLogin = this.formBuilder.group({
          username: ["", Validators.required],
          password: ["", Validators.required],
        })

        //init message
        // this.messageServ.initMessage();
  }

  ngOnInit() : void {


  }

  /********************************************************************************************/
  /**************************************  The functions **************************************/
  /********************************************************************************************/




  onFormSubmit(form : FormGroup): void {

  }



}
