import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './features/layout/layout.component';
import { ProductsComponent } from './features/products/products.component';

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
            path: 'products',
            component: ProductsComponent
          }
        ]
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
