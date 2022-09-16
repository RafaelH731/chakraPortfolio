import { Box, HStack, Icon, Stack, StackProps, Text, Button } from '@chakra-ui/react';
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
    <Box maxW='1024px' m='auto' pt='60px' pb='8' as='section'>
      <Stack
        direction={['column', 'column', 'row']}
        spacing={400}
      >
        <Button colorScheme='blue'>GitHub</Button>
        <Button colorScheme='blue'>LinkedIn</Button>
        <Button colorScheme='blue'>Resume</Button>
      </Stack>
    </Box>
  );
}

<Button colorScheme='blue'>Button</Button>