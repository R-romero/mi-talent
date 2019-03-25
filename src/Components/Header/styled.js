import styled from 'styled-components'

export const Wrap = styled.div `
  display: flex;
  margin-top: 25px;
  margin-right: 25px;
  margin-left: 25px;
  height: 100px; 
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
  width: 250px;
`

export const NavItem = styled.li `
    margin-right: 40px;
    color: "#1a1a1d";
`

export const Item = styled.li `
  margin-right: 40px;
  font-style: 'Nunito';
  font-weight: bolder;
  font-size: 14px;
  color: "#1a1a1d";
  display: ${({active}) => active ? 'block' : 'none'};
`

export const SearchBar = styled.div `
  display: flex;
  justify-content:flex-end;
  width: 200px;
  margin-top: 3px;
`

export const Search = styled.input `
  padding-top: 3px;
  margin-right: 2px;
  font-style: 'Nunito';
  font-weight: bolder;
  font-size: 14px;
  color: #8c8c8e;
  height: 15px;
  border: none;
  display: ${({active}) => active ? "block" : "none"};
`