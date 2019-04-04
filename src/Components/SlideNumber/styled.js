import styled from 'styled-components'

export const Wrap = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  flex-wrap: nowrap;
  margin-left: 60px;
  height: 100px;
  justify-content: space-between;
`

export const Line = styled.div `
  margin-left: 10px;
  height: 50px;
  width: 2px;
  background: #000000;
`

export const Number = styled.p `
  font-family: 'Poppins';
  color: #1a1a1d;
  margin: 0;
  width: 1em;
  transform: rotate(-90deg);
`