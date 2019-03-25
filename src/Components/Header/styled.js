import styled from 'styled-components'

export const Wrap = styled.div `
display: flex;
margin-top: 25px;
margin-right: 25px;
margin-left: 25px; 
justify-content: space-between;
`

export const Navigation = styled.ul `
  display: flex;
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0;
`

export const Item = styled.li `
  margin-right: 40px;

  font-style: 'Nunito';
  font-weight: bolder;
  font-size: 14px;
  color: "#1a1a1d";
`