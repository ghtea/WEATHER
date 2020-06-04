import React from 'react';
import axios from 'axios';
import { HashRouter, Route } from "react-router-dom";

import About from "./routes/About";
import Home from "./routes/Home";

import {Div, GlobalStyle} from './styledComponents';

function App() {
  return (
    <>
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
    
    
    </>
  );
}

export default App;
