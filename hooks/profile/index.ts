import { useContext, useEffect, useState } from 'react';
import { useUpload } from 'hooks/customHooks/useUpload';
import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE } from 'gql/mutations/profile';
import { UserContext } from 'context/UserContext';
import { refreshData } from 'utils/refreshProps';
import { useRouter } from 'next/router';
import { User } from 'types/global';

export const useProfile = (ssrUser: User, currentUser: User) => {
  //local state
  const [openEditProfileModal, setOpenEditProfileModal] = useState(false);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [profile_pic, setProfile_pic] = useState('');
  //utils
  const { state: user, dispatch } = useContext(UserContext);
  const router = useRouter();
  const { get, on, set } = useUpload();

  //updateProfile mutation
  const [updateProfile] = useMutation(UPDATE_PROFILE, {
    onCompleted: (data) => {
      const newUsername = data.updateProfile?.username;
      const oldUsername = router.query?.username;

      setOpenEditProfileModal(false);
      if (oldUsername !== newUsername) {
        return router.push(`/${newUsername}`);
      }

      router.replace(router.asPath);
    },
  });

  const handleEditProfileModalOpen = () => {
    setOpenEditProfileModal(true);
  };

  const handleEditProfileModalClose = () => {
    setOpenEditProfileModal(false);
  };

  const handleUpdateProfile = () => {
    updateProfile({
      variables: {
        profile_id: user?.profile.id,
        user_id: user?.id,
        profile_pic,
        name,
        username,
        description,
      },
    }).then(() => {
      set.setImageName('');
    });
  };

  useEffect(() => {
    setUsername(user.username);
    setName(user.profile.name);
    setDescription(user.description);
    setProfile_pic(user.profile.profile_pic);
  }, [openEditProfileModal]);

  useEffect(() => {
    setProfile_pic(get.imageName);
  }, [get.imageName]);

  useEffect(() => {
    dispatch({ type: 'SET_USER', payload: currentUser });
  }, []);

  return {
    get: {
      openEditProfileModal,
      showSnack: get.showSnack,
      username,
      name,
      description,
      uploadedImageName: get.imageName,
    },
    set: { setUsername, setName, setDescription },
    on: {
      handleEditProfileModalClose,
      handleEditProfileModalOpen,
      handleProfilePictureUpload: on.handleUploadInputChange,
      handleUpdateProfile,
    },
  };
};
