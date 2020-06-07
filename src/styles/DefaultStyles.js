import React from 'react';
import styled, {createGlobalStyle, css} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.COLOR_bg};
    color: ${props => props.theme.color_normal};
  }
`

export const Div = styled.div`
	
`



export const Button = styled.button`
		border: none;
		cursor: pointer;
`