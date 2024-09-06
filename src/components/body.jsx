import { Box, Flex, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

export default function body() {
  return (
    <Flex bg="alt.gray.100" px="15%">
        <VStack spacing="2px">
            <HStack spacing="2px">
                {/* <Box sx={boxStyles}>Project 1</Box>
                <Box sx={boxStyles}>Project 2</Box> */}
            </HStack>

            <HStack spacing="2px">
                {/* <Box sx={boxStyles}>Project 1</Box>
                <Box sx={boxStyles}>Project 2</Box> */}
            </HStack>
        </VStack>
      </Flex>
  )
}
