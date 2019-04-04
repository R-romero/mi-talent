import React, {Component} from 'react';
import {Wrap, Item, Indicator } from './styled';

class Pagination extends Component {
  state = {
    activeIndex: 0,
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index,
    });
  }

  rows (){
    let returno = [];
    for (let i=0; i < /*this.props.feedLength*/4; i++){
      returno.push(0) 
    }

    return returno;
  }

  render() {
    return(
      <Wrap>
          {this.rows().map((slide, index) => (
            <Item
              active={this.state.activeItem}
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
              onClick={e => this.goToSlide(index)}
            >
              0{index + 1}
              <Indicator index={index} activeIndex={this.state.activeIndex}/>
            </Item>
          ))}
      </Wrap>
    )
  }

}

export default Pagination;