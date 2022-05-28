import { useMutation } from '@apollo/client';
import { UserContext } from 'context/UserContext';
import { UPDATE_PROFILE } from 'gql/mutations/profile';
import { UPLOAD_FILE } from 'gql/mutations/upload';
import { useRouter } from 'next/router';
import { ChangeEvent, Dispatch, useContext, useState } from 'react';
import fileSize from 'utils/fileSize';

export const useUpload = () => {
  const [imageName, setImageName] = useState('');

  const [showSnack, setShowSnack] = useState({ message: '', show: false });

  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => {
      setImageName(data.uploadFile);
    },
    onError: (e) => {
      let msg: string = '';
      if (e.message.includes(':')) {
        msg = e.message.split(':')[1].replace(/"/g, '');
      } else if (e.message.includes('byte')) {
        msg = 'File is too large';
      } else {
        msg = e.message;
      }

      setShowSnack({ message: msg, show: true });
    },
  });

  const handleUploadInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    const sizeOfFile = fileSize(file.size!);

    if (sizeOfFile > 4) {
      setShowSnack({ message: 'File is too Large', show: true });
      return;
    }

    uploadFile({ variables: { file } });
  };

  return {
    get: { imageName, showSnack },
    set: { setImageName },
    on: { handleUploadInputChange },
  };
};
