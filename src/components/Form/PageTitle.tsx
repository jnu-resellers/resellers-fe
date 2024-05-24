import { Box, Heading } from '@chakra-ui/react';
import styled from 'styled-components';

interface PageTitleProps {
  title: string;
}
const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <>
      <Box w="100%" mb={9}>
        <Heading as="h2" size="xl">
          {title}
        </Heading>
      </Box>
      <TitleDivider />
    </>
  );
};

const TitleDivider = styled.hr`
  width: 100%;
  border-top: 3px solid #333;
`;

export default PageTitle;
