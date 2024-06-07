import { AccordionButton, AccordionIcon, Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface AuctionAccordionHeaderProps extends PropsWithChildren {
  title: string;
}

const AuctionAccordionHeader = ({ title }: AuctionAccordionHeaderProps) => {
  return (
    <AccordionButton>
      <Text fontSize="x-large" fontWeight="600" flex="1" textAlign="left">
        {title}
      </Text>
      <AccordionIcon />
    </AccordionButton>
  );
};

export default AuctionAccordionHeader;
