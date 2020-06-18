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

//색상 방향(빨강, 파랑) 별로 나눠서 해야 한다. rgbStart가 white 가 되게.
function blendColor(ZeroToOne, rgbZero, rgbOne) {

    let weightZero = 1 - ZeroToOne;
    let weightOne = ZeroToOne;

    let rgb = [
    	Math.round(rgbZero[0] * weightZero + rgbOne[0] * weightOne),
      Math.round(rgbZero[1] * weightZero + rgbOne[1] * weightOne),
      Math.round(rgbZero[2] * weightZero + rgbOne[2] * weightOne)
      ];
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

// make to -1 ~ 1
function tempToColor(temp, rgbMinus, rgbZero, rgbPlus){
	let tempAvgGlobal = 14;
	let tempGapHalf = 20;
	
	let numTemp;
	let colorTemp;
	
	if (temp >= tempAvgGlobal + tempGapHalf) {
		numTemp = 1;
	} else if (temp <= tempAvgGlobal - tempGapHalf) {
		numTemp = -1;
	} else  {
		numTemp = (temp - tempAvgGlobal) / tempGapHalf;
	}
	
	if (numTemp >= 0) {
		return blendColor(numTemp, rgbZero, rgbPlus)
	} else if (numTemp <0) {
		return blendColor(-numTemp, rgbZero, rgbMinus)
	}
	

}



function GraphClock ({weatherH}) {
  
  const cx = 2.5;
  const cy = 2.5;
  
  /*  12 / 2 pi = 1.909859317  */
  const r = 1.909859317;
  
  const tempHours = (weatherH.map(hour => hour["temp"])).slice(0,12);
  const colorHours = tempHours.map( (temp) => tempToColor(temp, [0,200,200], [255,255,255], [255,0,0]) )
  console.log(tempHours, colorHours)
  
  return (
  	
  	
  	<DivGraphClock > 
  		<svg
  		  xmlns="http://www.w3.org/2000/svg"
  		  version="1.1"
  		  width="100%" height="100%" viewBox="0 0 5 5" 
  		>
  		
  			<circle /* hole */
  			  cx={cx} cy={cy} r={r}
  			  fill="#000000"
  			  
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