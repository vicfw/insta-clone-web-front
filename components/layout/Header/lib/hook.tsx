import { useMutation, useQuery } from '@apollo/client';
import { UserContext } from 'context/UserContext';
import { CREATE_STORY } from 'gql/mutations/story';
import { UPLOAD_FILE } from 'gql/mutations/upload';
import { SEARCH_USER } from 'gql/query/searchUser';
import { useRouter } from 'next/router';
import { ChangeEvent, Dispatch, useContext, useEffect, useState } from 'react';
import fileSize from 'utils/fileSize';
import * as Type from './types';
export const useHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<Type.SearchResultType[]>([
    { id: 0, imagePath: '', name: '', username: '' },
  ]);

  const { state: user } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    if (!searchQuery) {
      setSearchResult([]);
    }
  }, [searchQuery]);

  const { loading, data } = useQuery(SEARCH_USER, {
    onCompleted: (response) => {
      const transformedData = response.searchByUsername.map((user: any) => {
        return {
          id: user.id,
          imagePath: user.profile.profile_pic,
          name: user.profile.name,
          username: user.username,
        };
      });

      setSearchResult(transformedData);
    },
    variables: { username: searchQuery },
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClickMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleModal = () => {
    setShowModal((perval) => !perval);
  };

  const pushToHomePage = () => {
    router.push('/');
  };

  return {
    val: { showModal, user, openMenu, anchorEl, searchResult },
    set: { setShowModal },
    on: {
      handleModal,
      handleClickMenu,
      handleCloseMenu,
      pushToHomePage,
      handleSearch,
    },
  };
};

export const useUpload = (closeModalSetState: Dispatch<boolean>) => {
  const [imageName, setImageName] = useState('');
  const [isStepOne, setIsStepOne] = useState(true);
  const [isStepTwo, setIsStepTwo] = useState(false);
  const [showSnack, setShowSnack] = useState({ message: '', show: false });
  const router = useRouter();

  const { state: user } = useContext(UserContext);

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
