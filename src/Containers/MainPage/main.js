import React, { Component } from "react";
import Header from "../../Components/Header/header";
import Social from "../../Components/Social/social";
import Background from "../../Components/Background/back";
import SlideNumber from "../../Components/SlideNumber/slide";
import Button from "../../Components/Button/button";
import Pagination from "../../Components/Pagination/page";
import { connect } from "react-redux";

class MainPage extends Component {
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

export default connect(mapStateToProps)(MainPage);
