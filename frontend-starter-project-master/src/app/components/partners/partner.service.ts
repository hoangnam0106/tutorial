import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Partner} from './partner';
import {HttpClient} from '@angular/common/http';
import {SERVICE_URLS} from '../../app.config';
import {BasicResponse} from '../../shared/basic-response';

const baseUrl = "http://localhost:8080/partners/"
@Injectable({
  providedIn: 'root'
})


export class PartnerService {
  constructor(private _httpClient: HttpClient) {}

  getPartners(): Observable<BasicResponse> {
    return this._httpClient.get<BasicResponse>(baseUrl + 'list');
  }

  createPartner(partner: Partner): Observable<BasicResponse> {
    return this._httpClient.post<BasicResponse>(baseUrl + 'create', partner);
  }

  findByName(name: String){
    return this._httpClient.get<BasicResponse>(baseUrl + 'search')
  }
}
