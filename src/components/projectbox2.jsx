import React from 'react'
import { Box, HStack, Text, Badge, VStack } from '@chakra-ui/react'

export default function projectbox2(props) {
  return (
    <Box background={props.img} sx={props.boxStyles}>
          <Box sx={props.blurBox}>
            <VStack px="10%" py="5px">
            <Text sx={props.projectHeader}>
              {props.title}
            </Text>
            <Text sx={props.projectDesc}>
              {props.desc}
            </Text>
            <HStack py="5px">
              <Badge sx={props.tag} colorScheme={props.tagCols[0]}>
                {props.tags[0]}
              </Badge>
              <Badge sx={props.tag} colorScheme={props.tagCols[1]}>
                {props.tags[1]}
              </Badge>
            </HStack>
            </VStack>
            </Box>
        </Box>
  )
}
