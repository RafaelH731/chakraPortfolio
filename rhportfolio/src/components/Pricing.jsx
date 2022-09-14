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
          mt='-40'
          borderRadius='xl'
          overflow='hidden'
          boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
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
                ZenTen
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
                Fourth Project
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
        </Box>


      </Box>
    );
  }