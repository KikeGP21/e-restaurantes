import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestauranteAddPageRoutingModule } from './restaurante-add-routing.module';

import { RestauranteAddPage } from './restaurante-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestauranteAddPageRoutingModule
  ],
  declarations: [RestauranteAddPage]
})
export class RestauranteAddPageModule {}
