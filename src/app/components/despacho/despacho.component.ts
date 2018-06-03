import { Component, OnInit } from '@angular/core';
import { DespachoService } from '../../services/despacho.service';
import { ActivatedRoute } from '@angular/router';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-despacho',
  templateUrl: './despacho.component.html',
  styleUrls: ['./despacho.component.css']
})
export class DespachoComponent implements OnInit {
  public id: any = 1;
  public camiones: any[] = [];
  public camionesCargas: any[] = [];
  public camionesHistoricos: any[] = [];
  public camionesFiltro: any[] = [];
  public camionesCargasFiltro: any[] = [];
  public camionesHistoricosFiltro: any[] = [];
  public despachar = "active";
  public anden;
  public despachados;
  public texto: any = "";
  constructor(private _despachoService: DespachoService, private router: ActivatedRoute) {
  }

  ngOnInit() {

    this.obtenerCamionesDespachar();
    this.obtenerCamionesEnCarga();
    this.obtenerCamionesHistorico();

  }
  obtenerCamionesHistorico() {
    this._despachoService.getCamionesHistorico().subscribe(
      result => {
        console.log(result);
        this.camionesHistoricos = result;
        this.camionesHistoricosFiltro = result;
      },
      error => {
        console.log(error);
      }
    );
  }
  obtenerCamionesEnCarga() {
    this._despachoService.getCamionesEnCarga().subscribe(
      result => {
        console.log(result);
        this.camionesCargas = result;
        this.camionesCargasFiltro = result;
      },
      error => {
        console.log(error);
      }
    );
  }
  obtenerCamionesDespachar() {
    this._despachoService.getCamionesDespachar().subscribe(
      result => {
        console.log(result);
        this.camiones = result;
        this.camionesFiltro = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  filtroCamion(a) {
    for (let i = 0; this.camionesFiltro.length; i++) {
      if (this.camionesFiltro[i].res_puerto == null) {
        this.camionesFiltro[i].res_puerto = "";
      }
      if( this.camionesFiltro[i].res_puerto == undefined){
        this.camionesFiltro[i].res_puerto = "";
      }
    }
    let filtro: any[] = this.camionesFiltro.filter(filter =>
      (
        /* filter.num_regPort.toString().indexOf(a.target.value.toString()) != -1 ||
         filter.C_Fecha.toString().toUpperCase().indexOf(a.target.value.toUpperCase()) != -1 ||
         filter.nom_tipoVehiculo.toString().toUpperCase().indexOf(a.target.value.toUpperCase()) != -1 ||
         filter.patente.toString().toUpperCase().indexOf(a.target.value.toUpperCase()) != -1 ||
         filter.nom_chofer.toString().toUpperCase().indexOf(a.target.value.toUpperCase()) != -1 ||
         (filter.nro_contenedor + "").toString().toUpperCase().indexOf(a.target.value.toUpperCase()) != -1 ||*/
        filter.res_puerto.toString().indexOf(a.target.value.toUpperCase()) ||
        filter.ord_carga_descarga.toString().toUpperCase().indexOf(a.target.value.toUpperCase()) != -1 ||
        filter.nom_agTransp.toUpperCase().indexOf(a.target.value.toUpperCase()) != -1), error => { console.log(error) });
    console.log(filtro);
    if (a.target.value == "") {
      this.obtenerCamionesDespachar();
    } else if (filtro.length != 0) {
      this.camiones = filtro;
    }
  }




  setMenu(id: any) {
    switch (id) {
      case 1: {
        this.despachar = "active";
        this.anden = "";
        this.despachados = "";
        this.id = id;
        break;
      }
      case 2: {
        this.despachar = "";
        this.anden = "active";
        this.despachados = "";
        this.id = id;
        break;
      }
      case 3: {
        this.despachar = "";
        this.anden = "";
        this.despachados = "active";
        this.id = id;
        break;
      }
    }
  }
}