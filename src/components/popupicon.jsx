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

export default function PopUpIcon(props) {
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
            <PopoverContent bg='#E6E6E6' textColor="black" borderColor="black">
                <PopoverArrow bg='#E6E6E6' />
                <PopoverCloseButton />
                <PopoverBody>
                <Text textDecoration="underline" textDecorationColor="alt.pink.200"><a href={props.link} target='_blank' rel="noopener noreferrer">{props.intitle} </a></Text>
                    <Center>
                    <HStack spacing="5px" pb="3px">
                        <Text fontSize="14">{props.diff}</Text> 
                        <Box style={{height: "7px", width: "7px", borderRadius: "50%", border: "solid 1px black"}} background={props.diffCol}/>
                    </HStack>
                    </Center>
                    <Text fontSize="18">
                        {props.desc}
                    </Text>
                </PopoverBody>
            </PopoverContent>
        </Popover>
  
      )
  }