import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-previsao-semana',
  templateUrl: './previsao-semana.page.html',
  styleUrls: ['./previsao-semana.page.scss'],
})
export class PrevisaoSemanaPage implements OnInit {
  weekForecast: any[] = [];
  cidade: string = 'Rio de Janeiro'; 

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cidade = params['cidade'] || this.cidade; // Obtém a cidade dos parâmetros, se disponível
      this.getWeekForecast(); // Chama a previsão semanal após definir a cidade
    });
  }

  getWeekForecast() {
    this.weatherService.getWeekForecast(this.cidade).subscribe(
      (data: any) => {
        console.log(data);
        this.weekForecast = data.list.filter((forecast: any, index: number) => index % 8 === 0);
        this.weekForecast.forEach((forecast: any) => {
          forecast.data = this.formatDate(new Date(forecast.dt * 1000));
          forecast.temperatura = this.kelvinToCelsius(forecast.main.temp); // Agora retorna um inteiro
        });
        console.log(this.weekForecast);
      },
      (error: any) => {
        console.error('Erro ao buscar previsão da semana', error);
      }
    );
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
  }

  kelvinToCelsius(kelvin: number): number {
    return Math.floor(kelvin - 273.15); // Retorna inteiro arredondado para baixo
  }
}
