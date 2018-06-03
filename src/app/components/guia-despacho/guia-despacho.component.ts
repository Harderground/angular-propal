import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guia-despacho',
  templateUrl: './guia-despacho.component.html',
  styleUrls: ['./guia-despacho.component.css']
})
export class GuiaDespachoComponent implements OnInit {

  ///cosiwis del wizard
  public id = 1;
  public transporte = "btn btn-success btn-circle";
  public despacho = "btn btn-default btn-circle";
  public guia = "btn btn-default btn-circle";
  public despachar = "btn btn-default btn-circle";

  constructor() { }

  ngOnInit() {
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
