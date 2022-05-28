import { useContext, useState } from 'react';
import { useUpload } from 'hooks/customHooks/useUpload';
import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE } from 'gql/mutations/profile';
import { UserContext } from 'context/UserContext';

export const useProfile = () => {
  const { user } = useContext(UserContext);
  const [openEditProfileModal, setOpenEditProfileModal] = useState(false);
  const [username, setUsername] = useState(user.username ?? '');
  const [name, setName] = useState(user.name ?? '');
  const [description, setDescription] = useState(user.description ?? '');

  const { get, on } = useUpload();

  const [updateProfile] = useMutation(UPDATE_PROFILE, {
    onCompleted: () => {},
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
        profile_pic: get.imageName,
        name,
        username,
        description,
      },
    });
  };

  return {
    get: {
      openEditProfileModal,
      showSnack: get.showSnack,
      username,
      name,
      description,
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
