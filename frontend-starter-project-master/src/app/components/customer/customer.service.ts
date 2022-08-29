import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasicResponse } from 'app/shared/basic-response';

const baseUrl = 'http://localhost:8080/api/v1/customer';
@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http : HttpClient) { }

  // get(id: any): Observable<Customer> {
  //   return this.http.get<Customer>(`${baseUrl}/${id}`);
  // }


  search(params: any): Observable<BasicResponse>{
    return this.http.post<BasicResponse>(baseUrl + '/search', params);
  }

  delete(params: any): Observable<BasicResponse>{
    return this.http.put<BasicResponse>(baseUrl + '/delete', params);
  }

  create(params: any): Observable<BasicResponse>{
    return this.http.post<BasicResponse>(baseUrl + '/create', params);
  }

  upload(file: File):Observable<BasicResponse> {
    const formData: FormData = new FormData();
    formData.set('file', file);
    return this.http.post<BasicResponse>(`${baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }
}
