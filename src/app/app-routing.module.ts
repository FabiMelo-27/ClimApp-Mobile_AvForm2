// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'previsao-atual',
//     loadChildren: () => import('./previsao-atual/previsao-atual.module').then( m => m.PrevisaoAtualPageModule)
//   },
//   {
//     path: 'previsao-semana',
//     loadChildren: () => import('./previsao-semana/previsao-semana.module').then( m => m.PrevisaoSemanaPageModule)
//   },
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'previsao-atual',
    loadChildren: () => import('./previsao-atual/previsao-atual.module').then(m => m.PrevisaoAtualPageModule)
  },
  {
    path: 'previsao-semana/:cidade', // Adicione o parâmetro aqui
    loadChildren: () => import('./previsao-semana/previsao-semana.module').then(m => m.PrevisaoSemanaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
