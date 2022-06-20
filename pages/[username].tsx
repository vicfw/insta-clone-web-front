import Head from 'next/head';
import * as Style from 'styles/profile';
import Layout from 'components/layout';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Grid,
  Input,
  Modal,
  Paper,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { NextPageContext } from 'next';
import CreateClient from 'utils/use-apollo';
import { GET_CURRENT_USER_BY_USERNAME } from 'gql/query/getCurrentUserByUsername';
import { FC, useContext, useEffect } from 'react';
import * as Type from 'types/profile';
import imageAddress from 'utils/imageAddress';
import * as Hook from 'hooks/profile';
import ProfilePicture from 'components/ProfilePicture';
import { UserContext } from 'context/UserContext';
import CustomInput from 'components/CustomInput';
import { GET_CURRENT_USER } from 'gql/query/getCurrentUser';

const Profile: FC<Type.ProfilePageProps> = ({ user, currentUser }) => {
  const { query } = useRouter();

  console.log(user, 'user');
  console.log(currentUser, 'currentUser');

  const { get, set, on } = Hook.useProfile(user, currentUser);

  return (
    <>
      <Head>
        <title>{query.username}</title>
      </Head>
      <Layout>
        <Style.Container>
          {/* edit profile modal */}
          <Modal
            open={get.openEditProfileModal}
            onClose={on.handleEditProfileModalClose}
          >
            <Style.MaterialBox
              onSubmit={(e) => {
                e.preventDefault();
                on.handleUpdateProfile();
              }}
            >
              {/* profile pic */}
              <Grid container alignItems="center">
                <Grid item lg={3}>
                  <ProfilePicture
                    imagePath={
                      get.uploadedImageName
                        ? get.uploadedImageName
                        : user.profile.profile_pic
                    }
                    width={50}
                    height={50}
                  />
                </Grid>
                {/* profile picture section */}
                <Grid item lg={9} justifySelf="center" flexDirection="column">
                  <p className="username">{user.username}</p>
                  <Button
                    sx={{
                      padding: 0,
                      textTransform: 'unset',
                    }}
                    variant="text"
                    component="label"
                  >
                    Change Profile Photo
                    <input
                      type="file"
                      hidden
                      onChange={(e) => {
                        on.handleProfilePictureUpload(e);
                      }}
                    />
                  </Button>

                  {get.uploadedImageName && (
                    <Typography color="green" fontSize={12}>
                      Profile picture uploaded!
                    </Typography>
                  )}
                </Grid>
              </Grid>
              {/* username */}
              <Grid container alignItems="center" marginTop={2}>
                <Grid item lg={3}>
                  <Typography
                    fontWeight={500}
                    textAlign="right"
                    marginRight={2}
                  >
                    {' '}
                    Username
                  </Typography>
                </Grid>

                <Grid item lg={4}>
                  <CustomInput
                    size="small"
                    value={get.username || ''}
                    onChange={(e) => set.setUsername(e.target.value)}
                  />
                  {!get.username && (
                    <Typography color={'red'} fontSize={10}>
                      This field cant be empty!
                    </Typography>
                  )}
                </Grid>
              </Grid>
              {/* name */}
              <Grid container alignItems="center" marginTop={2}>
                <Grid item lg={3}>
                  <Typography
                    fontWeight={500}
                    textAlign="right"
                    marginRight={2}
                  >
                    {' '}
                    Name
                  </Typography>
                </Grid>
                <Grid item lg={4}>
                  <CustomInput
                    size="small"
                    value={get.name || ''}
                    onChange={(e) => set.setName(e.target.value)}
                  />
                </Grid>
              </Grid>
              {/* bio */}
              <Grid container alignItems="center" marginTop={2}>
                <Grid item lg={3}>
                  <Typography
                    fontWeight={500}
                    textAlign="right"
                    marginRight={2}
                  >
                    {' '}
                    Bio
                  </Typography>
                </Grid>
                <Grid item lg={4}>
                  <CustomInput
                    size="small"
                    value={get.description || ''}
                    onChange={(e) => set.setDescription(e.target.value)}
                  />
                </Grid>
              </Grid>
              {/* submit */}
              <Grid container justifyContent={'center'} marginTop={2}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ textTransform: 'unset' }}
                >
                  Submit
                </Button>
              </Grid>
            </Style.MaterialBox>
          </Modal>
          {/* profile section */}
          <Grid container className="container">
            <Grid item md={4}>
              <ProfilePicture
                imagePath={user.profile.profile_pic}
                width={150}
                height={150}
              />
            </Grid>
            <Grid item md={8}>
              <Grid container>
                <Grid item md={12} className="flex">
                  <h2 className="username">{user.username}</h2>
                  {currentUser?.username === user.username ? (
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      sx={{
                        textTransform: 'unset',
                        fontWeight: 600,
                        position: 'unset',
                      }}
                      onClick={on.handleEditProfileModalOpen}
                    >
                      Edit Profile
                    </Button>
                  ) : (
                    <Button
                      variant={get.isAFollower ? 'outlined' : 'contained'}
                      color="primary"
                      size="small"
                      sx={{
                        textTransform: 'unset',
                        fontWeight: 600,
                        position: 'unset',
                      }}
                      onClick={
                        get.isAFollower
                          ? on.handleUnFollowUser
                          : on.handleFollowUser
                      }
                    >
                      {get.isAFollower ? 'Unfollow' : 'Follow'}
                    </Button>
                  )}
                </Grid>

                <Grid item md={12} className="flex status">
                  <span>
                    <b>10</b> posts
                  </span>
                  <span>
                    <b>{user.follower.length}</b> followers
                  </span>
                  <span>
                    <b>{user.following.length}</b> following
                  </span>
                </Grid>
                <Grid item md={12} className="mt-1">
                  <span>{user?.profile?.name}</span>
                  <p className="description mt-0">
                    {user.description ?? 'description'}
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* posts section */}
          <Grid container className="mt-3">
            <Grid item lg={4}>
              <Image
                src={imageAddress(user.profile.profile_pic)}
                width={200}
                height={200}
                objectFit="cover"
                layout="fixed"
                objectPosition="center"
                alt={user.profile.profile_pic}
              />
            </Grid>
            <Grid item lg={4}>
              <Image
                src={imageAddress(user.profile.profile_pic)}
                width={200}
                height={200}
                objectFit="cover"
                layout="fixed"
                alt={user.profile.profile_pic}
              />
            </Grid>
            <Grid item lg={4}>
              <Image
                src={imageAddress(user.profile.profile_pic)}
                width={200}
                height={200}
                objectFit="cover"
                layout="fixed"
                objectPosition="center"
                alt={user.profile.profile_pic}
              />
            </Grid>
          </Grid>
        </Style.Container>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const apollo = CreateClient(ctx);

  const username = ctx.query?.username as string;

  try {
    const { data: user } = await apollo.query({
      query: GET_CURRENT_USER_BY_USERNAME,
      variables: { username },
    });

    const { data: currentUser } = await apollo.query({
      query: GET_CURRENT_USER,
    });

    return {
      props: {
        user: user.getOneUserByUsername,
        currentUser: currentUser.getCurrentUser,
      },
    };
  } catch (e: any) {
    if (e.message.includes('getOneUserByUsername')) {
      return {
        props: {},
        redirect: {
          permanent: false,
          destination: '/404',
        },
      };
    }

    return {
      props: {},
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }
};

export default Profile;
