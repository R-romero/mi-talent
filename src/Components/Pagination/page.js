import React, {Component} from 'react';
import {Wrap, Item, Indicator } from './styled';

class Pagination extends Component {
  rows (){
    let returno = [];
    for (let i=0; i < this.props.feedLength; i++){
      returno.push(0) 
    }

    return returno;
  }

  render() {
    return(
      <Wrap>
          {this.rows().map((slide, index) => (
            <Item
              key={index}
              index={index}
              activeIndex={this.props.activeIndex}
              slide={slide}
              onClick={e => this.props.goToSlide(index)}
            >
              0{index + 1}
              <Indicator index={index} activeIndex={this.props.activeIndex}/>
            </Item>
          ))}
      </Wrap>
    )
  }

}

export default Pagination;