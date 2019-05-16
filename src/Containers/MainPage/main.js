import React, {Component} from 'react'
import axios from 'axios'
import Header from '../../Components/Header/header'
import Social from '../../Components/Social/social'
import Background from '../../Components/Background/back'
import SlideNumber from '../../Components/SlideNumber/slide'
import Button from '../../Components/Button/button'
import Pagination from "../../Components/Pagination/page"

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
    return(
      <React.Fragment>
        <Background/>
        <Header/>
        <Social/>
        <SlideNumber activeSlide={this.state.activeIndex} />
        <Button link='http://anichart.net' description='Click Me'/>
        <Pagination activeIndex={this.state.activeIndex} goToSlide={this.goToSlide} feedLength={this.state.dataFeed.length}/>
      </React.Fragment>
    )
  }
}

export default MainPage