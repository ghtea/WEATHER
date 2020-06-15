import styled, {createGlobalStyle} from 'styled-components';

 const GlobalStyle = createGlobalStyle`
  body, #root {
  
    background-color: ${props => props.theme.COLOR_bg};
    color: ${props => props.theme.color_normal};
    
    width: 100%;
    margin: 0;
    
  }
  
  #root {
   display: grid;
  }
  
 
 
 @media (max-width:480px) {
  #root {
   
   grid-template: 
    "menu" 50px
    "content" 1fr
    / minmax(300px, 1fr);
  }
 }
 

 @media (min-width: 481px) {
  #root {

   grid-template: 
    "menu content" 1fr
    / 100px minmax(300px, 600px);
  }
 }
  
`

 const Div = styled.div`
 
 width: 100%;
 
	display: flex;
 align-items: center;
 justify-content: center;
  
  
`



 const Button = styled.button`
	border: none;
	cursor: pointer;
		
	width: 100%;
		
	display: flex;
 align-items: center;
 justify-content: center;
		
`

const A = styled.a`
	color: ${props => props.theme.color_normal};
	text-decoration: none;
		
	display: flex;
 align-items: center;
 justify-content: center;
		
`

export {GlobalStyle, Div, Button, A};
