import { useMutation } from '@apollo/client';
import { UserContext } from 'context/UserContext';
import { CREATE_STORY } from 'gql/mutations/story';
import { UPLOAD_FILE } from 'gql/mutations/upload';
import { Router, useRouter } from 'next/router';
import { ChangeEvent, Dispatch, useContext, useState } from 'react';
import fileSize from 'utils/fileSize';
import { refreshData } from 'utils/refreshProps';

export const useHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((perval) => !perval);
  };

  return {
    val: { showModal },
    set: { setShowModal },
    on: { handleModal },
  };
};

export const useUpload = (closeModalSetState: Dispatch<boolean>) => {
  const [imageName, setImageName] = useState('');
  const [isStepOne, setIsStepOne] = useState(true);
  const [isStepTwo, setIsStepTwo] = useState(false);
  const [showSnack, setShowSnack] = useState({ message: '', show: false });
  const router = useRouter();

  const user = useContext(UserContext);

  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => {
      setImageName(data.uploadFile);
      setIsStepOne(false);
      setIsStepTwo(true);
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

  const [createStory] = useMutation(CREATE_STORY, {
    variables: {
      stories: imageName,
      userId: user.id,
    },
    onCompleted: (data) => {
      closeModalSetState(false);
      setImageName('');
      router.replace(router.asPath);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const handleCreateStory = () => {
    createStory();
  };

  const handleUploadInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    const sizeOfFile = fileSize(file.size!);

    if (sizeOfFile > 4) {
      setShowSnack({ message: 'File is too Large', show: true });
      return;
    }

    uploadFile({ variables: { file } });
  };

  const handleBackToStepOne = () => {
    setIsStepOne(true);
    setIsStepTwo(false);
  };

  return {
    val: {
      showSnack,
      isStepOne,
      isStepTwo,
      imageName,
    },
    on: {
      handleUploadInputChange,
      handleBackToStepOne,
      handleCreateStory,
    },
  };
};
