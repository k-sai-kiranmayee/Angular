import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-forecast';
  http = axios.create({});
  city = '';
  weatherInfo: any = {};
  weeklyWeatherInfo: any = {};
  today = new Date();
  showAdditionalContent = false;
  // ngOnInit() {
  //   console.log(this.http);
    // const thor = this.http.get(
    //   `https://community-open-weather-map.p.rapidapi.com/weather?q=${this.city}`,
    //   {
    //     headers: {
    //       'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
    //       'X-RapidAPI-Key': '127324b878msh05b82bd11268e45p18b085jsn125c67c49e16'
    //     },
    //   }
    // ).then((response) => {
    //   console.log(response.data)
    // }).catch((error) => {
    //   console.log(error);
    // })
  // }
  searchCityWeather(event) {
    // if (!event || !event.target || !event.target.value) return;
    // this.city = event.target.value;
    this.http.get(
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${this.city}&units=metric`,
      {
        headers: {
          'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
          'X-RapidAPI-Key': '127324b878msh05b82bd11268e45p18b085jsn125c67c49e16'
        },
      }
    ).then((response) => {
      this.weatherInfo = response.data;
      console.log(this.weatherInfo);
    }).catch((error) => {
      this.weatherInfo = '';
      console.error(error);
    })
  //   this.weatherInfo = {
  //     "coord": {
  //         "lon": -0.1257,
  //         "lat": 51.5085
  //     },
  //     "weather": [
  //         {
  //             "id": 803,
  //             "main": "Clouds",
  //             "description": "broken clouds",
  //             "icon": "04d"
  //         }
  //     ],
  //     "base": "stations",
  //     "main": {
  //         "temp": 285.32,
  //         "feels_like": 285.07,
  //         "temp_min": 284.42,
  //         "temp_max": 286.36,
  //         "pressure": 1014,
  //         "humidity": 95
  //     },
  //     "visibility": 10000,
  //     "wind": {
  //         "speed": 3.6,
  //         "deg": 280
  //     },
  //     "clouds": {
  //         "all": 75
  //     },
  //     "dt": 1654499111,
  //     "sys": {
  //         "type": 2,
  //         "id": 2019646,
  //         "country": "GB",
  //         "sunrise": 1654487151,
  //         "sunset": 1654546365
  //     },
  //     "timezone": 3600,
  //     "id": 2643743,
  //     "name": "London",
  //     "cod": 200
  // }
    event.target.value = '';
    this.city='';
  }
  showPopover() {
    this.showAdditionalContent = !this.showAdditionalContent;
    this.http.get(`https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=${this.weatherInfo.name}&cnt=7&units=metric`,
    {
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': '127324b878msh05b82bd11268e45p18b085jsn125c67c49e16'
      },
    }).then((response) => {
      // this.weatherInfo = response.data;
      this.weeklyWeatherInfo = response.data;
      console.log(response.data);
    }).catch((error) => {
      // this.weatherInfo = '';
      console.error(error);
    })
  }
}
