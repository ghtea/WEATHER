import React from 'react';
import styled from 'styled-components';

import {Div} from '../styles/DefaultStyles';
import Title from '../components/d1/Title';


const DivSetting = styled(Div)`
  grid-area: content;
  
`;

function Setting() {
  return (
    <DivSetting>
    <Title title = {"Items"} />
    
    <Div> 
      "New: You can change settings here!"
    </Div>
    
    </DivSetting>
  );
}

export default Setting;