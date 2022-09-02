import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {WeatherData} from '../models/weather.model'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) {
  }
  getWeatherDetails(cityName:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
        params:new HttpParams()
          .set('q',cityName)
          .set('units','metric')
          .set('appid','2fb5b09274c0618f6fb54a7cc52959d6')
    })
  }
}
