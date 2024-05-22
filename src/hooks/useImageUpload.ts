import { ChangeEvent } from 'react';
import { getPresignedUrl, putImageToS3 } from '../apis/aws';

const getFileExtension = (file: File) => {
  const { name } = file;
  return name.split('.')[1];
};

const handleUpload = async (file: File) => {
  const extension = getFileExtension(file);
  const presignedBody = await getPresignedUrl(extension);
  putImageToS3(presignedBody.presignedUrl, file, extension);
};

const useImageUpload = () => {
  const onUploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    handleUpload(file);
  };

  return { onUploadFile };
};

export default useImageUpload;
