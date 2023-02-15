import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestauranteAddPage } from './restaurante-add.page';

const routes: Routes = [
  {
    path: '',
    component: RestauranteAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestauranteAddPageRoutingModule {}
