import React, { Component } from "react";
import {} from "styled-components";

class Card extends Component {
  render() {
    return (
      <Wrap>
        {this.props.feed.map((slide, index) => (
          <Wrap
            key={index}
            index={index}
            activeIndex={this.props.activeIndex}
            slide={slide}
          >
            <Title>
              {this.props.title}
              <Line />
            </Title>
            <Subtitle>{this.props.subtitle}</Subtitle>
            <Content>
              <Play />
            </Content>
          </Wrap>
        ))}
      </Wrap>
    );
  }
}

export default Card;
