import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'c68dfd672641d4005cd6a39c4a8444e0';
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

//para buscar dados da pprevisão atual
  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&lang=pt_br`);
  }
//para buscar dados da pprevisão semanal
  getWeekForecast(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/forecast?q=${city}&appid=${this.apiKey}&lang=pt_br`);
  }
}
