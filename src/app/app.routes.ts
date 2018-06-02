import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { DespachoComponent } from './components/despacho/despacho.component';

const appRoutes: Routes =[
    {path:'',component  : DespachoComponent},
    {path:'despacho',component  : DespachoComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);