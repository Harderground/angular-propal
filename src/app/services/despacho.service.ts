import { Injectable, transition } from '@angular/core';
import { HttpClientJsonpModule, HttpClient, HttpErrorResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ResponseContentType } from '@angular/http';
import { Headers } from '@angular/http'


@Injectable()
export class DespachoService {

  private host: any = "http://propalapp.dyndns.org/spdservices/";
  private apiPorteria:string = 'api/porteria/';
  private apiGuia:string = 'api/guia/';
  private apiDespacho:string = 'api/despacho/'
  private apiFolio:string = 'api/folio/'
  private headerPost: any;
  constructor(private httpClient: HttpClient) {
    this.headerPost = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', "method": "post" });
  }
  /*api porteria */
  getCamionesDespachar(): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiPorteria}${apiMethod.camionesadespachar}`);
  }
  getCamionesEnCarga(): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiPorteria}${apiMethod.camionesandencarga}`);
  }
  getCamionesHistorico(): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiPorteria}${apiMethod.camioneshistorico}`);
  }
  /*api despacho */
  getListaChoferes(): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiDespacho}${apiMethod.listachoferes}`);
  }
  getListaTransportes(): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiDespacho}${apiMethod.listatransportes}`);
  }
  getBuscarDespacho(despuerto:any): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiDespacho}${apiMethod.buscardespacho}` + despuerto);
  } 
  getBuscadatosPorteria(registroporteria:any): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiDespacho}${apiMethod.buscadatosporteria}` + registroporteria);
  }
  getDespacho(): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiDespacho}${apiMethod.despacho}`);
  }
  /*api guia */
  getCargarDatosInstructivo(instructivo:any): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiGuia}${apiMethod.cargardatosinstructivo}`+instructivo);
  }
  getListadInstructivos(): Observable<any> {
    return this.httpClient.get(`${this.host}${this.apiGuia}${apiMethod.listadoinstructivos}`);
  }
}
const apiMethod = {
  /*api porteria */
  camionesadespachar: "camionesadespachar",
  camionesandencarga: "camionesandencarga",
  camioneshistorico: "camioneshistorico",
  /*api despacho */
  listachoferes:"listachoferes",
  listatransportes:"listatransportes",
  buscardespacho:"buscardespacho?despuerto=",
  buscadatosporteria:"buscadatosporteria?registroporteria=",
  despacho:"despacho",
  /*api guia */
  cargardatosinstructivo:"cargardatosinstructivo?instructivo=",
  listadoinstructivos:"listadoinstructivos",
  /*api folio */

}

/**
api/despacho/actualizardespacho p {cod_estdespachoPuerto,fecha,num_desPuerto,num_regPort,cod_condicionPallet,num_despachoSIN,Cod_TipoPlanillaSAG,cod_prodSag,Cod_TipTransSAG,cod_tipoVehiculo,patente_carro,patente,rut_chofer,rut_agTransp,tara_camion,num_termografoCamion,num_bl,num_contenedor,cod_tiposello,cod_ubicacionSello,cantidad_sellos,num_selloNaviera,num_selloPlanta,num_selloUSDA,Cod_UsuarioJefeTurno,Cod_UsuarioCortina,obs,despachador,Cod_DepositoRetiro,rut_responsable,total_pallets,origen,cod_planta,cod_temp}
api/despacho/guardardespacho p    {cod_estdespachoPuerto,fecha,num_desPuerto,num_regPort,cod_condicionPallet,num_despachoSIN,Cod_TipoPlanillaSAG,cod_prodSag,Cod_TipTransSAG,cod_tipoVehiculo,patente_carro,patente,rut_chofer,rut_agTransp,tara_camion,num_termografoCamion,num_bl,num_contenedor,cod_tiposello,cod_ubicacionSello,cantidad_sellos,num_selloNaviera,num_selloPlanta,num_selloUSDA,Cod_UsuarioJefeTurno,Cod_UsuarioCortina,obs,despachador,Cod_DepositoRetiro,rut_responsable,total_pallets,origen,cod_planta,cod_temp}
ok api/despacho/listachoferes g 
ok api/despacho/listatransportes g
ok api/despacho/buscardespacho/?despuerto= g
ok api/despacho/buscadatosporteria?registroporteria= g
ok api/despacho/despacho g

ok api/guia/cargardatosinstructivo/?instructivo= g
ok api/guia/listadoinstructivos g 
api/guia/guardarguia p   {num_desPuerto,rut_exp,cod_planta,cod_temp,rut_razonSocialPlanta,obs,num_guia,num_instCargaAnden,bodega_bargo,cod_recibidor}

api/folio/listarfoliosxguia p {num_guia,num_desPuerto,num_instCarga,cod_planta,cod_temp,}
 */
