import { Box, Heading, Text } from '@chakra-ui/react';

export function Header() {
  return (
    <Box
      as='section'
      color='gray.50'
      bg='purple.600'
      pt={['60px', '60px', '90px']}
      pb='198px'
      px='8'
      textAlign={['left', 'left', 'center']}
    >
      <Heading fontWeight='extrabold' fontSize={['3xl', '3xl', '5xl']}>
       Welcome
      </Heading>
      <Text fontWeight='medium' fontSize={['lg', 'lg', '2xl']} pt='4'>
        My name is Rafael Herrera, a junior software engineer. I have completed a software bootcamp through the University Of Washington. I am educated both in front-end and back-end with a focus on front-end. 
      </Text>
    </Box>
  );
}