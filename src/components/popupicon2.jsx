import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Image,
    Center,
    VStack,
    Text,
    Box,
    HStack,
    Link
  } from '@chakra-ui/react'


export default function PopUpIcon2(props) {
    return (
  
        <Popover placement={props.place}>
                <VStack float={props.float} width="20%" 
                padding="3px" spacing={0} position="relative" sx={props.shift} top="6px">
                
                <PopoverTrigger>
                <Image
                    cursor="pointer"
                    fit="cover"
                    _hover={{filter: "drop-shadow(0 0 1.0rem #F990A9)"}}
                    src={props.img}
                    alt="Image failed to load!"
                    sx={props.other}
                    pb="2px"
                    background=""
                />
                </PopoverTrigger>
                
                <Text cursor="default" lineHeight="1.2" fontFamily={props.font} fontSize="22">
                    {props.title}
                </Text>
                </VStack>
            <PopoverContent bg='#E6E6E6' borderColor="black">
                <PopoverArrow bg='#E6E6E6' />
                <PopoverCloseButton />
                <PopoverBody>
                    <Text>{props.intitle}</Text>
                    <Center>
                    <HStack spacing="5px">
                        <Text fontSize="14">{props.diff}</Text> 
                    </HStack>
                    </Center>
                    <Text fontSize="18">
                        Feel free to check out my other puzzles about <Link 
                        href="https://2023.brownpuzzlehunt.com/puzzle/modern-tetris" target='_blank' rel="noopener noreferrer" textColor="blue">Tetris</Link>, <Link 
                        href="https://2023.brownpuzzlehunt.com/puzzle/remixers" target='_blank' rel="noopener noreferrer" textColor="blue">Mixed Drinks</Link>, <Link 
                        href="https://www.peaph-archive.com/puzzles-by-year/2020/Summer%20Rabble%20Hunt/Meta%202/2.1-p.pdf" target='_blank' rel="noopener noreferrer" textColor="blue">Dungeons and Dragons</Link>, and <Link 
                        href="https://www.peaph-archive.com/puzzles-by-year/2020/Summer%20Rabble%20Hunt/Meta%203/3.2-p.pdf" target='_blank' rel="noopener noreferrer" textColor="blue">The Important Videos Playlist</Link>! 
                        I'm also particularly passionate about creating live events for my puzzlehunts: Most recently, for our 
                        murder mystery themed hunt, I created an event that had teams become interrogators tasked with getting information
                        from a man who was seemingly an amnesiac claiming to be the murder victim!   
                    </Text>
                </PopoverBody>
            </PopoverContent>
        </Popover>
  
      )
  }