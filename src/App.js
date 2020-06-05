import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from "react-router-dom";

import About from "./routes/About";
import Home from "./routes/Home";

import {Div, GlobalStyle} from './styledComponents';

function App() {
  return (
    <>
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
