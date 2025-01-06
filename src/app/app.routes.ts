import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home/home.component';
import { ProductComponent } from './features/products/components/product/product.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },

    {
        path: 'product',
        loadComponent: () => import('./features/products/components/product/product.component').then(m => m.ProductComponent),
        // component: ProductComponent,
    }
];
