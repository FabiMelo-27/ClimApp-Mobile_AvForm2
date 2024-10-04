import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PrevisaoSemanaPageRoutingModule } from './previsao-semana-routing.module';
import { PrevisaoSemanaPage } from './previsao-semana.page';
import { HttpClientModule } from '@angular/common/http'; // IMPORTANDO AQUI

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevisaoSemanaPageRoutingModule,
    HttpClientModule // ADICIONANDO AQUI
  ],
  declarations: [PrevisaoSemanaPage]
})
export class PrevisaoSemanaPageModule {}
