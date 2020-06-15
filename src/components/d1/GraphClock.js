import React from 'react';
import styled, {keyframes} from 'styled-components';
import './GraphClock.css' 

import {Div} from '../../styles/DefaultStyles';
//import * as Donut from '../../styles/graphs/Donut';



const DivGraphClock = styled(Div)`
  grid-area: graphC;
  
  width: 300px;
  font-size: 1rem;
  margin: 0 auto;
  
`;




function GraphClock ({weatherH}) {
  
  const cx = 2.5;
  const cy = 2.5;
  
  /*  12 / 2 pi = 1.909859317  */
  const r = 1.909859317;
  
  const tempHours = (weatherH.map(hour => hour["temp"])).slice(0,12);
  
  //const TempHours = [10, 5, 13, 20]; 
  const colorHours = ["red", "blue", "yellow", "green", "red", "blue", "yellow", "green", "red", "blue", "yellow", "green"];
  
  return (
  	
  	
  	<DivGraphClock > 
  		<svg
  		  xmlns="http://www.w3.org/2000/svg"
  		  version="1.1"
  		  width="100%" height="100%" viewBox="0 0 5 5" 
  		>
  		
  			<circle /* hole */
  			  cx={cx} cy={cy} r={r}
  			  fill="#ffffff"
  			  
  			> </circle>
  			
  			<circle /* entire ring */
  			  cx={cx} cy={cy} r={r} 
  			  strokeWidth="1"
  			  
  			  fill="transparent"
  			  stroke="#EBEBEB"
  			  
  			> </circle>
  			
  			
  			{tempHours.map( (temp, i) => (
  			  <circle /* 1 hour ring */
  			  cx={cx} cy={cy} r={r} 
  			  strokeWidth="1"
  			  
  			  
  			  fill="transparent"
  			  stroke={colorHours[i]}
  			  
  	      strokeDasharray= "1 11"
  			  strokeDashoffset={3-i}
  			  
  			  key={i}
  			> {temp} </circle>
  			
  			) )}
		    
		  </svg>
  	</DivGraphClock>

	
	)
}

export default GraphClock;


/*  12 / 2 pi = 1.909859  */
/*

<circle className="hole" fill="#fff"   ></circle>
		    
		    <circle className="entire"  ></circle>
		    
		    <circle className="section" stroke="red" stroke-dashoffset="3"></circle>
		    <circle className="section" stroke="blue" stroke-dashoffset="2"></circle>
		    <circle className="section" stroke="yellow" stroke-dashoffset="1"></circle>

<g className="donut-text donut-text-1">
		
		      <text y="50%" transform="translate(0, 0)">
		        <tspan x="50%" text-anchor="middle" className="donut-percent">69% 0713</tspan>   
		      </text>
		      
		      <text y="50%" transform="translate(0, 0)">
		        <tspan x="50%" text-anchor="middle" className="donut-data"> {weather["description"]} </tspan>   
		      </text>
		    </g>
*/