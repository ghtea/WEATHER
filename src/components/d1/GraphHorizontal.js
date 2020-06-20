import React from 'react';
import styled from 'styled-components';

import {Div} from '../../styles/DefaultStyles';

const DivGraphHorizontal = styled(Div)`
  grid-area: graphH;
`;

function GraphHorizontal ({weather}) {
  return (
  	
  	
  	<DivGraphHorizontal > 
  	
  		<div style={{position: 'absolute', zIndex:2}}>
			<svg
		  xmlns="http://www.w3.org/2000/svg"
		  version="1.1"
		  width="100%" height="100%" viewBox="0 0 300 160" 
			>
				<g >
			    <line x1="0" x2="300" y1="160" y2="160"
			    	style={{stroke:'#888', strokeWidth:3}}
			    ></line>
			  </g>
  			<g >
			    <line x1="0" x2="0" y1="0" y2="160"
			    	style={{stroke:'#888', strokeWidth:3}}
			    ></line>
			  </g>
			  
  		</svg>
  	</div>
  	
  	
  	<div style={{position: 'absolute', zIndex:3}}>
	  	<svg
		  xmlns="http://www.w3.org/2000/svg"
		  version="1.1"
		  width="100%" height="100%" viewBox="0 0 300 160" 
			>
			  <polyline
			     fill="none"
			     stroke="#0074d9"
			     stroke-width="3"
			     points="
			       0,120
			       50,60
			       100,80
			       150,20"/>
			</svg>
		</div>
  	
  	
  	</DivGraphHorizontal>

	
	)
}

export default GraphHorizontal;