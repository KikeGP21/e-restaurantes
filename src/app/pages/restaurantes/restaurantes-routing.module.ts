import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantesPage } from './restaurantes.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantesPage
  },
  {
    path: 'restaurante-detail',
    loadChildren: () => import('./restaurante-detail/restaurante-detail.module').then( m => m.RestauranteDetailPageModule)
  },
  {
    path: 'restaurante-add',
    loadChildren: () => import('./restaurante-add/restaurante-add.module').then( m => m.RestauranteAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantesPageRoutingModule {}
