import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RestaurantesService } from 'src/app/services/restaurantes.service';

@Component({
  selector: 'app-restaurante-detail',
  templateUrl: './restaurante-detail.page.html',
  styleUrls: ['./restaurante-detail.page.scss'],
})
export class RestauranteDetailPage implements OnInit {

  public restaurante: any;

  public noTieneComentarios = "Todavía no hay comentarios  sobre este restaurante...";

  constructor(private activatedRouted: ActivatedRoute, private _restaurantesService: RestaurantesService, private _router: Router,
    private _alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(paramMap => {
      const restauranteId: string | null = paramMap.get('restauranteId');
      this.restaurante = this._restaurantesService.getRestaurante(restauranteId);
      console.log(this.restaurante)
    })
  }

    /**
   * deletePlace: borra el place actual y vuelve a la vista de listado de places
   */
    async deletePlace(){

      const element = await this._alertCtrl.create(
        {
          header: "¿ Estás seguro de querrer borrar el restaurante '" + this.restaurante.nombre + "' ?",
          message: "Ten cuidado...",
          buttons:[
            {
            text: "Cancelar",
            role: "cancel"
          },
          {
            text: "Aceptar",
            handler: () => {
            alert("El restaurante '" + this.restaurante.nombre + "' ha sido eliminado.")
            this._restaurantesService.deleteRestaurante(this.restaurante.id)
            this._router.navigate(['/restaurantes']) }
          }
          ]
        }
      );
  
      await element.present()
    }

}
