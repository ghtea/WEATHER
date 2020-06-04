import React from 'react';
import styled, {createGlobalStyle, css} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #111111;
  }
`

const Div = styled.div`
	background-color:#660000;
	width: 100%;
	height:100%;
`

	
export {
		GlobalStyle,
		Div
};

