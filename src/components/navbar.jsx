import { Flex, Box, Spacer, Heading, Button, HStack, Text, Image, keyframes, Icon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { FaCat } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const spin = keyframes`  
  from {transform: rotate(180deg);}   
  to {transform: rotate(540deg)} 
  `;

export default function navbar(props) {
  const spinAnimation = `${spin} infinite 1s linear`;

  return (
    <Flex bg={props.bg} as="nav" alignItems="center" py="20px" px='15%'>
      <HStack spacing="5px">
        <Icon as={FaCat} boxSize="9" color={props.iconColor}/>
        <Heading pl="10px" colorScheme={props.cs} fontSize="45px" fontWeight="300">Ian Rider</Heading>
      </HStack>

        {/* <VStack>
        <Spacer></Spacer>
        <Text fontSize="20" sx={props.ts} ml="75%">Resume</Text>
        </VStack> */}

        <Spacer />

        <VStack>
        <Spacer />
        <HStack spacing="20px" fontSize="20">
        <Text sx={props.ts} _hover={{textDecoration: "underline", textDecorationColor:props.iconColor}}>
          <a href="#about">
            <Icon as={IoMdDocument} position="relative" top="3px" right="3px"></Icon>
            Resume
          </a>
        </Text>
        <Text sx={props.ts} _hover={{textDecoration: "underline", textDecorationColor:props.iconColor}}>
          <Icon as={FaLinkedin} position="relative" top="3px" right="3px"></Icon>
          <a href="#projects">LinkedIn</a>
        </Text>
        <Text sx={props.ts} _hover={{textDecoration: "underline", textDecorationColor:props.iconColor}}>
          <a href="#puzzle">
          <Icon as={FaGithub} position="relative" top="3px" right="3px"></Icon>
          Github</a>
        </Text>
        </HStack>
        </VStack>
    </Flex>
  )
}
