import React, { Component } from "react";
import { Wrap, Navigation, Item } from "./styled";
import Logo from "../Logo/logo";

class Header extends Component {
  render() {
    return (
      <Wrap>
        <nav>
          <Navigation>
            <Item>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1a1a1d"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </Item>
            <Item>Clients</Item>
            <Item>News</Item>
          </Navigation>
        </nav>

        <Logo />
        <div>
          <input type="text" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
          >
            <circle cx="10.5" cy="10.5" r="7.5" />
            <line x1="21" y1="21" x2="15.8" y2="15.8" />
          </svg>
        </div>
      </Wrap>
    );
  }
}

export default Header;
