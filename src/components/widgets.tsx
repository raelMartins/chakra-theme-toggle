'use client';

import {
  Box,
  Button,
  Center,
  Collapse,
  Container,
  Flex,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { dim_theme } from '@/theme';
import { MyThemeContext } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const [toggleWidth, setToggleWidth] = useState('15rem');
  const { isOpen, onToggle } = useDisclosure();
  const [activeTheme, setactiveThemeName] = useState('');
  const { changeTheme } = useContext(MyThemeContext);

  const handleShow = () => {
    if (isOpen) {
      // onToggle();
      // setTimeout(() => {
      setToggleWidth('15rem');
      // setBoxWidth('20rem');
      // }, 500);
    } else {
      setToggleWidth('20rem');
      // setBoxWidth('20rem');
      // setTimeout(() => {
      // onToggle();
      // }, 1000);
    }
    onToggle();
  };
  const selectTheme = (theme: string) => {
    setactiveThemeName(theme);
    changeTheme(theme);
    handleShow();
  };

  return (
    <>
      <Center
        flexDirection={'column'}
        transition={'.5s'}
        // boxShadow={ 'xl'}
        boxShadow={'var(--basic-box-shadow)'}
        // borderRadius={'1rem'}
        borderRadius={'50%'}
        p='1rem'
        // maxW='max-content'
        // w='100%'
        w={isOpen ? '37rem' : '18rem'}
        h={isOpen ? '37rem' : '18rem'}
        maxH={'100%'}
        bg='secondary'
        // maxW={toggleWidth}
      >
        <Button
          onClick={handleShow}
          // w={toggleWidth}
          transition={'.5s'}
          bg='transparent'
          p={isOpen ? '2rem' : '5.5rem 4rem'}
          _hover={{ backgroundColor: 'transparent' }}
        >
          <Text
            transition={'.5s'}
            scale={isOpen ? '1.5' : '1'}
            fontSize={'1.6rem'}
            textTransform={'capitalize'}
            color='text'
          >
            {!activeTheme ? 'Theme' : activeTheme.split('_').join(' ')}
          </Text>
        </Button>
        <Flex
          mt={'1rem'}
          direction={'column'}
          w={toggleWidth}
          minH={isOpen ? '20rem' : '0rem'}
          transition={'.5s'}
        >
          <Collapse
            in={isOpen}
            animateOpacity
            transition={{
              exit: { duration: 0.5 },
              enter: { delay: 0.5, duration: 0.5 }
            }}
          >
            <Flex direction={'column'} transition={'.5s'} gap={'1rem'}>
              <Button
                p='2rem'
                bg='button_bg'
                color='button_text'
                _hover={{ backgroundColor: 'inherit' }}
                fontSize={'1.6rem'}
                onClick={() => selectTheme('light')}
              >
                Light
              </Button>
              <Button
                p='2rem'
                bg='button_bg'
                color='button_text'
                _hover={{ backgroundColor: 'inherit' }}
                fontSize={'1.6rem'}
                onClick={() => selectTheme('dim')}
              >
                Dim
              </Button>
              <Button
                p='2rem'
                bg='button_bg'
                color='button_text'
                _hover={{ backgroundColor: 'inherit' }}
                fontSize={'1.6rem'}
                onClick={() => selectTheme('dark')}
              >
                Dark
              </Button>
              <Button
                p='2rem'
                bg='button_bg'
                color='button_text'
                _hover={{ backgroundColor: 'inherit' }}
                fontSize={'1.6rem'}
                onClick={() => selectTheme(`lights_out`)}
              >
                Lights Out
              </Button>
            </Flex>
          </Collapse>
        </Flex>
      </Center>
    </>
  );
};
