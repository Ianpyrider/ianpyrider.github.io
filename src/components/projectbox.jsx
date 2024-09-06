import React from 'react'
import { Box, HStack, Text, Badge, VStack, useDisclosure, Collapse } from '@chakra-ui/react'

export default function ProjectBox(props) {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <Box background={props.img} sx={props.boxStyles} onMouseEnter={onOpen} onMouseLeave={onClose}>
          <Box sx={props.blurBox}>
            <VStack px="10%" py="5px">
            <Text sx={props.projectHeader}>
              {props.title}
            </Text>
            <Collapse in={isOpen} transition={{ exit: { duration: 0.3}, enter: { duration: 0.3 } }} startingHeight={0}
            endingHeight={55} animateOpacity>
            <Box>
              <Text sx={props.projectDesc}>
                {props.desc_s} 
                <a href={props.link} target='_blank' rel="noopener noreferrer" style={{textDecoration: "underline"}}>
                  {props.desc_link}
                </a> 
                {props.desc_e}
              </Text>
            </Box>
            </Collapse>
            <VStack spacing="2px">
            <HStack py="5px">
              <Badge sx={props.tag} colorScheme={props.tagCols[0]}>
                {props.tags[0]}
              </Badge>
              <Badge sx={props.tag} colorScheme={props.tagCols[1]}>
                {props.tags[1]}
              </Badge>
            </HStack>
            <Badge sx={props.tag} colorScheme={props.tagCols[2]}>
                {props.tags[2]}
            </Badge>
            </VStack>
            </VStack>
            </Box>
        </Box>
  )
}
