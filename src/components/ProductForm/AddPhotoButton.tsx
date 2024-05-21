import { IconButton, theme } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import useImageUpload from '../../hooks/useImageUpload';
const AddPhotoButton = () => {
  const { onUploadFile } = useImageUpload();
  return (
    <div>
      <input onChange={onUploadFile} type="file" />
      <IconButton
        aria-label="add photo"
        backgroundColor={theme.colors.blackAlpha[200]}
        w="150px"
        h="200px"
        icon={<AddIcon color={theme.colors.white} w={10} />}
      />
    </div>
  );
};

export default AddPhotoButton;
