import React, { Component }  from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Items from "./routes/Items";
import Dashboard from "./routes/Dashboard";
import Setting from "./routes/Setting";
import Menu from "./routes/Menu";

import {ThemeProvider } from 'styled-components';
import {dark, light} from "./styles/themes"
import {GlobalStyle} from './styles/DefaultStyles';



class App extends React.Component {
    
  isDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    else {
      return false;
    }
  }  
    
    
  constructor(props){
      super(props);
      
      
      
      this.state = {
          themeApp: 'light'
      };
      
      
  }
  
  componentDidMount() {
    // we use as string here but we should use as object (without comma) when pass to theme in ThemeProvicer
      let themeDevice = this.isDarkMode() ? 'dark' : 'light';
      
      this.setState(prevState =>{
          return{
            ...prevState,
            themeApp: themeDevice
          }
        })
      
    
  }
  
  render() {
    
    const { themeApp } = this.state;
    
    return (
      <>
      <ThemeProvider theme={themeApp === 'light' ? light : dark }>
      <GlobalStyle/>
      
      
      <BrowserRouter>
        
        <Switch >
        <Route path="/items" component={Items} />
        <Route path="/setting" component={Setting} />
        <Route path="/"  component={Dashboard} />
        </Switch >
        
        <Route path="/"  component={Menu} />
        
      </BrowserRouter>
      
      
      </ThemeProvider>
      </>
    );
  }
}

export default App;