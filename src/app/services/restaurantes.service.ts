import { Injectable } from '@angular/core';
import { restaurante } from '../pages/restaurantes/restaurantes.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  private restaurantes: restaurante[] = [
    {
      id: "1",
      logotipoURL: 'https://www.restaurante-sanfernando.com/resourcefiles/homeimages/restaurante-san-fernando.jpg',
      nombre: 'Bar Paco',
      descripcion: 'Bar de España',
      tenedores: 3,
      comentarios: [
        'Maravilloso, precioso lugar para pasar con la familia.',
        'Vistas que enamoran.',
      ],
    },
    {
      id: "2",
      logotipoURL: 'https://www.huleymantel.com/uploads/s1/33/49/37/amar-barcelona.jpeg',
      nombre: 'Bar Tatel',
      descripcion: 'Bar de Barcelona',
      tenedores: 5,
      comentarios: [
        'Bar de lujo.',
        'Una belleza, impresionante altura.',
      ],
    },
    {
      id: "3",
      logotipoURL: 'https://www.infobierzo.com/wp-content/uploads/2021/12/97818832_3357223310957365_8227924181010874368_n.jpg',
      nombre: 'Cafetería',
      descripcion: 'Bar Antiguo',
      tenedores: 1,
      comentarios: [
        'Demasiado antiguo para que hayan comentarios...'
      ],
    },
    {
      id: "4",
      logotipoURL: 'https://i.pinimg.com/736x/db/a9/94/dba994b5b6ca782ab03fa14d2826210b--casa-bar-lounge-bar.jpg',
      nombre: 'Bar Loungue',
      descripcion: 'Bar Francés',
      tenedores: 4,
      comentarios: [
        'Estilo moderno.',
        'Luces de color amarillo.',
      ],
    },
    {
      id: "5",
      logotipoURL: 'https://www.elchicofeo.es/wp-content/uploads/2020/05/bar2.png',
      nombre: 'Bar El Chico Feo',
      descripcion: 'Local de ocio',
      tenedores: 2,
      comentarios: [
        'Para personas jóvenes.',
        'Muy disfrutable el futbolín con amigos.',
      ],
    }
  ]

  constructor() { }

  /**
   * Devuelve el array de restaurantes
   * @returns 
   */
  getRestaurantes() {
    return [...this.restaurantes]
  }

  /**
 * Devuelve uno de los elementos del array 'restaurantes' mediante su Id.
 * Parámetro de entrada: restauranteId -> Identificador del elemento a devolver.
 */
  getRestaurante(restauranteId: string | null) {
    return {
      ...this.restaurantes.find(restaurante => {
        return restaurante.id === restauranteId
      })
    }
  }

  /**
 * addRestaurante:
 * parámetros de entrada: logotipoURL, nombre, descripcion, tenedores
 */
  addRestaurante(logotipoURL: string, nombre: string, descripcion: string, tenedores: number) {
    this.restaurantes.push({
      id: (this.restaurantes.length + 1).toString(),
      logotipoURL,
      nombre,
      descripcion,
      tenedores,
      comentarios: [],
    });
  }

  /**
   * deleteRestaurante: Borra un elemento de la lista de restaurantes
   * parámetro de entrada: restauranteId
   */
  deleteRestaurante(restauranteId: string) {
    this.restaurantes = this.restaurantes.filter((restaurante) => {
      return restaurante.id != restauranteId;
    });
  }
}
