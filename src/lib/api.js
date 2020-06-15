import axios from 'axios';

 function getWeather(location) {
  
  let key = '750bac5e554109ad1e24ce1c5e55351d';
  
  //console.log(location);
  let latitude = location[0];
  let longitude = location[1];
  
  //return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${key}`);
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`);
  
}

export {getWeather}