import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  private apiMail = `${environment.urlBackend}/mail`;
  private apiProducts = `${environment.urlBackend}/products`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getProducts() {
    return this.httpClient.get<any>(this.apiProducts, this.httpOptions);
  }

  getProduct(name: string) {
    return this.httpClient.get<any>(this.apiProducts + '/name/' + name, this.httpOptions);
  }

  getThumbnailUrl(image: string) {
    return `${environment.urlBackend}/products/image/${image}`;
  }

}
