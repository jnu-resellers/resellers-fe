import { Box, Icon, Text } from '@chakra-ui/react';
import styled from 'styled-components';

const IconTextLink = ({ icon, text, onClick, mb }) => (
  <ClickableBox onClick={onClick} mb={mb}>
    <Icon as={icon} w={6} h={6} mr={4} />
    <Text fontSize="xl" fontWeight="bold">
      {text}
    </Text>
  </ClickableBox>
);

const ClickableBox = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default IconTextLink;
