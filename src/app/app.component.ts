import { Component,OnInit } from '@angular/core';
import {WeatherData} from "./models/weather.model";
import {WeatherService} from "./services/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  searchCity:string = "guntur";
  weatherData?:WeatherData
  constructor(private weatherService:WeatherService) {
  }
  ngOnInit():void{
    this.getWeatherData(this.searchCity)
    this.searchCity = "";
  }
  searchByCity(){
    this.getWeatherData(this.searchCity);
    this.searchCity = "";
  }
 getWeatherData(city:string){
    this.weatherService.getWeatherDetails(city).subscribe(res => {
      this.weatherData = res;
    })
 }
}
