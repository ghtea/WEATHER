import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import {Div} from '../styles/DefaultStyles';


const DivMenu = styled(Div)`
  grid-area: menu;
  background-color: ${props => props.theme.COLOR_normal};
  color: ${props => props.theme.color_strong};
  
  /* you should make position fixed but that break grid system  */
  /*position: sticky;*/
  
  @media (max-width: 480px) {
  	flex-direction: row;
  
	}
 
	 @media (min-width: 481px) {
	  flex-direction: column;
	  align-self: start;
	 }
  
`;

const DivMenuItem = styled(Div)`
	height: 50px;

  @media (max-width: 480px) {
  	width: 25%;
  
	}
 
	 @media (min-width: 481px) {
	  width: 100%;
	 }
`;


const activeClassName = 'nav-link-active';

const NavLinkMenuItem = styled(NavLink).attrs({ activeClassName })`
  
	color: ${props => props.theme.color_normal};
	text-decoration: none;
	
	&.${activeClassName} {
		color: ${props => props.theme.color_active};
	}
	
`;


function Menu () {
	return (
 
  <DivMenu>
  	<DivMenuItem > <NavLinkMenuItem to="/items"> Items </NavLinkMenuItem> </DivMenuItem>
		<DivMenuItem > <NavLinkMenuItem to="/" exact={true}> Today </NavLinkMenuItem> </DivMenuItem>
		<DivMenuItem > <NavLinkMenuItem to="/" exact={true}> Tomorrow </NavLinkMenuItem> </DivMenuItem>
		<DivMenuItem > <NavLinkMenuItem to="/setting"> Setting </NavLinkMenuItem> </DivMenuItem>
	</DivMenu>
	
	)
}

export default Menu;