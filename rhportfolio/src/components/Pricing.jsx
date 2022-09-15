import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Icon,
    Stack,
    StackProps,
    Text,
    Image
  } from '@chakra-ui/react';
  import { CheckIcon } from '../icons/Icons';

  import ThoughtsForShots from '../assets/thoughtsforshots-screenshot.png'
  import Dotify from '../assets/dotify-screenshot.png'
  import teamScreenshot from '../assets/team-screenshot.png'
  import zenten from '../assets/zenten.png'
  export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
      <HStack as='li' spacing='5' {...rest} align='flex-start'>
        <Icon as={CheckIcon} w='22px' h='22px' flexShrink={0} />
        <Text textAlign='left'>{children}</Text>
      </HStack>
    );
  };
  
  export function Pricing() {
    return (
      <Box mx='6' as='section'>
        <Box
          maxW='994px'
          margin='auto'
          mt='-160'
          borderRadius='xl'
          overflow='hidden'
          boxShadow='dark-lg'
          textAlign='center'
        >
          <Flex direction={['column', 'column', 'row']}>
            <Box bg='#F0EAFB' p={['28px', '6opx', '60px']}>
              <Text fontSize='xl' fontWeight='extrabold'>
                Thoughts For Shots
              </Text>
              
              <Stack direction='row'>
  
  <Image boxSize='250px' ml="15px" src={ThoughtsForShots} alt='Dan Abramov' >
    
  </Image>
</Stack>

              <Button
                colorScheme='purple'
                size='lg'
                w={['auto', '282px', '282px']}
                mt='6'
              >
                View Here
              </Button>
            </Box>
            <Box p={['32px', '32px', '60px']} fontSize='lg' bg='white'>
              <Text textAlign='left'>
                Thoughts for shots is a social media concept that allows users to create an account and post a thought. Their thoughts can be seen by their friends, those users can then buy their friends a "shot" for their "thoughts"
              </Text>
              <Stack as='ul' spacing='5' pt='6'>
                <ListItem>Chakra UI Framework</ListItem>
                <ListItem>MERN</ListItem>
                <ListItem>Github</ListItem>
                <ListItem>Slack</ListItem>
              </Stack>
            </Box>
          </Flex>

          <Flex direction={['column', 'column', 'row']}>
            <Box bg='#F0EAFB' p={['28px', '6opx', '60px']}>
              <Text fontSize='xl' fontWeight='extrabold'>
                Dotify
              </Text>
              
              <Stack direction='row'>
  
  <Image boxSize='250px' ml="15px" src={Dotify} alt='Dan Abramov' >
    
  </Image>
</Stack>

              <Button
                colorScheme='purple'
                size='lg'
                w={['auto', '282px', '282px']}
                mt='6'
              >
                View Here
              </Button>
            </Box>
            <Box p={['32px', '32px', '60px']} fontSize='lg' bg='white'>
              <Text textAlign='left'>
                Dotify is an appplication that allows users to create a profile in order to take a music questionnaire. Application allows user to select two options and will route to a page to a song that matches the selection chosen
              </Text>
              <Stack as='ul' spacing='5' pt='6'>
                <ListItem>CSS</ListItem>
                <ListItem>SQL</ListItem>
                <ListItem>Github</ListItem>
                <ListItem>Slack</ListItem>
              </Stack>
            </Box>
          </Flex>
          <Flex direction={['column', 'column', 'row']}>
            <Box bg='#F0EAFB' p={['28px', '6opx', '60px']}>
              <Text fontSize='xl' fontWeight='extrabold'>
                Team Generator
              </Text>
              
              <Stack direction='row'>
  
  <Image boxSize='250px' ml="15px" src={teamScreenshot} alt='Dan Abramov' >
    
  </Image>
</Stack>

              <Button
                colorScheme='purple'
                size='lg'
                w={['auto', '282px', '282px']}
                mt='6'
              >
                View Here
              </Button>
            </Box>
            <Box p={['32px', '32px', '60px']} fontSize='lg' bg='white'>
              <Text textAlign='left'>
                This application is a team builder website. It uses the terminal to prompt questions to the user to build a team. Once all the inputs have been collected, an html page will be created and show on the webpage. 
              </Text>
              <Stack as='ul' spacing='5' pt='6'>
                <ListItem>BootStrap</ListItem>
                <ListItem>SQL</ListItem>
                <ListItem>Github</ListItem>
                <ListItem>Slack</ListItem>
              </Stack>
            </Box>
          </Flex>
          <Flex direction={['column', 'column', 'row']}>
            <Box bg='#F0EAFB' p={['28px', '6opx', '60px']}>
              <Text fontSize='xl' fontWeight='extrabold'>
                Zenten
              </Text>
              
              <Stack direction='row'>
  
  <Image boxSize='250px' ml="15px" src={zenten} alt='Dan Abramov' >
    
  </Image>
</Stack>

              <Button
                colorScheme='purple'
                size='lg'
                w={['auto', '282px', '282px']}
                mt='6'
              >
                View Here
              </Button>
            </Box>
            <Box p={['32px', '32px', '60px']} fontSize='lg' bg='white'>
              <Text textAlign='left'>
                Thoughts for shots is a social media concept that allows users to create an account and post a thought. Their thoughts can be seen by their friends, those users can then buy their friends a "shot" for their "thoughts"
              </Text>
              <Stack as='ul' spacing='5' pt='6'>
                <ListItem>Chakra UI Framework</ListItem>
                <ListItem>MERN</ListItem>
                <ListItem>Github</ListItem>
                <ListItem>Slack</ListItem>
              </Stack>
            </Box>
          </Flex>
        </Box>


      </Box>
    );
  }