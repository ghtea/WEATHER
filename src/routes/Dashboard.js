import React from 'react';
import styled from 'styled-components';

import axios from 'axios';
import {GlobalStyle} from '../styles/DefaultStyles';

//import {ThemeProvider } from 'styled-components';
//import {dark, light} from "../styles/themes"


import * as api from '../lib/api';

import Title from '../components/d1/Title';
import GraphHorizontal from '../components/d1/GraphHorizontal';
import GraphClock from '../components/d1/GraphClock';
import MenuVariable from '../components/d1/MenuVariable';

import {Div} from '../styles/DefaultStyles';



const DivLoading = styled(Div)`
  grid-area: content;
  
`;

const DivDashboard = styled(Div)`
  grid-area: content;
  
  display: grid;
  
  grid-template: 
    "title" 50px
    "menu" 50px
    "graphH" 150px
    "graphC" 300px
    / 1fr;
    
  justify-items: center;
  
  
  
  /*
  @media (max-width:480px) {
   
   grid-template: 
    "title" 50px
    "menu" 50px
    "graphH" 150px
    "graphC" 300px
    / 1fr;
 }
 

 @media (min-width: 481px) {
  
   grid-template: 
    "menu title" 50px
    "menu graphH" 200px
    "menu graphC" 300px
    / minmax(80px, 100px) 500px;
 }
 */
  
`;



class Dashboard extends React.Component {
  
  state = {
    isRealLocation: false,
    data: {},
    isLoading: true
  };
  
  
  /*
  if(!navigator.geolocation) {
        console.log( 'Geolocation is not supported by your browser');
      } 
  */
  
  
  getLocation (options = {}) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }
  
  getSaveLocation = async () => {
    try {
        const { coords } = await this.getLocation();
        const { latitude, longitude } = coords;
        
        this.setState(prevState =>{
          return{
            ...prevState,
            isRealLocation: true
          }
        })
        
        return [latitude, longitude];
        
    } catch (error) {
      
        this.setState(prevState =>{
          return{
            ...prevState,
            isRealLocation: false
          }
        })
        
        console.log("can't get your location");
        return ['41.902782', '12.496366'];
    }
  };
  
  
  
  getSaveWeather = async (location) => {
    try {
        const {
          data
        } = await api.getWeather(location);
        console.log(data);
        
        this.setState(prevState =>{
          return{
            ...prevState,
            data: data,
            isLoading: false,
            isRealLocation: true
          }
        })
        
        
    } catch (error) {
        // Handle error
        console.log("weather api isn't working");
        console.error(error);
    }
    
  };
    
    
    
  
  
  componentDidMount() {
    this.getSaveLocation().then((location) => {
       this.getSaveWeather(location);
    })
  }



  render() {
    const {
      // eslint-disable-next-line
      isLoading, data
    } = this.state;
    
    return (

      < >
      
      {
        isLoading 
        
        ? 
        <DivLoading> 
          Checking weather... 
        </DivLoading> 
        
        
        
        : 
        <DivDashboard>
          
          <Title title = {data["name"]} />
          <MenuVariable />
          <GraphHorizontal weather = {data["weather"][0]} />
          <GraphClock weather = {data["weather"][0]} />
        
        </DivDashboard>
        
      } 
      
      < />
    );
  }
}


export default Dashboard;