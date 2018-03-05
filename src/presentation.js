import React from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Quote,
  Slide,
  Text,
  SlideSet,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import ContentSlide from './master/ContentSlide';
import MySlides from './master/DividerSlide';

const images = {
  deltas: require("./assets/deltas.png"),
  firstGitCommit: require("./assets/first-git-commit.png"),
  linus: require("./assets/linus.png"),
  merge: require("./assets/merge.png"),
  reabaseMeme: require("./assets/reabase-meme.png"),
  snapshots: require("./assets/snapshots.png"),
  stagingDirectories: require("./assets/staging-directories.png"),
  whatIsABranch: require("./assets/what-is-a-branch.png"),
  whatIsACommit: require("./assets/what-is-a-commit.png"),
};

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Git
          </Heading>
          <Text>
            In case of fire: git commit, git push, leave the building
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Contents
          </Heading>
          <List>
            <ListItem>History</ListItem>
            <ListItem>Fundamentals</ListItem>
            <ListItem>Basics</ListItem>
            <ListItem>Branching</ListItem>
            <ListItem>More Advanced Git</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            History
          </Heading>
          <Text>Why, When, Who?</Text>
          <List>
            <ListItem>Linux kernel is a massive open source project.</ListItem>
            <ListItem>In the 90s changes to software was managed by passing round files and patches.</ListItem>
            <ListItem>Early 00s used a revision control system called BitKeeper.</ListItem>
            <ListItem>New system?  What does it need?</ListItem>
            <ListItem>Speed, simple, light weight branching model, distributed, able to handle large projects.</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            History
          </Heading>
          <Text>Why, When, Who?</Text>
          <Image src={images.firstGitCommit}/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            History
          </Heading>
          <Text>Linus Quotes</Text>
          <List>
            <ListItem>I'm an egotistical bastard, and I name all my projects after myself. First 'Linux', now 'git’.</ListItem>
            <ListItem>*YOU* are full of bullshit.</ListItem>
            <ListItem>I'm a bastard. I have absolutely no clue why people can ever think otherwise</ListItem>
            <ListItem>A lot of people still like Solaris, but I'm in active competition with them, and so I hope they die</ListItem>
            <ListItem>I'm always right. This time I'm just even more right than usual.</ListItem>
            <ListItem>Is ‘I hope you all die a painful death’ too strong?</ListItem>
            <ListItem>The fact that ACPI was designed by a group of monkeys high on LSD, and is some of the worst designs in the industry obviously makes running it at any point pretty damn ugly.</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Fundamentals
          </Heading>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How other VCS stores files
          </Heading>
          <Text>Differences</Text>
          <Image src={images.deltas}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How git stores files
          </Heading>
          <Text>Snapshots, Not Differences</Text>
          <Image src={images.snapshots}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Three Stages
          </Heading>
          <Image src={images.}/>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How git stores files
          </Heading>
          <Text>Snapshots, Not Differences</Text>
          <Image src={images.snapshots}/>
        </Slide>
      </Deck>
    );
  }
}
