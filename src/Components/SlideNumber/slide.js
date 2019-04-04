import React from 'react'
import {Wrap, Line, Number} from './styled'

const SlideNumber = (props) => (
  <Wrap>
    <Line/>
    <Number>{props.activeSlide}</Number>
  </Wrap>
)

export default SlideNumber;