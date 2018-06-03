import { Injectable, transition } from '@angular/core';
import { HttpClientJsonpModule, HttpClient, HttpErrorResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponseContentType } from '@angular/http';
import { Headers } from '@angular/http'


@Injectable()
export class DespachoService {

  private host: any = "http://propalapp.dyndns.org/spdservices/";
  private apiPorteria: string = 'api/Porteria/';
  private headerPost: any;
  private headerGet: any;
  constructor(private httpClient: HttpClient) {
    this.headerPost = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', "method": "post" });
    this.headerGet = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', "method": "get" });

  }

  getCamionesDespachar(): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiPorteria}${apiMethod.camionesadespachar}`);
  }
  getCamionesEnCarga(): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiPorteria}${apiMethod.camionesandencarga}`);
  }
  getCamionesHistorico(): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiPorteria}${apiMethod.camioneshistorico}`);
  }
}
const apiMethod = {
  camionesadespachar: "camionesadespachar",
  camionesandencarga: "camionesandencarga",
  camioneshistorico: "camioneshistorico"
}