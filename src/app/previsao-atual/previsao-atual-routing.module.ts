import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevisaoAtualPage } from './previsao-atual.page';

const routes: Routes = [
  {
    path: '',
    component: PrevisaoAtualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevisaoAtualPageRoutingModule {}
