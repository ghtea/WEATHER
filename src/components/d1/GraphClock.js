import React from 'react';
import styled, {keyframes} from 'styled-components';
import './GraphClock.css' 

import {Div} from '../../styles/DefaultStyles';
//import * as Donut from '../../styles/graphs/Donut';


const donutfade = keyframes`
	/* this applies to the whole svg item wrapper */
  0% {
      opacity: .2;
  }
  100% {
      opacity: 1;
  }
`



const DivGraphClock = styled(Div)`
  grid-area: graphC;
  
  width: 300px;
  font-size: 1rem;
  margin: 0 auto;
  animation: ${donutfade} 1s;
  
  
  & circle {
  	transform-origin: center;
  
  	cx: 2.5;
  	cy: 2.5;
  	r: 1.909859;
  }
  
  & .entire {
  	fill: transparent;
  	
  	stroke-width: 1;
  	
    stroke: #EBEBEB;
  }
  
  & .section {
  	fill: transparent;
  	
  	stroke-width: 1;
  	stroke-dasharray: 1 11;
  	
    //animation: donut1 1s;
  }
`;




function GraphClock ({weather}) {
  return (
  	
  	
  	<DivGraphClock > 
  	
  		<svg width="100%" height="100%" viewBox="0 0 5 5" >
  			
  			/*  12 / 2 pi = 1.909859  */
  			
		    <circle class="hole" fill="#fff"   ></circle>
		    
		    <circle class="entire"  ></circle>
		    
		    <circle class="section" stroke="red" stroke-dashoffset="3"></circle>
		    <circle class="section" stroke="blue" stroke-dashoffset="2"></circle>
		    <circle class="section" stroke="yellow" stroke-dashoffset="1"></circle>
		    
		    <g class="donut-text donut-text-1">
		
		      <text y="50%" transform="translate(0, 0)">
		        <tspan x="50%" text-anchor="middle" class="donut-percent">69%</tspan>   
		      </text>
		      
		      <text y="50%" transform="translate(0, 0)">
		        <tspan x="50%" text-anchor="middle" class="donut-data"> {weather["description"]} </tspan>   
		      </text>
		    </g>
		    
		  </svg>
  
  	</DivGraphClock>

	
	)
}

export default GraphClock;