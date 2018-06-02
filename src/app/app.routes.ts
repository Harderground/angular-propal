import {Routes} from "@angular/router";

import {StarterViewComponent} from "./views/appviews/starterview.component";
import {LoginComponent} from "./views/appviews/login.component";

import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
import {TopNavigationLayoutComponent} from "./components/common/layouts/topNavigationlayout.component";

import { DespachoComponent } from "app/components/despacho/despacho.component";


export const ROUTES:Routes = [
  // Main redirect
 

      { path: 'despacho', component: DespachoComponent },
      { path: '', component: DespachoComponent },

    
  
  
];
