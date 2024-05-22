import { Image } from '@chakra-ui/react';
import { generateImgCloudFrontUrl } from '../../utils/url';

interface UploadImgListProps {
  fileList: string[];
}

const UploadImgList = ({ fileList }: UploadImgListProps) => {
  return (
    <>
      {fileList.map((fileName) => (
        <Image
          w="150px"
          h="200px"
          src={generateImgCloudFrontUrl(fileName)}
          key={fileName}
        />
      ))}
    </>
  );
};

export default UploadImgList;
