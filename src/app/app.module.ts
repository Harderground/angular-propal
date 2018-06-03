import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { appRoutingProviders, routing } from './app.routes';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

// App views
import { AppviewsModule } from "./views/appviews/appviews.module";

// App modules/components
import { LayoutsModule } from "./components/common/layouts/layouts.module";

import { DespachoComponent } from './components/despacho/despacho.component';


import { DespachoService } from 'app/services/despacho.service';
import { GuiaDespachoComponent } from './components/guia-despacho/guia-despacho.component';

@NgModule({
  declarations: [
    AppComponent,
    DespachoComponent,
    GuiaDespachoComponent,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    routing,
    LayoutsModule,
    AppviewsModule,

  ],
  providers: [
    appRoutingProviders,
    DespachoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
