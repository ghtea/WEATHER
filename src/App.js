import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from "react-router-dom";

import About from "./routes/About";
import Home from "./routes/Home";

import styled, {ThemeProvider } from 'styled-components';
import {dark, light} from "./styles/themes"
import {Div, GlobalStyle} from './styles/DefaultStyles';




function App() {
  const [cTheme, setTheme] = useState('light'); 
  const theme = cTheme === 'light' ? light : dark;
  const toggleTheme = () => setTheme(cTheme === 'light' ? 'dark' : 'light'); 

  
  return (
    <>
    
    <ThemeProvider theme={light}>
    
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
    
    </ThemeProvider>
    
    </>
  );
}

export default App;
