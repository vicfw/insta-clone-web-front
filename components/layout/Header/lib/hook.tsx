import { useMutation, useQuery } from '@apollo/client';
import { UserContext } from 'context/UserContext';
import { CREATE_POST } from 'gql/mutations/post';
import { CREATE_STORY } from 'gql/mutations/story';
import { UPLOAD_FILE } from 'gql/mutations/upload';
import { SEARCH_USER } from 'gql/query/searchUser';
import { useRouter } from 'next/router';
import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
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
      setSearchLoading(loading);
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

  const handleCloseSearchBox = () => {
    const searchBox = document.getElementById('search-box')!;
    if (searchBox) {
      setSearchQuery('');
      searchBox.style.display = 'none';
    }
  };

  const pushToHomePage = () => {
    router.push('/');
  };

  return {
    val: {
      showModal,
      user,
      openMenu,
      anchorEl,
      searchResult,
      loading,
      searchQuery,
    },
    set: { setShowModal },
    on: {
      handleModal,
      handleClickMenu,
      handleCloseMenu,
      pushToHomePage,
      handleSearch,
      handleCloseSearchBox,
    },
  };
};

export const useUpload = (closeModalSetState: Dispatch<boolean>) => {
  const [storyOrPost, setStoryOrPost] = useState<Type.StoryOrPost>('');
  const [imageName, setImageName] = useState('');
  const [isStepOne, setIsStepOne] = useState(true);
  const [isCreateStoryStepTwo, setIsCreateStoryStepTwo] = useState(false);
  const [isCreatePostStepTwo, setIsCreatePostStepTwo] = useState(false);
  const [showSnack, setShowSnack] = useState({ message: '', show: false });
  const router = useRouter();

  const { state: user } = useContext(UserContext);

  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => {
      setImageName(data.uploadFile);
      setIsStepOne(false);
      console.log(storyOrPost, 'storyOrPost');

      if (storyOrPost.includes('story')) {
        setIsCreateStoryStepTwo(true);
      } else {
        setIsCreatePostStepTwo(true);
      }
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
      story: imageName,
      userId: user.id,
      profileId: user.profile.id,
    },
    onCompleted: (data) => {
      closeModalSetState(false);
      setImageName('');
      router.replace(router.asPath);
    },
    onError: (e) => {},
  });

  const [createPost] = useMutation(CREATE_POST, {
    variables: {
      caption: '',
      image: '',
    },
    onCompleted: (data) => {
      closeModalSetState(false);
      setImageName('');
      router.replace(router.asPath);
    },
    onError: (e) => {},
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
    try {
      uploadFile({ variables: { file } });
    } catch (e) {}
  };

  const handleBackToStepOne = () => {
    setIsStepOne(true);
    setIsCreateStoryStepTwo(false);
  };

  return {
    val: {
      showSnack,
      isStepOne,
      isCreateStoryStepTwo,
      isCreatePostStepTwo,
      imageName,
    },
    set: { setStoryOrPost },
    on: {
      handleUploadInputChange,
      handleBackToStepOne,
      handleCreateStory,
    },
  };
};
