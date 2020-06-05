import axios from 'axios';

export function getWeather() {
  return axios.get(`api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=750bac5e554109ad1e24ce1c5e55351d`);
}