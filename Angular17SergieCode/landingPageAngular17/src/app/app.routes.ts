import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'products',component: ProductComponent},
    {path: 'products/:id',component: ProductDetailsComponent},
    {path: 'contact',component: ContactComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'} // Si ponemos cualquier cosa, lo redirige al HomeComponent
];
