import { useState } from 'react';
import { useUpload } from 'hooks/customHooks';

export const useProfile = () => {
  const [openEditProfileModal, setOpenEditProfileModal] = useState(false);

  const { get, on } = useUpload();

  console.log(get.imageName);

  const handleEditProfileModalOpen = () => {
    setOpenEditProfileModal(true);
  };

  const handleEditProfileModalClose = () => {
    setOpenEditProfileModal(false);
  };

  return {
    get: { openEditProfileModal, showSnack: get.showSnack },
    set: {},
    on: {
      handleEditProfileModalClose,
      handleEditProfileModalOpen,
      handleProfilePictureUpload: on.handleUploadInputChange,
    },
  };
};
