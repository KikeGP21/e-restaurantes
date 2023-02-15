import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigToken } from '@ionic/angular/providers/config';
import { RestaurantesService } from 'src/app/services/restaurantes.service';
import { restaurante } from '../restaurantes.model';

@Component({
  selector: 'app-restaurante-add',
  templateUrl: './restaurante-add.page.html',
  styleUrls: ['./restaurante-add.page.scss'],
})
export class RestauranteAddPage implements OnInit {

  public titulo: string = "Añadir un nuevo restaurante"
  public holder_nombre: string = "Escribe el nombre del restaurante"
  public holder_logotipo: string = "Pega el url de la imagen del logotipo del restaurante"
  public holder_descripcion: string = "Escribe una descripción sobre el restaurante"
  public holder_tenedores: string = "Tenedores del restaurante:"
  public guardar: String = "Guardar restaurante"

  constructor(private _restaurantesService: RestaurantesService, private _routerCtrl: Router) { }

  ngOnInit() {
  }

  /**
   * addRestaurante: Añade un nuevo restaurante con los valores introducidos en un formulario.
   * @param logotipoURL 
   * @param nombre 
   * @param descripcion 
   * @param tenedores 
   */
  addRestaurante(logotipoURL: any, nombre: any, descripcion: any, tenedores: any) {
    this._restaurantesService.addRestaurante(logotipoURL.value, nombre.value, descripcion.value, tenedores.value)
    this._routerCtrl.navigate(['/restaurantes'])
  }
}
