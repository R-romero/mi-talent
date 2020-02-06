import React, { Component } from "react";
import {Wrap, Title, Line, Subtitle, Content, Play, Slide} from "./styled";

class Card extends Component {
  render() {
    const props = this.props;
    return (
      <Wrap>
        {props.feed.map((slide, index) => (
          <Slide
            key={index}
            index={index}
            activeIndex={props.activeIndex}
            slide={slide}
            url={props.feed[index].image}
          >
            <Title>
              <Line />
              {props.feed[index].title}
            </Title>
            <Subtitle>{props.feed[index].subtitle}</Subtitle>
            <Content>
              <Play />
            </Content>
          </Slide>
        ))}
      </Wrap>
    );
  }
}

export default Card;
