import Head from 'next/head';
import * as Style from 'styles/profile';
import Layout from 'components/layout';
import { useRouter } from 'next/router';
import { Box, Button, Grid, Modal } from '@mui/material';
import Image from 'next/image';
import { NextPageContext } from 'next';
import CreateClient from 'utils/use-apollo';
import { GET_CURRENT_USER_BY_USERNAME } from 'gql/query/getCurrentUserByUsername';
import { FC } from 'react';
import * as Type from 'types/profile';
import imageAddress from 'utils/imageAddress';
import * as Hook from 'hooks/profile';
import ProfilePicture from 'components/ProfilePicture';

const Profile: FC<Type.ProfilePageProps> = ({ user }) => {
  const { query } = useRouter();

  const { get, set, on } = Hook.useProfile();

  return (
    <>
      <Head>
        <title>{query.username}</title>
      </Head>
      <Layout>
        <Style.Container>
          <Modal
            open={get.openEditProfileModal}
            onClose={on.handleEditProfileModalClose}
          >
            <Style.MaterialBox>
              <Grid container alignItems="center">
                <Grid item lg={3}>
                  <ProfilePicture
                    imagePath={user.profile.profile_pic}
                    width={50}
                    height={50}
                  />
                </Grid>

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
