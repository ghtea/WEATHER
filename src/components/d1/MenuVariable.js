import React from 'react';
import styled from 'styled-components';

import {Div} from '../../styles/DefaultStyles';


const DivMenuVariable = styled(Div)`
  grid-area: menu;
  
  display: flex;
  flex-direction: row;
  
  //max-width: 500px;
  
  /*
  @media (max-width: 480px) {
  	flex-direction: row;
  
	}
 
	 @media (min-width: 481px) {
	  flex-direction: column;
	  align-self: start;
	 }
	 */
`;


const DivMenuVariableItem = styled(Div)`
	width: auto;
	padding-left: 5px;
	padding-right: 5px;
`

function MenuVariable () {
  return (
  	
  	
  	<DivMenuVariable > 
  	
  		<DivMenuVariableItem> All </DivMenuVariableItem>
  		<DivMenuVariableItem> Temp </DivMenuVariableItem>
  		<DivMenuVariableItem> Pressure </DivMenuVariableItem>
  		<DivMenuVariableItem> Humidity </DivMenuVariableItem>
  		<DivMenuVariableItem> Wind </DivMenuVariableItem>
  	
  	
  	</DivMenuVariable>

	
	)
}

export default MenuVariable;