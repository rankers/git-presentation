import React, { Component } from 'react';
import {
  Slide,
  SlideSet,
} from 'spectacle';

export default class MySlides extends Component {
  render() {
    return (
      <SlideSet>
        <Slide>1</Slide>
        <Slide>2</Slide>
        <Slide>3</Slide>
      </SlideSet>
    )
  }
}