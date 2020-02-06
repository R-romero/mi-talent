import React, { Component } from "react";
import Header from "../../Components/Header/header";
import Social from "../../Components/Social/social";
import Background from "../../Components/Background/back";
import SlideNumber from "../../Components/SlideNumber/slide";
import Button from "../../Components/Button/button";
import Pagination from "../../Components/Pagination/page";
import HomeCard from "../../Components/HomeCard/card"
import { connect } from "react-redux";
import axios from 'axios'
import { FlexWrapper, SmallContainer } from "./styled";

class MainPage extends Component {
  state = {
    activeIndex: 0,
    dataFeed: [],
  }

  componentDidMount() {
      try{
        axios.get('https://api.myjson.com/bins/1c5x9e').then( res => this.setState({dataFeed: res.data.data}));
      } catch (error){
        console.log(error);
      }
  }

  goToSlide = (index) => {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Background />
        <Header />
        <FlexWrapper>
        <SmallContainer>
        <Social />
        <SlideNumber activeSlide={this.state.activeIndex}/>
        </SmallContainer>
        <HomeCard feed={this.state.dataFeed} activeIndex={this.state.activeIndex}/>
        
        <Pagination activeIndex={this.state.activeIndex} goToSlide={this.goToSlide} feedLength={this.state.dataFeed.length}/>
        
        </FlexWrapper>
        <Button link="http://anichart.net" description="Click Me" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

export default connect(mapStateToProps)(MainPage);
