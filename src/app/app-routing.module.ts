import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'restaurantes',
    pathMatch: 'full'
  },
  {
    path: 'restaurantes',
    children:[
      {
        path:"",
        loadChildren: () => import('./pages/restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
      },
      {
        path: ":restauranteId",
        loadChildren: () => import('./pages/restaurantes/restaurante-detail/restaurante-detail.module').then(m=>m.RestauranteDetailPageModule)
      }

    ]
  },
  {
    path: 'restaurantes',
    loadChildren: () => import('./pages/restaurantes/restaurantes.module').then( m => m.RestaurantesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
