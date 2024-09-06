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
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Confirmation!</PopoverHeader>
                <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            </PopoverContent>
        </Popover>
  
      )
  }