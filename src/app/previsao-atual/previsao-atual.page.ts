import { Component, OnInit } from '@angular/core'; // Certifique-se de que OnInit está aqui
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-previsao-atual',
  templateUrl: './previsao-atual.page.html',
  styleUrls: ['./previsao-atual.page.scss'],
})
export class PrevisaoAtualPage implements OnInit {
  weather: any;
  cidade: string = 'Rio de Janeiro';
  cidadeDigitada: string = ''; // Propriedade para a cidade digitada

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    const cidadeParaBusca = this.cidade === 'Outro' ? this.cidadeDigitada : this.cidade;
    this.weatherService.getWeather(cidadeParaBusca).subscribe(
      (data) => {
        this.weather = data;
        console.log(this.weather); 
      },
      (error) => {
        console.error('Erro ao buscar previsão do tempo', error);
      }
    );
  }

  onCityChange() {
    if (this.cidade !== 'Outro') {
      this.cidadeDigitada = ''; // Limpa a cidade digitada se uma cidade for selecionada
      this.getWeather(); // Atualiza a previsão quando a cidade muda
    }
  }

  confirmarCidade() {
    this.cidade = this.cidadeDigitada; // Atualiza a cidade com o valor digitado
    this.getWeather(); // Chama a previsão para a cidade digitada
    this.cidadeDigitada = ''; // Limpa o campo digitado
  }
}
