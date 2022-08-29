import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicResponse } from 'app/shared/basic-response';
import { Observable } from 'rxjs';
import { Customer } from './customer';



const baseUrl = "http://localhost:8080/api/v1/call-bot"
@Injectable({
  providedIn: 'root'
})

export class CallBotService {
  
  constructor(private httpClient: HttpClient) {

  }

  getCustomer(): Observable<BasicResponse>{
    return this.httpClient.get<BasicResponse>(baseUrl + '/page'); 
  }

  get(id: any): Observable<BasicResponse>{
    return this.httpClient.get<BasicResponse>(baseUrl + '/list/' + id);
  }

  create(customer: Customer): Observable<BasicResponse>{
    return this.httpClient.post<BasicResponse>(baseUrl + '/list/create', customer);
  }

  search(param: any): Observable<BasicResponse>{
    return this.httpClient.post<BasicResponse>(baseUrl + '/list/search', param);
  }

  delete(id: any): Observable<BasicResponse>{
    return this.httpClient.put<BasicResponse>(baseUrl + '/list/delete/' + id, id);
  }


}
