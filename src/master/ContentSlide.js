import React from 'react';
import {
  Heading,
  Slide,
  Text,
  SlideSet,
} from 'spectacle';

class ContentSlide extends React.Component {
  render() {
    return (
    <SlideSet>
    <Slide transition={['fade']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        {this.props.title}
      </Heading>
      <Text>{this.props.subtitle}</Text>
        {this.props.children}
    </Slide>
    </SlideSet>
  );
  }
}

export default ContentSlide;