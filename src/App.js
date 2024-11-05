import React from 'react';
import { Carousel } from 'react';
import {
  ChakraProvider,
  Box,
  extendTheme,
  SimpleGrid,
  Heading,
  Highlight,
  useDisclosure,
  Text,
  Center,
} from '@chakra-ui/react';
import Navbar from "./components/navbar";
import ProjectBox from "./components/projectbox";
import ProjectBox2 from "./components/projectbox2";
import { motion, Variants } from 'framer-motion';
import { CardSubtitle } from 'react-bootstrap';
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react';
import CarouselContainer from './components/carousel';
import PopUpIcon from './components/popupicon';
import '@fontsource/permanent-marker';
import '@fontsource/chewy';
import '@fontsource/gochi-hand';
import PopUpIcon2 from './components/popupicon2';

import { hover } from '@testing-library/user-event/dist/cjs/convenience/hover.js';

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
    alt: `'Permanent Marker', sans-serif`
  },
  colors: {
    alt: {
      purple: {
        50: "#F9EBF5",
        100: "#EFC7E3",
        200: "#E5A4D1",
        300: "#DB80C0",
        400: "#D15CAE",
        500: "#C6399C",
        600: "#9F2D7D",
        700: "#77225D",
        800: "#4F173E",
        900: "#280B1F"
      },
      cyan: {
        50: "#EBF7FA",
        100: "#C7E9F0",
        200: "#A2DBE6",
        300: "#7ECDDD",
        400: "#5ABFD3",
        500: "#36B1C9",
        600: "#2B8EA1",
        700: "#206A79",
        800: "#154751",
        900: "#0B2328"
      },
      green: {
        50: "#F6F8EC",
        100: "#E5ECCA",
        200: "#D4E0A9",
        300: "#C4D487",
        400: "#B3C865",
        500: "#A2BC43",
        600: "#829636",
        700: "#617128",
        800: "#414B1B",
        900: "#20260D"
      },
      yellow: {
        50: "#FEF8E7",
        100: "#FCECBB",
        200: "#F9DF8F",
        300: "#F7D364",
        400: "#F5C638",
        500: "#F3BA0C",
        600: "#C2950A",
        700: "#926F07",
        800: "#614A05",
        900: "#312502"
      },
      pink: {
        50: "#FFFAFA",
        100: "#FBBBCB",
        200: "#F990A9",
        300: "#F66487",
        400: "#F43965",
        500: "#F10E44",
        600: "#C10B36",
        700: "#910829",
        800: "#61051B",
        900: "#30030E"
      },
      teal: {
      50: "#E5FDFF",
      100: "#B8F9FF",
      200: "#8AF5FF",
      300: "#5CF0FF",
      400: "#2EECFF",
      500: "#00E8FF",
      600: "#00BACC",
      700: "#008B99",
      800: "#005D66",
      900: "#002E33"
      },
      gray: {
        50: "#F1F1F4",
        100: "#D9D7DF",
        200: "#C0BECB",
        300: "#A8A4B6",
        400: "#8F8BA2",
        500: "#77718E",
        600: "#5F5B71",
        700: "#474455",
        800: "#302D39",
        900: "#18171C"
      },
      orange: {
        50: "#FCF0E9",
        100: "#F7D5C0",
        200: "#F1BA98",
        300: "#ECA06F",
        400: "#E68547",
        500: "#E16A1E",
        600: "#B45518",
        700: "#874012",
        800: "#5A2A0C",
        900: "#2D1506"
    }
    },
    alt2: {
      yellow: {
        50: "#FBF6EA",
        100: "#F4E6C3",
        200: "#ECD69C",
        300: "#E5C576",
        400: "#DEB54F",
        500: "#D7A528",
        600: "#AC8420",
        700: "#816318",
        800: "#564210",
        900: "#2B2108"
      },
      blue: {
        50: "#EAF3FB",
        100: "#C3DCF4",
        200: "#9CC6EC",
        300: "#76AFE5",
        400: "#4F99DE",
        500: "#2883D7",
        600: "#2068AC",
        700: "#184E81",
        800: "#103456",
        900: "#081A2B"
      },
      red: {
        50: "#FBEAE9",
        100: "#F4C4C2",
        200: "#ED9E9B",
        300: "#E67874",
        400: "#E0534D",
        500: "#D92D26",
        600: "#AD241F",
        700: "#821B17",
        800: "#57120F",
        900: "#2B0908"
      },
      gray: {
        50: "#F3F2F3",
        100: "#DBDBDB",
        200: "#C6C3C4",
        300: "#AFACAD",
        400: "#999496",
        500: "#827D80",
        600: "#686466",
        700: "#4E4B4D",
        800: "#343233",
        900: "#1A191A"
      },
      green: {
        50: "#E9FBEA",
        100: "#C2F5C5",
        200: "#9AEE9F",
        300: "#73E87A",
        400: "#4BE155",
        500: "#24DB2F",
        600: "#1DAF26",
        700: "#16831C",
        800: "#0E5813",
        900: "#072C09"
      },
      cyan: {
        50: "#EAFBF8",
        100: "#C3F4EC",
        200: "#9CECE0",
        300: "#76E5D3",
        400: "#4FDEC7",
        500: "#28D7BB",
        600: "#20AC95",
        700: "#188170",
        800: "#10564B",
        900: "#082B25"
      },
      pink: {
        100: "#FAF4F5",
        200: "#F4C3D0",
        300: "#EC9CB2",
        400: "#E57694",
        500: "#DE4F75",
        600: "#D72857",
        700: "#AC2046",
        800: "#811834",
        900: "#561023",
      }
    }
  }
})

function App() {

  const boxStyles = {
    bgSize: "cover",
    bgPosition: "50% 63%",
    h: "350px",
    border: "1px solid",
  };

  const boxStylesReal = {
    bgSize: "cover",
    bgPosition: "left",
    h: "350px",
    border: "1px solid",
  };

  const blurBox = {
    boxSize: 'full',
    backdropFilter: "auto",
    backdropBlur: "1px",
    backdropBrightness: "60%",
    textColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
  }

  const section_styling = {
    bg:"white",
    px: "15%",
    fontWeight: "300"
  }

  const h1Style = {
    bg:"white",
    px: "15%",
    fontWeight: "300",
    fontSize:"30",
    letterSpacing: "0.4px",
    pt:"30px",
  }

  const h4Style = {
    bg:"white",
    px: "19%",
    fontWeight: "300",
    fontSize:"20",
    letterSpacing: "0.2px",
    py:"10px",
    textAlign: "center",
    lineHeight: "1.5",
  }

  const pStyle = {
    bg:"white",
    fontWeight: "300",
    fontSize:"20",
    letterSpacing: "0.2px",
    textAlign: "center",
    lineHeight: "1.5",
  }

  const p2Style = {
    bg:"white",
    fontWeight: "300",
    fontSize:"20",
    letterSpacing: "0.2px",
    textAlign: "center",
    lineHeight: "1.5",
  }

  const projectHeader = {
    fontSize: "22",
    fontWeight: "600",
  }

  const projectDesc = {
    fontSize: "12",
    fontWeight: "normal",
  }

  const tag = {
    fontSize: "12",
  }

  const titleEco = "Ecosystem and Terrain Erosion Simulation";
  const descEco = "Ground-up implementation of a ";
  const descEco_end = " on creating realistic landscapes based on simulated weather events, such as erosion due to rainfall, rockslides, and lightning. Landscapes were subsequently rendered in OpenGL."
  const tagsEco = ["Graphics", "OpenGL/Rust", "Simulation"];
  const tagColsEco = ["alt.pink", "alt.orange", "alt2.blue"];

  const titleFem = "Advanced Graphics Projects";
  const descFem = "Research-level projects in C++ for a ";
  const descFem_end = ", Brown's most rigorous CS class. Projects: Ray tracing, Path tracing, FEM siumulation, ARAP modeling, and Mesh subdivision/simplification from scratch!"
  const tagsFem = ["Graphics", "C++", "Research Topics"];
  const tagColsFem = ["alt.pink", "alt2.cyan", "alt2.green"];

  const titleEagle = "Eaglevision";
  const descEagle = "A convolutional neural network trained to identify bird species from 100 options. I designed an architecture that was able to replicate accuracy near to that of a team of Caltech researchers!";
  const tagsEagle = ["Computer Vision", "Python", "Deep Learning"];
  const tagColsEagle = ["alt.yellow", "alt.cyan", "alt.purple"];

  const titleRes = "Research: Neural Radiance Fields";
  const descRes = "As a recipient of Brown's UTRA research award, I participated in Brown's Interactive 3D Vision and Learning Lab, in which I gathered high-quality data for and implemented NeRF view synthesis. ";
  const tagsRes = ["Computer Vision", "Python", "Deep Learning"];
  const tagColsRes = ["alt.yellow", "alt.cyan", "alt.purple"];

  const styleChat = {fontWeight: '600', textColor: 'alt2.green.700', rounded: 'full', px: '1', py: '0', bg: 'alt2.green.100'};

  const poke_params = {borderRadius: "50%"};
  const oren_shift = {right: "3%"};
  const poke_shift = {left: "3%"};
  const clues_shift = {left: "3%"};
  const bpc_shift = {right: "3%"};

  const oren_desc = "Inspired by the classic puzzle Find Satoshi, puzzlers were challenged to use whatever wits and resources they had to chase down Oren, an average Brown Student going about his day!";
  const poke_desc = "Each turn of this Pokemon battle warps the usual rules in some way, and it's your job to figure out how. Show what it really takes to be a Pokemon master: Navigate the mess of ability and move interactions to assert your rules-lawyer dominance!";
  const clues_desc = "Steve, Joe, and Josh have each run into a Blue's clues themed conundrum! Will you be able to gather blue's clues and crack the case?";

  const brown_highlight = {fontWeight: '600', textColor: '#964B00', rounded: 'full', px: '1', py: '0', bg: '#F0E5D2'};
  const red_highlight = {fontWeight: '600', textColor: 'alt.pink.700', rounded: 'full', px: '1', py: '0', bg: 'alt.pink.100'};
  const pink_highlight = {fontWeight: '600', textColor: 'alt2.pink.500', rounded: 'full', px: '1', py: '0', bg: 'alt2.pink.100'};
  const purple_highlight = {fontWeight: '600', textColor: 'alt.purple.700', rounded: 'full', px: '1', py: '0', bg: 'alt.purple.100'};
  const cyan_highlight = {fontWeight: '600', textColor: 'alt.cyan.700', rounded: 'full', px: '1', py: '0', bg: 'alt.cyan.100'};
  const lightblue_highlight = {fontWeight: '600', textColor: 'alt.teal.700', rounded: 'full', px: '1', py: '0', bg: 'alt.teal.100'};
  const orange_highlight = {fontWeight: '600', textColor: 'alt.orange.700', rounded: 'full', px: '1', py: '0', bg: 'alt.orange.100'};
  const yellow_highlight = {fontWeight: '600', textColor: 'alt.yellow.700', rounded: 'full', px: '1', py: '0', bg: 'alt.yellow.100'};

  const navbut = {
    cursor: "pointer",
    font: theme.fonts.body,
    fontWeight: '300'
  };  

  const { isOpen, onToggle } = useDisclosure();

  

  return (
    <ChakraProvider theme={theme}>
      <Navbar cs="alt.pink.300" bg="#FFFFFF" iconColor='alt.pink.100' tc='alt.pink.50' ts={navbut} f={theme.fonts.body}/>

      <Heading as="h1" textAlign="center" sx={h1Style} pt="0px" pb="0px" id='about'>About me</Heading>
      
      <Heading sx={h4Style}>
          <Highlight query="Brown University" styles={brown_highlight}>
            I'm a recent graduate of Brown University Computer Science, and have loved coding since I was a kid.
          </Highlight>
      </Heading>
      <Heading sx={h4Style}>
        <Highlight query="Visual Computing" styles={red_highlight}>
         At Brown, I developed a passion for Visual Computing an</Highlight>
          <Highlight query="AI/ML" styles={purple_highlight}>d AI/ML, which became the focuses of my study. In </Highlight>
          <Highlight query="puzzlehunts" styles={cyan_highlight}>
           my free time, I love creating puzzlehunts, reading fiction in Japanese, cooking for my friends, collecting vinyl, and, more than anything, </Highlight>
          <Highlight query="chatting" styles={styleChat}>chatting!</Highlight>
      </Heading>

      <Heading as="h2" textAlign="center" sx={h1Style} pb="15px" id='projects'>Projects</Heading>
      <SimpleGrid sx={section_styling} columns={[1, null, 2]} spacing={2} pt="10px" pb="30px">

        <ProjectBox 
          img="url(../terrain.png) center" 
          boxStyles={boxStyles} 
          blurBox={blurBox} 
          projectHeader={projectHeader}
          projectDesc={projectDesc}
          tag={tag}
          title={titleEco} 
          desc_s={descEco}
          link="https://dl.acm.org/doi/pdf/10.1145/3072959.3073667"
          desc_link="2017 research paper"
          desc_e={descEco_end}
          tags={tagsEco}
          tagCols={tagColsEco} />

        <ProjectBox img="url(../projects.png)" 
          boxStyles={boxStyles} 
          blurBox={blurBox} 
          projectHeader={projectHeader}
          projectDesc={projectDesc}
          tag={tag}
          title={titleFem} 
          desc_s={descFem}
          link={"https://cs2240.graphics/"}
          desc_link={"year-long graphics course"}
          desc_e={descFem_end}
          tags={tagsFem}
          tagCols={tagColsFem} />

        <ProjectBox img="url(../nerf.png)" 
          boxStyles={boxStyles} 
          blurBox={blurBox} 
          projectHeader={projectHeader}
          projectDesc={projectDesc}
          tag={tag}
          title={titleRes} 
          desc_s={descRes}
          tags={tagsRes}
          tagCols={tagColsRes} />

        <ProjectBox img="url(../eaglevision7.png)" 
          boxStyles={boxStyles} 
          blurBox={blurBox} 
          projectHeader={projectHeader}
          projectDesc={projectDesc}
          tag={tag}
          title={titleEagle} 
          desc_s={descEagle}
          tags={tagsEagle}
          tagCols={tagColsEagle} />
      </SimpleGrid>

      <Heading as="h2" textAlign="center" sx={h1Style} pb="2px" id='puzzle' textDecoration="underline" textDecorationColor="alt.pink.100">
        <a href='https://www.brownpuzzlehunt.com' target='_blank' rel="noopener noreferrer">Brown Puzzlehunt</a>
      </Heading>
      <Text textAlign="center" sx={{h4Style}} fontWeight="300" pb="15px" fontSize="16">
        (Click the icons to read about my puzzles!)</Text>

      <Center>
      <Box sx={section_styling}>
          <Text width="90%" sx={p2Style} px="7%" mb="35px">
            <Highlight query="founded Brown Puzzle Club" styles={cyan_highlight}>
            In my freshman year of college, I founded Brown Puzzle Club with two friends, with the ultimate
            goal of creating a puzzlehunt for Brown's campus. Puzzlehunts are team events in which participants so
            </Highlight>
            <PopUpIcon img="try1.png" title="Showdown!" other={poke_params} 
            float="right" shift={poke_shift} place="left" font={theme.fonts.alt}
            intitle="Showdown!" desc={poke_desc} diff="Difficulty: Hard" diffCol="alt.pink.400"
            link="https://www.brownpuzzlehunt.com/minorcase/showdown"/>
            lve logic puzzles like the ones you might find in an escape room, where subject matter and puzzle mechanics are only limited by the creativity of the puzzle writer! I'
            <PopUpIcon img="frame3.png" title="Find Oren" shift={oren_shift} 
            intitle="Find Oren" desc={oren_desc} float="left" place="right" diff="Difficulty: Medium" diffCol="alt.yellow.400"
            font={theme.fonts.alt} link="https://2023.brownpuzzlehunt.com/puzzle/find-oren"/>
            <Highlight query="Brown Puzzlehunt" styles={brown_highlight}>
            m proud to say we fully realized our goal, hosting Brown Puzzlehunt
            </Highlight>
            <Highlight query="290 teams" styles={red_highlight}>
            for 290 teams this past spring 
            </Highlight>
            <Highlight query="Event of the Year" styles={styleChat}>
            , and winning Brown's award for the Event of the Year 
            </Highlight> 
            ! I served as co-head of puzzle writin
            <Highlight query={["managed a team of 20 writers"]} styles={purple_highlight}>
            g, managed a team of 20 writers, served as their mentor, and p
            </Highlight>
            ut endless hours into dreaming up and realizing the hunt's creative vision.
            Thi
            <Highlight query={["creativity"]} styles={yellow_highlight}>
            s creativity is why I love puzzles: In solving a puzzle, you find yourself doing everythin
            </Highlight>
            <PopUpIcon img="clues1.png" title="Blue's Clues" float="right" 
            intitle="Themed Round: Blue's Clues" desc={clues_desc} diff="Difficulty: Easy" diffCol="alt2.green.500"
            shift={clues_shift} place="left"
            font={theme.fonts.alt} link="https://www.brownpuzzlehunt.com/minorcase/blues-clues"/>
            g from searching obscure corners of the Blue's Clues wiki to solving complex Pokemon rule interactions 
            to hunting down a single man in a sea of Brown students. The hunt and club are easily
            <PopUpIcon2 img="bph.png" title="...and many more!" 
            intitle="Other Puzzles!"
            float="left" shift={bpc_shift} place="right"
            font={theme.fonts.alt}/>
            <Highlight query={"proudest accomplishments"} styles={lightblue_highlight}>
            some of my proudest accomplishments, embodying these ideals and carryin
            </Highlight>
            g them into the puzzlehunt community as a whole. More than just another competition to prove who's the smartest
            or can grind the hardest, our hunt, in my mind, served as a thesis on how the best hunt experience i
            <Highlight query={["inclusive", "eclectic", "prioritizes a hunter's experience"]} styles={orange_highlight}>
            s inclusive, eclectic, and prioritizes a hunter's experience above all els 
            </Highlight>
            e. <p>I truly believe that our team of writers, wonderfully diverse in interests and background, represent the future of puzzlehunts. 
            If you want to learn more, please read about our events, marvel at the art, and take a crack at some of the puzzles at </p>
              <a href='http://www.brownpuzzlehunt.com'
              target='_blank' rel="noopener noreferrer">
              <Highlight query={"www.brownpuzzlehunt.com"} styles={pink_highlight}>
              www.brownpuzzlehunt.com
              </Highlight>
              </a>!

            {/* <PopUpIcon img="try1.png" title="Showdown!" other={poke_params}/> */}
          {/* <PopUpIcon img="frame3.png" title="Find Oren"/>
          <PopUpIcon img="clues1.png" title="Blues Clues"/>
          <PopUpIcon img="bpc.png" title="...and many more!"/> */}
          </Text>
      </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
