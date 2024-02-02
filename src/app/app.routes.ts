import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop.component';
import { CartComponent } from './pages/cart.component';
import { ErrorComponent } from './pages/errorPage.component';
import { DetailsComponent } from './pages/details.component';

export const routes: Routes = [
    {
        path: "",
        component: ShopComponent,
    }, 
    {
        path: "cart",
        component: CartComponent,
    },
    {
        path: "details",
        component: DetailsComponent,
    },
    {
        path: "**",
        component: ErrorComponent
    }
];
