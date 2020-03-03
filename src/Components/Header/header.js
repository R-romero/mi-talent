import React, { useState, useEffect } from "react";
import { Wrap, Navigation, Item, SearchBar, Search, NavItem } from "./styled";
import Logo from "../Logo/logo";

function Header() {
  const [isSearchActive, searchHandler] = useState(false);
  const [isNavActive, navHandler] = useState(true);

  useEffect(() => {
    fetch("url")
      .then(res => res.json)
      .catch(console.log(''))
  }, []);

  return (
    <Wrap>
      <nav>
        <Navigation>
          <NavItem onClick={() => navHandler(!isNavActive)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a1a1d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </NavItem>
          <NavItem>
            <Item active={isNavActive}>Clients</Item>
          </NavItem>
          <NavItem>
            <Item active={isNavActive}>News</Item>
          </NavItem>
        </Navigation>
      </nav>

      <Logo />
      <SearchBar>
        <Search type="text" placeholder="SEARCH POST" active={isSearchActive} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search"
          onClick={() => searchHandler(!isSearchActive)}
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="21" y1="21" x2="15.8" y2="15.8" />
        </svg>
      </SearchBar>
    </Wrap>
  );
}

export default Header;
