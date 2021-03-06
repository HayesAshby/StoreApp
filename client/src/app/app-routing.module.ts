import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';
import { ProductsComponent } from './features/products/products.component';
import { ProductManagerComponent } from './features/product-manager/product-manager.component';
import { CartComponent } from './features/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
      },
      {
        path: '',
        component: CartComponent,
        outlet: 'sidebar'
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'product-manager',
        component: ProductManagerComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
