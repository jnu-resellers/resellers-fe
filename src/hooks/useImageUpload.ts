import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { getPresignedUrl, putImageToS3 } from '../apis/aws';

const getFileExtension = (file: File) => {
  const { name } = file;
  return name.split('.')[1];
};

const handleUpload = async (
  file: File,
  setFileNameList: Dispatch<SetStateAction<string[]>>
) => {
  const extension = getFileExtension(file);
  const presignedBody = await getPresignedUrl(extension);
  try {
    await putImageToS3(presignedBody.presignedUrl, file, extension);
    const url = new URL(presignedBody.presignedUrl);
    const fileName = url.pathname.slice(1);
    setFileNameList((prev) => [...prev, fileName]);
  } catch (e) {
    alert('이미지 업로드에 실패하였습니다. 잠시 후 다시 시도 해보세요.');
  }
};

const useImageUpload = () => {
  const [fileNameList, setFileNameList] = useState<string[]>([]);

  const onUploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    handleUpload(file, setFileNameList);
  };

  return { onUploadFile, fileNameList };
};

export default useImageUpload;
