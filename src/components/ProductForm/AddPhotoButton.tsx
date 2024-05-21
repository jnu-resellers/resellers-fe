import { IconButton, theme } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
const AddPhotoButton = () => {
  return (
    <IconButton
      aria-label="add photo"
      backgroundColor={theme.colors.blackAlpha[200]}
      w="150px"
      h="200px"
      icon={<AddIcon color={theme.colors.white} w={10} />}
    />
  );
};

export default AddPhotoButton;
