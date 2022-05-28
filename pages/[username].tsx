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
import { FC, useContext } from 'react';
import * as Type from 'types/profile';
import imageAddress from 'utils/imageAddress';
import * as Hook from 'hooks/profile';
import ProfilePicture from 'components/ProfilePicture';
import { UserContext } from 'context/UserContext';
import CustomInput from 'components/CustomInput';

const Profile: FC<Type.ProfilePageProps> = ({ user }) => {
  const { query } = useRouter();

  const { setUser } = useContext(UserContext);
  setUser(user);

  const { get, set, on } = Hook.useProfile();

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
            <Style.MaterialBox>
              {/* profile pic */}
              <Grid container alignItems="center">
                <Grid item lg={3}>
                  <ProfilePicture
                    imagePath={user.profile.profile_pic}
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
                </Grid>
                {/* name section */}
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
                    value={get.username}
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
                    value={get.name}
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
                    value={get.description}
                    onChange={(e) => set.setDescription(e.target.value)}
                  />
                </Grid>
              </Grid>
              {/* submit */}
              <Grid container justifyContent={'center'} marginTop={2}>
                <Button
                  variant="contained"
                  onClick={on.handleUpdateProfile}
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
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    sx={{ textTransform: 'unset', fontWeight: 600 }}
                    onClick={on.handleEditProfileModalOpen}
                  >
                    Edit Profile
                  </Button>
                </Grid>

                <Grid item md={12} className="flex status">
                  <span>
                    <b>10</b> posts
                  </span>
                  <span>
                    <b>10</b> posts followers
                  </span>
                  <span>
                    <b>10</b> posts following
                  </span>
                </Grid>
                <Grid item md={12} className="mt-1">
                  <span>name</span>
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
              />
            </Grid>
            <Grid item lg={4}>
              <Image
                src={imageAddress(user.profile.profile_pic)}
                width={200}
                height={200}
              />
            </Grid>
            <Grid item lg={4}>
              <Image
                src={imageAddress(user.profile.profile_pic)}
                width={200}
                height={200}
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
    const { data } = await apollo.query({
      query: GET_CURRENT_USER_BY_USERNAME,
      variables: { username },
    });

    return {
      props: { user: data.getOneUserByUsername },
    };
  } catch (e) {
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
