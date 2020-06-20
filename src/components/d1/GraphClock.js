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
  
  position: relative;
  
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


function unixToHour(unix) {
	let date = new Date(unix * 1000);
	let hour = date.getHours();
	return hour;
}


function getCurrentOrder(hour){
	let hour12;
	if (hour >= 12) {
		hour12 = hour -12;
	} else {
		hour12 = hour;
	}
	return hour12;
}


function getCircleCoords(radius, steps, centerX, centerY) {
	let xValues = [];
	let yValues = [];
	
	for (var i = 0; i < steps; i++) {
		//12시 정각이 아닌 12시와 1시 중간
		//y는 방향 반대
	  xValues.push( centerX + radius * Math.cos(- 2 * Math.PI * i / steps  +  2 * Math.PI * (1/4)  -  2 * Math.PI * 0.5 / steps));
	  yValues.push( centerY + radius * Math.sin(-(- 2 * Math.PI * i / steps  +  2 * Math.PI * (1/4)  -  2 * Math.PI * 0.5 / steps)));
	}
	
	return [xValues, yValues]
}



const GraphClock = (props) => {
  
  console.log(props);
  const weatherH = props.weatherH;
  
  const cx = 3;
  const cy = 3;
  
  /*  12 / 2 pi = 1.909859317  */
  const r = 1.909859317;
  const sizeFont = 0.018
  
  const tempHours = (weatherH.map(hour => hour["temp"])).slice(0,12);
  const colorHours = tempHours.map( (temp) => tempToColor(temp, [0,200,200], [255,255,255], [255,0,0]) )
  
  const hours = (weatherH.map(hour => unixToHour(hour["dt"]) )).slice(0,12);
  
  const cHour = hours[0];
  const cOrder = getCurrentOrder(cHour);
  
   
  
  const coordsOrders = getCircleCoords(r, 12, cx, cy);
  //const coordsHours = hours.map( (hour)=>(coordsOrders[ getCurrentOrder(hour) ]) );
  
  // following doesn't work
  //const COLOR_bg = props.theme.COLOR_bg;
  
  console.log(tempHours, colorHours, cHour)
  
  
  
  return (
  	
  	
  	<DivGraphClock > 
  	<Div> {cHour} </Div>
  	
  	
  	<div style={{position: 'absolute', zIndex:2}}>
			<svg
		  xmlns="http://www.w3.org/2000/svg"
		  version="1.1"
		  width="100%" height="100%" viewBox="0 0 6 6"   
			>
  			<circle 
  			  cx={cx} cy={cy} r={r} 
  			  strokeWidth="1.3"
  			  
  			  
  			  fill="transparent"
  			  stroke={"#ff0"}
  			  
  	      strokeDasharray= "1.15 10.85"
  	      
  			  style={{
						transformOrigin: 'center',
						transform: `rotate(${-90 + cOrder * (360 / 12) - 3.5 }deg)`
					}}
  			  
  			> </circle>
  		</svg>
  	</div>
  	
  	
  	
  	{tempHours.map( (temp, i) => (
  	/* 1 hour ring */
			<div 
			style={{
				position: 'absolute', 
				zIndex: 3
				/* following don't work as I think */
				/*,width:"100%", height:"100%"*/
			}}
			key={i}
			>
  			
  		<svg
		  xmlns="http://www.w3.org/2000/svg"
		  version="1.1"
		  width="100%" height="100%" viewBox="0 0 6 6"  
			>
  			  <circle 
  			  cx={cx} cy={cy} r={r} 
  			  strokeWidth="1"
  			  
  			  
  			  fill="transparent"
  			  stroke={colorHours[i]}
  			  
  	      strokeDasharray= "0.9 11.1"
  	 
  			  
  			  key={hours[i]}
  			  
  			  style={{
						transformOrigin: 'center',
						transform: `rotate(${-90 + i * (360 / 12)}deg)`
					}}
  			  
  			>{hours[i]} </circle>
  			
  			
  			<text /* 1 hour text */
  			  x={coordsOrders[0][i]} 
  			  y={coordsOrders[1][i] }
  			  
  			  font-size={sizeFont.toString()+"em"}
  			  text-anchor="middle"
  			  
  			  fill="#000000"
  			  
  			  key={i}
  			> {`${temp}`} </text>
  			
  				<text /* 1 hour text */
  			  x={coordsOrders[0][i]} 
  			  y={coordsOrders[1][i] + 0.3}
  			  
  			  font-size={sizeFont.toString()+"em"}
  			  text-anchor="middle"
  			  
  			  fill="#000000"
  			  
  			  key={i}
  			> {`at${getCurrentOrder(hours[i])}`} </text>
  			
  		</svg>
  		</div>
  			) )}
  			
		   
		    
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