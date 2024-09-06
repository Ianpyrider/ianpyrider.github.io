import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, Box, keyframes} from '@chakra-ui/react'
import { Provider, Carousel, LeftButton, RightButton } from 'chakra-ui-carousel'

const backgrounds = ["url(../cowsubdivide.png)", "url(../eaglevision7.png)"]

export default function CarouselContainer(props) {
  return (

    <Box>
      <Provider>
        <Carousel gap={50}>// Carousel content</Carousel>
        <LeftButton />
        <RightButton />
      </Provider>
    </Box>

    )
}