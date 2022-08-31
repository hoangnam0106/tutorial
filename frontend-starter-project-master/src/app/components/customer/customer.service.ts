import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicResponse } from 'app/shared/basic-response';
import {List} from "postcss/lib/list";
import {SERVICE_URLS} from '../../app.config';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http : HttpClient) { }

  // get(id: any): Observable<Customer> {
  //   return this.http.get<Customer>(`${baseUrl}/${id}`);
  // }


  search(params: any): Observable<BasicResponse>{
    return this.http.post<BasicResponse>(SERVICE_URLS.customers + '/search', params);
  }

  delete(params: any): Observable<BasicResponse>{
    return this.http.put<BasicResponse>(SERVICE_URLS.customers + '/delete', params);
  }

  create(params: any): Observable<BasicResponse>{
    return this.http.post<BasicResponse>(SERVICE_URLS.customers + '/create', params);
  }

  upload(file: File):Observable<BasicResponse> {
    const formData: FormData = new FormData();
    formData.set('file', file);
    return this.http.post<BasicResponse>(`${SERVICE_URLS.customers}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }

  export(params: List){
    return this.http.post(`${SERVICE_URLS.customers}/download`, params, {
      reportProgress: true,
      responseType: 'json'
    });
  }

}
