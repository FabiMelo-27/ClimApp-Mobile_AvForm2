import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevisaoSemanaPage } from './previsao-semana.page';

const routes: Routes = [
  {
    path: '',
    component: PrevisaoSemanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevisaoSemanaPageRoutingModule {}
