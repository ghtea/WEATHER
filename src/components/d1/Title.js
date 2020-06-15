import React from 'react';
import styled from 'styled-components';

import {Div} from '../../styles/DefaultStyles';


const DivTitle = styled(Div)`
  
  grid-area: title;
`;


function Title ({title}) {
  return <DivTitle > {title} </DivTitle>;
}

export default Title;