import React from 'react'
import {Wrap, Line, Number} from './styled'

const SlideNumber = (props) => (
  <Wrap>
    <Number>0{props.activeSlide + 1}</Number>
    <Line/>
  </Wrap>
)

export default SlideNumber;