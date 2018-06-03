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
  public id: any =1;
  public camiones: any[] = [];
  public camionesCargas: any[] = [];
  public camionesHistoricos: any[] = [];
  public despachar = "active";
  public anden;
  public despachados;
  public texto:any="";
  constructor(private _despachoService: DespachoService, private router: ActivatedRoute) {
   }

  ngOnInit() {

    this.obtenerCamionesDespachar();
    this.obtenerCamionesEnCarga();
    this.obtenerCamionesHistorico();
    
  }
  obtenerCamionesHistorico(){
    this._despachoService.getCamionesHistorico().subscribe( 
        result => {
            console.log(result);
            this.camionesHistoricos = result;
        },
        error =>  {
            console.log(error);
        }
    );
  }
  obtenerCamionesEnCarga(){
    this._despachoService.getCamionesEnCarga().subscribe( 
        result => {
            console.log(result);
            this.camionesCargas = result;
        },
        error =>  {
            console.log(error);
        }
    );
  }
  obtenerCamionesDespachar() {
    this._despachoService.getCamionesDespachar().subscribe(
      result => {
        console.log(result);
        this.camiones = result;
      },
      error => {
        console.log(error);
      }
    );
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