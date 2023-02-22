import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Faq } from '../interfaces/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {


  /********************************************************************************************/
  /**************************************** The attributes  ***********************************/
  /********************************************************************************************/

  prefixe : string= "/faqs";


  /********************************************************************************************/
  /************************************* Initialization faq  **********************************/
  /*******************************************************************************************/
  constructor(
    private httpClient : HttpClient
  ) { }


  /********************************************************************************************/
  /**************************************  The faq ********************************************/
  /********************************************************************************************/


  getAllFaqsFromBack() : Observable<Faq[]> {
    return this.httpClient.get<Faq[]>(`${environment.api_smartt}`+this.prefixe);
  }

  getFaqByIdFromBack(id: any)  {
   return this.httpClient.get<Faq>(`${environment.api_smartt}`+this.prefixe+`/`+id);
 }

}
