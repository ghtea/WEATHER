import React from 'react';
import styled from 'styled-components';

import Title from '../components/d1/Title';
import {Div} from '../styles/DefaultStyles';


const DivItems = styled(Div)`
  grid-area: content;
  
`;


function Items() {
  return (
    <DivItems>

    <Title title = {"Items"} />
    
    <Div>
      "You can check items here"
    </Div>
    
    </DivItems>
  );
}

export default Items;