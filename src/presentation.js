import React from 'react';
import {
  BlockQuote,
  Cite,
  Code,
  Deck,
  Heading,
  Fill,
  ListItem,
  List,
  Image,
  Quote,
  Slide,
  Text,
  Layout,
  Fit,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import Terminal from 'spectacle-terminal';
import preloader from "spectacle/lib/utils/preloader";
// import styled from 'styled-components';

const mergeRebaseImages = {
  img01: require("./assets/rebase-vs-merge/01.svg"),
  img02: require("./assets/rebase-vs-merge/02.svg"),
  img03: require("./assets/rebase-vs-merge/03.svg"),
  img04: require("./assets/rebase-vs-merge/04.svg"),
  img05: require("./assets/rebase-vs-merge/05.svg"),
  img06: require("./assets/rebase-vs-merge/06.svg"),
  img07: require("./assets/rebase-vs-merge/07.svg"),
  img08: require("./assets/rebase-vs-merge/08.svg"),
  img09: require("./assets/rebase-vs-merge/09.svg"),
  img10: require("./assets/rebase-vs-merge/10.svg"),
}

const resetImages = {
  img01: require("./assets/reset/reset-01.png"),
  img02: require("./assets/reset/reset-02.png"),
  img03: require("./assets/reset/reset-03.png"),
  img04: require("./assets/reset/reset-04.png"),
}

const images = {
  deltas: require("./assets/deltas.png"),
  firstGitCommit: require("./assets/first-git-commit.png"),
  linus: require("./assets/linus.png"),
  me: require("./assets/headshot.jpg"),
  mergeMeme: require("./assets/merge.png"),
  reabaseMeme: require("./assets/rebase-meme.png"),
  snapshots: require("./assets/snapshots.png"),
  stagingDirectories: require("./assets/staging-directories.png"),
  whatIsABranch: require("./assets/what-is-a-branch.png"),
  whatIsACommit: require("./assets/what-is-a-commit.png"),
  interactiveRebaseUI: require("./assets/interactive-rebase-ui.png"),
  interactiveRebaseCL: require("./assets/interactive-rebase-cl.png"),
  mergeRebaseImages,
  resetImages,
};

preloader(images);

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

const TitleSlide = Slide;
const SectionSlide = Slide;
const ContentHeading = Heading;
const ContentSubHeading = Text;
const CustomListItem = ListItem;
const CustomCode = Code;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <TitleSlide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Git
          </Heading>
          <Text>
            In case of fire: git commit, git push, leave the building
          </Text>
        </TitleSlide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Who am I and why am I talking to you?
          </Heading>
          <Layout>
            <Fill>
              <Image
                src={images.me}
                height={200}
                padding="0 20px"
              />
            </Fill>
            <Fill>
              <Text textColor="tertiary" textAlign="left" margin="0 0 20px">
                Deloitte Digital, London
              </Text>
              <Text textColor="tertiary" textAlign="left" margin="0 0 20px">
                Tech Lead passionate about Mobile, Front End, Devops.
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <SectionSlide >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Contents
          </Heading>
          <List>
            <ListItem>History</ListItem>
            <ListItem>Fundamentals</ListItem>
            <ListItem>Rebase vs Merge</ListItem>
            <ListItem>More Advanced Git</ListItem>
          </List>
        </SectionSlide>
        <Slide transition={['fade']} bgColor="primary">
          <ContentHeading size={3} fit caps lineHeight={1} textColor="secondary">
            History
          </ContentHeading>
          <Text>Why, When, Who?</Text>
            <List>
              <CustomListItem >Linux kernel is a massive open source project.</CustomListItem>
              <CustomListItem>In the 90s changes to software was managed by passing round files and patches.</CustomListItem>
              <CustomListItem>Early 00s used a revision control system called BitKeeper.</CustomListItem>
              <CustomListItem>New system?  What does it need?</CustomListItem>
              <CustomListItem>Speed, simple, light weight branching model, distributed, able to handle large projects.</CustomListItem>
            </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <ContentHeading size={3} fit caps lineHeight={1} textColor="secondary">
            History
          </ContentHeading>
          <Text>Why, When, Who?</Text>
          <Image src={images.firstGitCommit}/>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <ContentHeading size={3} fit caps lineHeight={1} textColor="secondary">
            History
          </ContentHeading>
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
        <SectionSlide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Fundamentals
          </Heading>
        </SectionSlide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            How other VCS stores files
          </ContentHeading>
          <Text>Differences</Text>
          <Image src={images.deltas}/>
        </Slide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            How git stores files
          </ContentHeading>
          <Text>Snapshots, Not Differences</Text>
          <Image src={images.snapshots}/>
        </Slide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            Three Stages
          </ContentHeading>
          <Image src={images.stagingDirectories}/>
        </Slide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            What is a commit?
          </ContentHeading>
          <Image src={images.whatIsACommit}/>
        </Slide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            What is a branch?
          </ContentHeading>
          <Image src={images.whatIsABranch}/>
        </Slide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            The Command Line?
          </ContentHeading>
          <BlockQuote>
            <Quote textSize={20} textColor="secondary">
              For one, the command line is the only place you can run all Git commands – most of the
              GUIs implement only a partial subset of Git functionality for simplicity.
              If you know how to run the command-line version, you can probably also 
              figure out how to run the GUI version, while the opposite is not necessarily true.
              Also, while your choice of graphical client is a matter of personal taste, all users will
              have the command-line tools installed and available.
            </Quote>
            <Cite textColor="secondary">Pro Git book</Cite>
          </BlockQuote>
        </Slide>
        <SectionSlide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Rebase vs Merge
          </Heading>
          <Text>The first thing to understand about git rebase is that it solves the same
             problem as git merge. Both of these commands are designed to integrate changes 
             from one branch into another branch—they just do it in very different ways.
          </Text>
        </SectionSlide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            Merge
          </ContentHeading>
          <Text>Merging brings two lines of development together while preserving the ancestry of each commit history.</Text>
        </Slide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            Merge
          </ContentHeading>
          <Image src={images.mergeRebaseImages.img01}/>
        </Slide>
        <Slide
          transition={['fade']}
        >
          <ContentHeading size={1} textColor="secondary">
            Merge
          </ContentHeading>
          <CustomCode>git merge master</CustomCode>
          <Image src={images.mergeRebaseImages.img02}/>
        </Slide>
        <Slide
          transition={['fade']}
        >
          <ContentHeading size={1} textColor="secondary">
            Merge
          </ContentHeading>
          <Layout>
            <Fill>
              <List>
                <CustomListItem>Pro: simple</CustomListItem>
                <CustomListItem>Pro: non-destructive operation</CustomListItem>
                <CustomListItem>Con: extraneous merge commit</CustomListItem>
              </List>
            </Fill>
            <Fill>
              <Image height="200" width="200" src={images.mergeMeme}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            Rebase
          </ContentHeading>
          <Text>
            This moves the entire feature branch to begin on the tip of the master branch,
            effectively incorporating all of the new commits in master. But, instead of using 
            a merge commit, rebasing re-writes the project history by creating brand new commits 
            for each commit in the original branch.
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
        >
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            Rebase
          </ContentHeading>
          <CustomCode>git rebase master</CustomCode>
          <Image src={images.mergeRebaseImages.img03}/>
        </Slide>

        <Slide   transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            Rebase
          </ContentHeading>
          <Layout>
            <Fill>
              <List>
                <CustomListItem>Pro: Eliminates unnecessary merge commits</CustomListItem>
                <CustomListItem>Pro: Linear project history</CustomListItem>
                <CustomListItem>Con: Potentially have to resolve conflicts multiple times</CustomListItem>
                <CustomListItem>Con: Safety</CustomListItem>
                <CustomListItem>Con: Tracebility</CustomListItem>
              </List>
            </Fill>
            <Fit>
              <Image src={images.reabaseMeme}/>
            </Fit>
          </Layout>
        </Slide>
        <SectionSlide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            More Advanced Git
          </Heading>
        </SectionSlide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            Interactive Rebase
          </ContentHeading>
          <ContentSubHeading><CustomCode>git rebase -i master</CustomCode></ContentSubHeading>
          <Layout>
            <Fill>
              <List>
                <CustomListItem>Really good tool to rewrite history</CustomListItem>
                <CustomListItem>Squash commits that don’t really add much</CustomListItem>
                <CustomListItem>Reorder to make more chronological sense</CustomListItem>
              </List>
            </Fill>
            <Fill>
              <Image src={images.interactiveRebaseUI}/>
              <Image src={images.interactiveRebaseCL}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            Hooks
          </ContentHeading>
          <ContentSubHeading>Located in ./git/hooks folder at repo root.</ContentSubHeading>
        </Slide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            Reset
          </ContentHeading>
          <ContentSubHeading>Soft, Mixed, Hard ?</ContentSubHeading>
          <Image src={images.resetImages.img01}/>
        </Slide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            Reset
          </ContentHeading>
          <ContentSubHeading>Soft</ContentSubHeading>
          <Image src={images.resetImages.img02}/>
        </Slide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            Reset
          </ContentHeading>
          <ContentSubHeading>Mixed</ContentSubHeading>
          <Image src={images.resetImages.img03}/>
        </Slide>
        <Slide transition={['fade']}>
          <ContentHeading size={1} fit caps lineHeight={1} textColor="secondary">
            Reset
          </ContentHeading>
          <ContentSubHeading>Hard</ContentSubHeading>
          <Image src={images.resetImages.img04}/>
        </Slide>
      </Deck>
    );
  }
}
