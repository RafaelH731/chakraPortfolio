import { Box, HStack, Flex, Stack, StackProps, Text, Button, Link, Center, Spacer } from '@chakra-ui/react';
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from '../icons/Icons';

interface FeatureProps extends StackProps {
  button: React.ElementType;
}

function Feature(props: FeatureProps) {
  const { button, children, ...rest } = props;
  return (
    <HStack {...rest} spacing='6' align='start'>
      <Button as={button} boxSize={['8', '8', '12']} />
      <Text textAlign='left' fontSize='lg' fontWeight='bold'>
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box as='section'
      color='gray.50'
      bg='#2B4F71'
      pt={['60px', '60px', '90px']}
      pb='70px'
      px='8'
      textAlign={['left', 'left', 'center']}>
      <Stack>
        <Center>
          <HStack spacing='72px' >
            <Link href='https://www.linkedin.com/in/rafael-herrera-016006238/' isExternal>
              LinkedIn
            </Link>
            <Spacer />
            <Link href='https://github.com/RafaelH731' isExternal>
              GitHub
            </Link>
            <Spacer />
            <Link href='https://docs.google.com/document/d/1Z4YHarDsZbOfJWHWgsRKyX4VroBQBrU2YK8kSFhSLwQ/edit?usp=sharing' isExternal>
              Resume
            </Link>
            <Spacer />
          </HStack>
        </Center>
      </Stack>
    </Box>
  );
}

<Button colorScheme='blue'>Button</Button>