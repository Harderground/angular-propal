import { Component, OnInit } from '@angular/core';
import { DespachoService } from '../../services/despacho.service';

@Component({
  selector: 'app-guia-despacho',
  templateUrl: './guia-despacho.component.html',
  styleUrls: ['./guia-despacho.component.css']
})
export class GuiaDespachoComponent implements OnInit {



  public lstDespacho: any[] = [];
  public listaCamarero: any[] = [];
  public listaCondicion: any[] = [];
  public listaDepositoContenedor: any[] = [];
  public lstEstado: any[] = [];
  public listaJefeTurno: any[] = [];
  public listaProductoSag: any[] = [];
  public listaTipoPlanilla: any[] = [];
  public listaTipoSello: any[] = [];
  public listaTipoTransporte: any[] = [];
  public listaTipoVehiculo: any[] = [];
  public listaUbicacionSello: any[] = [];
  public listainstructivos: any[] = [];

  public datosCamion: any[] = [];

  public datosChofer: any[] = [];
  public datosChofer_filtro: any[] = [];
  public listaChoferes: any[] = [];

  public datosTransporte: any[] = [];
  public datosTransporte_filtro: any[] = [];
  public listaTransporte: any[] = [];

  public idCamion: any = "";
  ///cosiwis del wizard
  public id = 1;
  public transporte = "btn btn-success btn-circle";
  public despacho = "btn btn-default btn-circle";
  public guia = "btn btn-default btn-circle";
  public despachar = "btn btn-default btn-circle";
  public modalChofer:any= false;
  public modalTransporte:any= false;
  public fechaHoy:any="";
  constructor(private _despachoService: DespachoService) {
    this.idCamion = sessionStorage.getItem("idCamion");
  }

  ngOnInit() {
    this.obtenerDespacho();
    this.obtenerDatosCamion();
    this.getDate();
  }
  obtenerChoferes() {
    this.modalChofer=true;
    this.modalTransporte = false; 
    this.listaChoferes = [];
    this._despachoService.getListaChoferes().subscribe(
      result => {
        console.log("choferes: ", result);
        this.listaChoferes = result;
        this.datosChofer_filtro = result;
      },
      error => {
        console.log(error);
      }
    );
  }
  setChofer(chofer: any) {
    this.datosChofer = chofer;
  }
  setTransporte(transporte:any){
    this.datosTransporte = transporte;
  }
  filtroChofer(a: any) {
    let filtro: any[] = this.datosChofer_filtro.filter(filter => (
      filter.nom_chofer.toUpperCase().indexOf(a.target.value.toUpperCase()) != -1 ||
      filter.rut_chofer.toUpperCase().indexOf(a.target.value.toUpperCase()) != -1));
    if (a.target.value == "") {
      this.obtenerChoferes();
    } else if (filtro.length != 0) {
      this.listaChoferes = filtro;
    }
  }
  filtroTransporte(a: any) {
    let filtro: any[] = this.datosTransporte_filtro.filter(filter => (
      filter.nom_agTransp.toUpperCase().indexOf(a.target.value.toUpperCase()) != -1 ||
      filter.rut_agTransp.toUpperCase().indexOf(a.target.value.toUpperCase()) != -1));
    if (a.target.value == "") {
      this.obtenerTransportes();
    } else if (filtro.length != 0) {
      this.listaTransporte = filtro;
    }
  }
  getDate(){
    let fecha= new Date();
    let dia = fecha.getDay().toString();
    let mes = fecha.getMonth().toString();
    let year = fecha.getFullYear();
    if (dia.length==1){
      dia = "0" + dia;
    }
    if (mes.length==1){
      mes = "0" + mes;
    }
    this.fechaHoy = dia + "/" + mes +  "/" + year 
  }
  obtenerTransportes() {
    this.modalChofer=false;
    this.modalTransporte = true; 
    this.listaTransporte = [];
    this._despachoService.getListaTransportes().subscribe(
      result => {
        console.log(result);
        this.listaTransporte = result;
        this.datosTransporte_filtro = result;
      },
      error => {
        console.log(error);
      }
    );
  }
  obtenerDespacho() {
    this._despachoService.getDespacho().subscribe(
      result => {
        console.log(result);
        this.lstDespacho = result;
        this.listaCamarero = result.listaCamarero;
        this.listaCondicion = result.listaCondicion;
        this.listaDepositoContenedor = result.listaDepositoContenedor;
        this.lstEstado = result.lstEstado;
        this.listaJefeTurno = result.listaJefeTurno;
        this.listaProductoSag = result.listaProductoSag;
        this.listaTipoPlanilla = result.listaTipoPlanilla;
        this.listaTipoSello = result.listaTipoSello;
        this.listaTipoTransporte = result.listaTipoTransporte;
        this.listaTipoVehiculo = result.listaTipoVehiculo;
        this.listaUbicacionSello = result.listaUbicacionSello;
        this.listainstructivos = result.listainstructivos;
      },
      error => {
        console.log(error);
      }
    );
  }
  obtenerDatosCamion() {
    this._despachoService.getBuscadatosPorteria(this.idCamion).subscribe(
      result => {
        console.log(result);
        this.datosCamion = result;
        this.datosChofer = result.nom_chofer[0];
        this.datosTransporte = result.nom_transporte[0];
        console.log(this.datosChofer);
        console.log(this.datosTransporte);
      },
      error => {
        console.log(error);
      }
    );
  }



  setMenu(id: any) {
    switch (id) {
      case 1: {
        this.transporte = "btn btn-success btn-circle";
        this.despacho = "btn btn-default btn-circle";
        this.guia = "btn btn-default btn-circle";
        this.despachar = "btn btn-default btn-circle"
        this.id = id;
        break;
      }
      case 2: {
        this.transporte = "btn btn-default btn-circle";
        this.despacho = "btn btn-success btn-circle";
        this.guia = "btn btn-default btn-circle";
        this.despachar = "btn btn-default btn-circle"
        this.id = id;
        break;
      }
      case 3: {
        this.transporte = "btn btn-default btn-circle";
        this.despacho = "btn btn-default btn-circle";
        this.guia = "btn btn-success btn-circle";
        this.despachar = "btn btn-default btn-circle"
        this.id = id;
        break;
      }
      case 4: {
        this.transporte = "btn btn-default btn-circle";
        this.despacho = "btn btn-default btn-circle";
        this.guia = "btn btn-default btn-circle";
        this.despachar = "btn btn-success btn-circle"
        this.id = id;
        break;
      }
    }
  }

}
