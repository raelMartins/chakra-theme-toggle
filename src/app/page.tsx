'use client';

import {
  Box,
  Button,
  Center,
  Collapse,
  Container,
  Heading,
  VStack,
  useDisclosure
} from '@chakra-ui/react';
import styles from './page.module.scss';
import { useState } from 'react';
import { ThemeToggle } from '../components/widgets';

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();
  const [currentTheme, setCurrentTheme] = useState('');

  return (
    <VStack
      w='100%'
      minH='100vh'
      gap='1rem'
      align={'center'}
      justifyContent={'center'}
      bg='primary'
      transition={'.5s'}
    >
      <Container
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        boxShadow={'sm'}
        borderRadius={'.4rem'}
        p='2rem'
        textAlign={'center'}
        h='20rem'
        // bg='#F5f5f5'
        bg='secondary'
        overflow={'hidden'}
        position={'relative'}
      >
        <Box
          position={'absolute'}
          top={'0'}
          left='0'
          right={'0'}
          bottom={'0'}
          bg='tertiary'
          w='200%'
          h='200%'
          transform={'translateX(-45%) translatey(-45%) rotate(-30deg)'}
          // rotate={'-30deg'}
        ></Box>
        <Center zIndex={'1'}>
          <Heading color='text'>This is sample text</Heading>
        </Center>
      </Container>
      <ThemeToggle />
    </VStack>
  );
}
