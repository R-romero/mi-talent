import React, {Component} from 'react'
import Header from '../../Components/Header/header'
import Social from '../../Components/Social/social'
import Background from '../../Components/Background/back'
import SlideNumber from '../../Components/SlideNumber/slide'
class MainPage extends Component {
  render() {
    return(
      <React.Fragment>
        <Background/>
        <Header/>
        <Social/>
        <SlideNumber activeSlide='02'/>
      </React.Fragment>
    )
  }
}

export default MainPage