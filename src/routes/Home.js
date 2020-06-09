import React from 'react';
import axios from 'axios';
import {GlobalStyle, Div, Button} from '../styles/DefaultStyles';


import * as api from '../lib/api';

import Title from '../components/1/Home';


class Home extends React.Component {
  state = {
    isLoading: true,
    weather: []
  };
  getMovies = async() => {
    const {
      data: {
        weather
      }
    } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=750bac5e554109ad1e24ce1c5e55351d"
    );
    
    this.setState({
      weather, isLoading: false
    });
    console.log(weather);
  };
  
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {
      isLoading, weather
    } = this.state;
    return (

      < >
      < GlobalStyle / > {
        isLoading ? "Loading..." : 
        
        
          <>
            <Title/>
          </>
        
      } < />
    );
  }
}


export default Home;