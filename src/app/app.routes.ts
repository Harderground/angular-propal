import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespachoComponent } from './components/despacho/despacho.component';
import { GuiaDespachoComponent } from 'app/components/guia-despacho/guia-despacho.component';

const appRoutes: Routes = [
    { path: '', component: DespachoComponent },
    { path: 'despacho', component: DespachoComponent },
    { path: 'guia-despacho', component: GuiaDespachoComponent }
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);