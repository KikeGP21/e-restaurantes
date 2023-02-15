import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantesService } from 'src/app/services/restaurantes.service';
import { restaurante } from './restaurantes.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {

  public titulo = "Listado de restaurantes"
  public restaurantes: restaurante[] = []

  constructor(private _restaurantesService: RestaurantesService, private _routerCtrl: Router) { }

  ngOnInit() {
    this.ionViewWillEnter()
  }

  ionViewWillEnter() {
    this.restaurantes = this._restaurantesService.getRestaurantes();
  }

  /**
   * newRestaurante: Añade nuevo restaurante a través de rellenar un formulario.
   */
  newRestaurante() {
    this._routerCtrl.navigate(['/restaurantes/restaurante-add'])
  }
}
