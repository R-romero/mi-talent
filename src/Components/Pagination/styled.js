import styled from 'styled-components';

export const Wrap = styled.ul `
  list-style: none;
  padding:0;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`

export const Item = styled.li `
  display: flex;
  margin-bottom: 5px;
  font-family: 'Nunito';
  font-weight: bolder;
  color: ${({activeIndex, index}) => activeIndex === index ? '#000' : '#696970'};
`

export const Indicator = styled.div `
  margin-left: 100px;
  align-self: center;
  width: 60px;
  height: 2px;
  background: #000;
  visibility: ${({activeIndex, index}) => activeIndex === index ? 'visible' : 'hidden'}
`