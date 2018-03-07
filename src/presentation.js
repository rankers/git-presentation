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
  Markdown,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import Terminal from 'spectacle-terminal';
import preloader from 'spectacle/lib/utils/preloader';
import styled from 'styled-components';

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
  commitMsgHook: require("./assets/commit-msg.png"),
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

// const theme = createTheme(
//   {
//     primary: "#2D2D2D",
//     secondary: "white",
//     tertiary: "#999",
//   }, {
//     primary: "Open Sans",
//     secondary: "Montserrat",
//   }
// );


const theme = createTheme(
  {
    primary: '#FFF0A5',
    secondary: '#468966',
    tertiary: '#B64926',
    quartenary: '#FFB03B',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

// https://github.com/FormidableLabs/spectacle/issues/426
// This doesn't work so have to use fecking important while a proper fix is made

// styled(Slide)`
//   background: ${theme.screen.colors.primary} !important;
// `;
const TitleSlide = Slide;
const SectionSlide = Slide;
const ContentHeading = styled(Heading)`
  color: ${theme.screen.colors.secondary} !important;
`;
const ContentSubHeading = styled(Text)`
  color: ${theme.screen.colors.secondary} !important;
  opacity: 0.7;
  font-style: italic;
  margin-left: 0.25rem !important;
`;
const CustomListItem = styled(ListItem)`
  color: ${theme.screen.colors.tertiary} !important;
  font-size: 2rem !important;;
`;
const CustomCode = Code;
const RoundedImage = styled(Image)`
  border-radius: 50%;
`;
const ContentText = styled(Text)`
  font-size: 2rem !important;
  color: ${theme.screen.colors.tertiary} !important;
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <TitleSlide transition={['zoom']}>
          <Heading size={2} caps lineHeight={1}>
            Git
          </Heading>
          <ContentText textColor="tertiary">
            In case of fire: git commit, git push, leave the building
          </ContentText>
        </TitleSlide>
        <Slide bgColor="primary">
          <ContentHeading size={3} caps lineHeight={1} margin="30px">
            Who am I?
          </ContentHeading>
          <RoundedImage
            src={images.me}
            height="200px"
            padding="0 20px"
          />
          <ContentText>
            Deloitte Digital, London
          </ContentText>
          <ContentText textColor="tertiary" textSize="2rem">
            Tech lead passionate about Mobile, Front End, Devops
          </ContentText>
        </Slide>
        <SectionSlide >
          <ContentHeading size={3} caps lineHeight={1}>
            Contents
          </ContentHeading>
          <List>
            <CustomListItem>History</CustomListItem>
            <CustomListItem>Fundamentals</CustomListItem>
            <CustomListItem>Rebase vs Merge</CustomListItem>
            <CustomListItem>More Advanced Git</CustomListItem>
          </List>
        </SectionSlide>
        <Slide  bgColor="primary">
          <ContentHeading size={3} caps lineHeight={1}>
            History
          </ContentHeading>
          <ContentSubHeading>Why, When, Who?</ContentSubHeading>
            <List>
              <CustomListItem >Linux kernel is a massive open source project.</CustomListItem>
              <CustomListItem>In the 90s changes to software was managed by passing round files and patches.</CustomListItem>
              <CustomListItem>Early 00s used a revision control system called BitKeeper.</CustomListItem>
              <CustomListItem>New system?  What does it need?</CustomListItem>
              <CustomListItem>Speed, simple, light weight branching model, distributed, able to handle large projects.</CustomListItem>
            </List>
        </Slide>
        <Slide  bgColor="primary">
          <ContentHeading size={3} caps lineHeight={1}>
            History
          </ContentHeading>
          <ContentSubHeading>Why, When, Who?</ContentSubHeading>
          <Image height="550px" src={images.firstGitCommit}/>
        </Slide>
        <Slide  bgColor="primary">
          <ContentHeading size={3} caps lineHeight={1}>
            History
          </ContentHeading>
          <ContentSubHeading>Linus Quotes</ContentSubHeading>
          <List>
            <CustomListItem>I'm an egotistical bastard, and I name all my projects after myself. First 'Linux', now 'git’.</CustomListItem>
            <CustomListItem>*YOU* are full of bullshit.</CustomListItem>
            <CustomListItem>I'm a bastard. I have absolutely no clue why people can ever think otherwise</CustomListItem>
            <CustomListItem>A lot of people still like Solaris, but I'm in active competition with them, and so I hope they die</CustomListItem>
            <CustomListItem>I'm always right. This time I'm just even more right than usual.</CustomListItem>
            <CustomListItem>Is ‘I hope you all die a painful death’ too strong?</CustomListItem>
            <CustomListItem>The fact that ACPI was designed by a group of monkeys high on LSD, and is some of the worst designs in the industry obviously makes running it at any point pretty damn ugly.</CustomListItem>
          </List>
        </Slide>
        <SectionSlide>
          <ContentHeading size={1} fit caps lineHeight={1}>
            Fundamentals
          </ContentHeading>
        </SectionSlide>
        <Slide >
          <ContentHeading size={3} caps lineHeight={1}>
            How other VCS stores files
          </ContentHeading>
          <ContentSubHeading>Differences</ContentSubHeading>
          <Image src={images.deltas}/>
        </Slide>
        <Slide >
          <ContentHeading size={3} caps lineHeight={1}>
            How git stores files
          </ContentHeading>
          <ContentSubHeading>Snapshots, Not Differences</ContentSubHeading>
          <Image src={images.snapshots}/>
        </Slide>
        <Slide >
          <ContentHeading size={3} caps lineHeight={1}>
            Three Stages
          </ContentHeading>
          <Image src={images.stagingDirectories}/>
        </Slide>
        <Slide >
          <ContentHeading size={3} caps lineHeight={1}>
            What is a commit?
          </ContentHeading>
          <Image src={images.whatIsACommit}/>
        </Slide>
        <Slide >
          <ContentHeading size={3}  caps lineHeight={1}>
            What is a branch?
          </ContentHeading>
          <Image src={images.whatIsABranch}/>
        </Slide>
        <Slide >
          <ContentHeading size={3}  caps lineHeight={1}>
            Commit Messages
          </ContentHeading>
          <ContentSubHeading>Seems trivial but very useful having consistent clear messages</ContentSubHeading>
          <List>
             <CustomListItem>Prepend all subject with ticket number</CustomListItem>
             <CustomListItem>Separate subject from body with a blank line</CustomListItem>
             <CustomListItem>Limit the subject line to 50 characters</CustomListItem>
             <CustomListItem>Capitalize the subject line</CustomListItem>
             <CustomListItem>Do not end the subject line with a period</CustomListItem>
             <CustomListItem>Use the imperative mood in the subject line</CustomListItem>
             <CustomListItem>Wrap the body at 72 characters</CustomListItem>
             <CustomListItem>Use the body to explain what and why vs. how</CustomListItem>
          </List>
        </Slide>
        <SectionSlide transition={['zoom', 'slide']}>
          <ContentHeading size={3}  caps lineHeight={1}>
            Rebase vs Merge
          </ContentHeading>
          <ContentText> The first thing to understand about git rebase is that it solves the same
             problem as git merge. Both of these commands are designed to integrate changes 
             from one branch into another branch—they just do it in very different ways.
          </ContentText>
        </SectionSlide>
        <Slide >
          <ContentHeading size={3} caps lineHeight={1}>
            Merge
          </ContentHeading>
          <ContentText>Merging brings two lines of development together while preserving the ancestry of each commit history.</ContentText>
        </Slide>
        <Slide >
          <ContentHeading size={3} caps lineHeight={1}>
            Merge
          </ContentHeading>
          <Image height="500px" src={images.mergeRebaseImages.img01}/>
        </Slide>
        <Slide>
          <ContentHeading caps size={3}>
            Merge
          </ContentHeading>
          <CustomCode>git merge master</CustomCode>
          <Image height="500px" src={images.mergeRebaseImages.img02}/>
        </Slide>
        <Slide>
          <ContentHeading margin="0 0 30px" caps size={3}>Merge</ContentHeading>
          <Layout>
            <Fill>
              <List>
                <CustomListItem>Pro: simple</CustomListItem>
                <CustomListItem>Pro: non-destructive operation</CustomListItem>
                <CustomListItem>Con: extraneous merge commit</CustomListItem>
              </List>
            </Fill>
            <Fill>
              <Image height="300" src={images.mergeMeme}/>
            </Fill>
          </Layout>
        </Slide>
        <Slide >
          <ContentHeading size={3} caps lineHeight={1}>
            Rebase
          </ContentHeading>
          <ContentText>
            This moves the entire feature branch to begin on the tip of the master branch,
            effectively incorporating all of the new commits in master. But, instead of using 
            a merge commit, rebasing re-writes the project history by creating brand new commits 
            for each commit in the original branch.
          </ContentText>
        </Slide>
        <Slide>
          <ContentHeading size={3} lineHeight={1} caps >
            Rebase
          </ContentHeading>
          <CustomCode>git rebase master</CustomCode>
          <Image height="500px" src={images.mergeRebaseImages.img03}/>
        </Slide>
        <Slide>
          <ContentHeading size={3} lineHeight={1} caps  margin="0 0 30px">
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
            <Fill>
              <Image  height="300" src={images.reabaseMeme}/>
            </Fill>
          </Layout>
        </Slide>
        <SectionSlide transition={['zoom', 'slide']}>
          <ContentHeading size={3} caps lineHeight={1}>
            More Advanced Git
          </ContentHeading>
        </SectionSlide>
        <Slide >
          <ContentHeading size={3} caps lineHeight={1}>
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
        <Slide >
          <ContentHeading size={3} caps lineHeight={1}>
            Hooks
          </ContentHeading>
          <ContentSubHeading>Located in ./git/hooks folder at repo root.</ContentSubHeading>
          <List>
            <CustomListItem>Loads of examples in hooks folder </CustomListItem>
            <CustomListItem>Hook into lifecycle of git to perform checks or actions</CustomListItem>
            <CustomListItem>E.g. Commit-msg hook to check commit msg conforms to a standard</CustomListItem>
          </List>
          <Image src={images.commitMsgHook}/>
          
        </Slide>
        <Slide >
          <ContentHeading size={3} caps lineHeight={1}>
            Reset
          </ContentHeading>
          <ContentSubHeading>Soft, Mixed, Hard ?</ContentSubHeading>
          <Image height="500px" src={images.resetImages.img01}/>
        </Slide>
        <Slide >
          <ContentHeading size={3} caps lineHeight={1}>
            Reset
          </ContentHeading>
          <ContentSubHeading>Soft</ContentSubHeading>
          <Image height="500px" src={images.resetImages.img02}/>
        </Slide>
        <Slide >
          <ContentHeading size={3} caps lineHeight={1}>
            Reset
          </ContentHeading>
          <ContentSubHeading>Mixed</ContentSubHeading>
          <Image height="500px" src={images.resetImages.img03}/>
        </Slide>
        <Slide >
          <ContentHeading size={3} lineHeight={1}>
            Reset
          </ContentHeading>
          <ContentSubHeading>Hard</ContentSubHeading>
          <Fit>
            <Image height="500px" src={images.resetImages.img04}/>
          </Fit>
        </Slide>
        <Slide >
          <ContentHeading size={3} caps lineHeight={1}>
            The Command Line?
          </ContentHeading>
          <BlockQuote>
            <Quote textColor="tertiary" textSize={20}>
              For one, the command line is the only place you can run all Git commands – most of the
              GUIs implement only a partial subset of Git functionality for simplicity.
              If you know how to run the command-line version, you can probably also 
              figure out how to run the GUI version, while the opposite is not necessarily true.
              Also, while your choice of graphical client is a matter of personal taste, all users will
              have the command-line tools installed and available.
            </Quote>
            <Cite>Pro Git book</Cite>
          </BlockQuote>
        </Slide>
        <Slide >
          <ContentHeading size={3} caps lineHeight={1}>
            My favourite commands
          </ContentHeading>
          <List>
            <CustomListItem>git blame (-C)</CustomListItem>
            <CustomListItem>git diff branch1..branch2</CustomListItem>
            <CustomListItem>git diff branch1..branch2 – path/to/file</CustomListItem>
            <CustomListItem>git checkout branchname – path/to/file</CustomListItem>
            <CustomListItem>gitk</CustomListItem>
            <CustomListItem>git log --oneline --decorate --graph –all</CustomListItem>
            <CustomListItem>git push origin :some-feature</CustomListItem>
            {/* <CustomListItem>git show <commit hash></CustomListItem> */}
            <CustomListItem>git svn – complete set of svn commands</CustomListItem>
          </List>
        </Slide>
        <SectionSlide transition={['zoom', 'slide']}>
          <Heading>Questions</Heading>
        </SectionSlide>
      </Deck>
    );
  }
}
