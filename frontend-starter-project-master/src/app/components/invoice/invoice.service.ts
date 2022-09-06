import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasicResponse} from "../../shared/basic-response";
import {SERVICE_URLS} from "../../app.config";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) {}

  findAllProduct(): Observable<BasicResponse>{
    return this.http.get<BasicResponse>(SERVICE_URLS.product + '/get-all');
  }

  createInvoice(params: any): Observable<BasicResponse>{
    return this.http.post<BasicResponse>(SERVICE_URLS.invoice + '/add', params);
  }

  findByCustomerId(customerId): Observable<BasicResponse>{
    const formData = new FormData();
    formData.set("customerId", customerId);
    return this.http.post<BasicResponse>(SERVICE_URLS.invoice + '/find-by-customerid', formData);
  }

  getAllItems(invoiceId): Observable<BasicResponse>{
    const formData = new FormData();
    formData.set("invoiceId", invoiceId);
    return this.http.post<BasicResponse>(SERVICE_URLS.invoice + '/get-items', formData);
  }

  updateItem(itemId, quantity): Observable<BasicResponse>{
    const formData = new FormData();
    formData.set("itemId", itemId);
    formData.set("quantity", quantity)
    return this.http.post<BasicResponse>(SERVICE_URLS.item + '/update', formData);
  }

  getProducts(listProductId): Observable<BasicResponse>{
    return this.http.post<BasicResponse>(SERVICE_URLS.product + 'get-products', listProductId);
  }
}
