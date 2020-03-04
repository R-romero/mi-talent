import React from "react";
import { Wrap, Item, Indicator } from "./styled";

function Pagination(props) {
  const drawSlides = () => {
    let slide = [];
    for (let index = 0; index < props.feedLength; index++) {
      slide.push(
        <Item
          key={index}
          index={index}
          activeIndex={props.activeIndex}
          slide={index}
          onClick={e => props.goToSlide(index)}
        >
          0{index + 1}
          <Indicator index={index} activeIndex={props.activeIndex} />
        </Item>
      );
    }

    return slide;
  };

  return <Wrap>{drawSlides()}</Wrap>;
}

export default Pagination;
