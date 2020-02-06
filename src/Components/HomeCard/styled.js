import styled from 'styled-components'

export const Wrap = styled.div `
  width: 55%;
  margin: 70px 50px 0 12%;
`

export const Slide = styled.div `
  width: 100%;
  height: 500px;
  margin: auto;
  display: ${({activeIndex, index}) => activeIndex === index ? 'block' : 'none'};
  background-image: url(${({slide}) => slide.image ? slide.image : 'none'});
  background-size: cover;
  position: relative;
`

export const Title = styled.h2 `
position: absolute;
top: 20%;
left: -15%;
color: #000;
font-size: 4em;
`

export const Line = styled.div `
  float: right;
  align-self: top;
  width: 60px;
  height: 8px;
  background: lightcoral;
`

export const Subtitle = styled.h3 `
position: absolute;
top: calc(20% + 3em);
left: -13%;
color: #000;
font-size: 2em;
`

export const Play = styled.div `

`

export const Content = styled.div `

`