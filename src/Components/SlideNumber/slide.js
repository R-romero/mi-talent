import React from 'react'
import {Wrap, Line, Number} from './styled'

const SlideNumber = (props) => (
  <Wrap>
    <Line/>
    <Number>0{props.activeSlide + 1}</Number>
  </Wrap>
)

export default SlideNumber;