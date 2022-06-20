import { useCallback, useContext, useEffect, useState } from 'react';
import { useUpload } from 'hooks/customHooks/useUpload';
import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE } from 'gql/mutations/profile';
import { UserContext } from 'context/UserContext';
import { refreshData } from 'utils/refreshProps';
import { useRouter } from 'next/router';
import { User } from 'types/global';
import { FOLLOW_USER } from 'gql/mutations/followUser';
import { REMOVE_FOLLOWER, REMOVE_FOLLOWING } from 'gql/mutations/unFollowUser';

export const useProfile = (ssrUser: User, currentUser: User) => {
  //local state
  const [openEditProfileModal, setOpenEditProfileModal] = useState(false);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [profile_pic, setProfile_pic] = useState('');
  const [isAFollower, setIsAFollower] = useState(false);

  //utils
  const { dispatch } = useContext(UserContext);
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

  // follow a user
  const [followUser] = useMutation(FOLLOW_USER, {
    onCompleted: () => {
      setIsAFollower(true);

      router.replace(router.asPath);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  //unfollow a user

  const [removeFollower] = useMutation(REMOVE_FOLLOWER, {
    onError: (e) => {
      console.log(e);
    },
  });

  const [removeFollowing] = useMutation(REMOVE_FOLLOWING, {
    onError: (e) => {
      console.log(e);
    },
  });

  const isAFollowerHandler = () => {
    const follower = currentUser?.following?.some((following) => {
      return following.followedUserId === ssrUser.id;
    });

    setIsAFollower(follower);
  };

  const handleEditProfileModalOpen = () => {
    setOpenEditProfileModal(true);
  };

  const handleEditProfileModalClose = () => {
    setOpenEditProfileModal(false);
  };

  const updateProfileVariables = Object.assign(
    {},
    {
      profile_id: ssrUser?.profile.id,
      user_id: ssrUser?.id,
      profile_pic: profile_pic ? profile_pic : undefined,
      name: name ? name : undefined,
      username: username ? username : undefined,
      description: description ? description : undefined,
    }
  );

  const handleUpdateProfile = () => {
    updateProfile({
      variables: updateProfileVariables,
    }).then(() => {
      set.setImageName('');
    });
  };

  const handleFollowUser = () => {
    followUser({
      variables: {
        followedUserId: ssrUser.id,
        userId: currentUser.id,
      },
    });
  };

  const handleUnFollowUser = () => {
    Promise.all([
      removeFollowing({
        variables: { id: currentUser.id },
      }),

      removeFollower({
        variables: { id: currentUser.id },
      }),
    ])
      .then(() => {
        setIsAFollower(false);
        router.replace(router.asPath);
      })
      .catch((e) => console.log(e));
  };

  //side effects
  useEffect(() => {
    setUsername(ssrUser.username);
    setName(ssrUser.profile.name);
    setDescription(ssrUser.description);
    setProfile_pic(ssrUser.profile.profile_pic);
  }, [openEditProfileModal]);

  useEffect(() => {
    setProfile_pic(get.imageName);
  }, [get.imageName]);

  useEffect(() => {
    dispatch({ type: 'SET_USER', payload: currentUser });
  }, []);

  useEffect(() => {
    isAFollowerHandler();
  }, [ssrUser]);

  return {
    get: {
      openEditProfileModal,
      showSnack: get.showSnack,
      username,
      name,
      description,
      uploadedImageName: get.imageName,
      isAFollower,
    },
    set: { setUsername, setName, setDescription },
    on: {
      handleEditProfileModalClose,
      handleEditProfileModalOpen,
      handleProfilePictureUpload: on.handleUploadInputChange,
      handleUpdateProfile,
      handleFollowUser,
      handleUnFollowUser,
    },
  };
};
