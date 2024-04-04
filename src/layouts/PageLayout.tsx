import { Center } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
/** break point
 * base: "0em",0px
 * sm: "30em", ~480px. em is a relative unit and is dependant on the font size.
 * md: "48em", ~768px
 * lg: "62em", ~992px
 * xl: "80em", ~1280px
 * "2xl": "96em", ~1536px
 */
interface PageLayoutProps extends PropsWithChildren {}

const PageLayout = ({ children }: PageLayoutProps) => {
  return <Center w="100%">{children}</Center>;
};

export default PageLayout;
