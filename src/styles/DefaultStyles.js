import React from 'react';
import styled, {createGlobalStyle, css} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.COLOR_bg};
    color: ${props => props.theme.color_normal};
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

export const Div = styled.div`
	display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`



export const Button = styled.button`
	border: none;
	cursor: pointer;
		
	display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
		
`