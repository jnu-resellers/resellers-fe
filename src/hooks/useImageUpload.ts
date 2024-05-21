import axios from 'axios';
import { ChangeEvent } from 'react';

const imgUploadAxiosInstance = axios.create({
  baseURL: 'https://3lzbbxqufh.execute-api.ap-northeast-2.amazonaws.com',
});

const getPresignedUrl = async (extension: string) => {
  const response = await imgUploadAxiosInstance.get(
    `/default/presignedUrlUpload?extension=${extension}`,
    {
      headers: {
        'Content-Type': `application/${extension}`,
      },
    }
  );
  return response.data as { presignedUrl: string };
};

const putImageToS3 = async (
  presignedUrl: string,
  file: File,
  extension: string
) => {
  return await imgUploadAxiosInstance.put(presignedUrl, file, {
    headers: {
      'Content-Type': `application/${extension}`,
    },
  });
};

const handleUpload = async (extension: string, file: File) => {
  const presignedBody = await getPresignedUrl(extension);
  putImageToS3(presignedBody.presignedUrl, file, extension);
};

const useImageUpload = () => {
  const onUploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    // 1. 파일의 확장자를 읽는다.
    console.log(file.name);
    const { name } = file;
    const extension = name.split('.')[1];
    // 2. put을 위한 presigned URL을 받아온다.
    handleUpload(extension, file);
  };

  return { onUploadFile };
};

export default useImageUpload;
