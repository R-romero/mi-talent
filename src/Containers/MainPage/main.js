import React, {Component} from 'react'
import Header from '../../Components/Header/header'
import Social from '../../Components/Social/social'
import Background from '../../Components/Background/back'
import SlideNumber from '../../Components/SlideNumber/slide'
import Button from '../../Components/Button/button'
import Pagination from "../../Components/Pagination/page"

class MainPage extends Component {
  render() {
    return(
      <React.Fragment>
        <Background/>
        <Header/>
        <Social/>
        <SlideNumber activeSlide='02'/>
        <Button link='http://anichart.net' description='Click Me'/>
        <Pagination/>
      </React.Fragment>
    )
  }
}

export default MainPage