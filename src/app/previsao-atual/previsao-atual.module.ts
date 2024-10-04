import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PrevisaoAtualPageRoutingModule } from './previsao-atual-routing.module';
import { PrevisaoAtualPage } from './previsao-atual.page';
import { HttpClientModule } from '@angular/common/http'; // IMPORTANDO AQUI

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevisaoAtualPageRoutingModule,
    HttpClientModule // ADICIONANDO AQUI
  ],
  declarations: [PrevisaoAtualPage]
})
export class PrevisaoAtualPageModule {}
