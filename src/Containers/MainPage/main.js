import React, { Component } from "react";
import Header from "../../Components/Header/header";
import Social from "../../Components/Social/social";
import Background from "../../Components/Background/back";
import SlideNumber from "../../Components/SlideNumber/slide";
import Button from "../../Components/Button/button";
import Pagination from "../../Components/Pagination/page";
import { connect } from "react-redux";
import axios from 'axios'

class MainPage extends Component {
  state = {
    activeIndex: 0,
    dataFeed: [],
  }

  componentDidMount() {
      try{
        axios.get('https://api.myjson.com/bins/brm7k').then( res => this.setState({dataFeed: res.data.data}));
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
    const { newValue } = this.props;
    return (
      <React.Fragment>
        <Background />
        <Header />
        <Social />
        <SlideNumber activeSlide={newValue} />
        <Button link="http://anichart.net" description="Click Me" />
        <Pagination />
        <Background/>
        
        <Header/>
        <Social/>
        <SlideNumber activeSlide={this.state.activeIndex} />
        <Button link='http://anichart.net' description='Click Me'/>
        <Pagination activeIndex={this.state.activeIndex} goToSlide={this.goToSlide} feedLength={this.state.dataFeed.length}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

export default connect(mapStateToProps)(MainPage);
