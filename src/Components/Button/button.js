import React from 'react';
import {Wrap, Description} from './styled';

const Button = (props) => (
  <Wrap href={props.link} target='_blank'>
    <Description>{props.description}</Description>
  </Wrap>
)

export default Button;