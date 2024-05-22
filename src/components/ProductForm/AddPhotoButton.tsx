import { Flex, theme } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { ChangeEvent } from 'react';

interface AddPhotoButtonProps {
  onUploadFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
const AddPhotoButton = ({ onUploadFile }: AddPhotoButtonProps) => {
  return (
    <div>
      <input
        onChange={onUploadFile}
        type="file"
        id="imageUploadInput"
        style={{ display: 'none' }}
        accept="image/png, image/jpeg, image/jpg"
      />
      <label htmlFor="imageUploadInput">
        <Flex
          backgroundColor={theme.colors.blackAlpha[200]}
          justify="center"
          align="center"
          w="150px"
          h="200px"
        >
          <AddIcon color={theme.colors.white} w={10} />
        </Flex>
      </label>
    </div>
  );
};

export default AddPhotoButton;
