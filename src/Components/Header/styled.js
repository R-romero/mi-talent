import styled from 'styled-components'

export const Wrap = styled.div `
  display: flex;
  margin-top: 25px;
  margin-right: 60px;
  margin-left: 60px;
  height: 80px; 
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
  padding-top: 5px;
  width: 250px;
`

export const NavItem = styled.li `
  margin-right: 20px;
  color: #1a1a1d;
  font-family: 'Nunito';
  font-weight: bolder;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

export const Item = styled.a `
  transition: visibility .1s ease;
  visibility: ${({active}) => active ? 'visible' : 'hidden'};
  &:hover {
    color: #8c8c8e;
  }
`

export const SearchBar = styled.div `
  display: flex;
  justify-content:flex-end;
  width: 300px;
  margin-top: 3px;
`

export const Search = styled.input `
  margin-right: 2px;
  font-family: 'Nunito';
  font-weight: bolder;
  font-size: 1em;
  color: #8c8c8e;
  height: 18px;
  border: none;
  display: ${({active}) => active ? "block" : "none"};
`