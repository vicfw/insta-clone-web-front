import Head from 'next/head';
import * as Style from 'styles/profile';
import Layout from 'components/layout';
import { useRouter } from 'next/router';
import { Button, Grid } from '@mui/material';
import Image from 'next/image';
import { NextPageContext } from 'next';
import CreateClient from 'utils/use-apollo';
import { GET_CURRENT_USER_BY_USERNAME } from 'gql/query/getCurrentUserByUsername';
import { FC } from 'react';
import * as Type from 'types/profile';
import imageAddress from 'utils/imageAddress';

const Profile: FC<Type.ProfilePageProps> = ({ user }) => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>{query.username}</title>
      </Head>
      <Layout>
        <Style.Container>
          <Grid container className="container">
            <Grid item md={4}>
              <Image
                width={180}
                height={180}
                src={imageAddress(user?.profile?.profile_pic)}
                className="profile-pic"
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
        </Style.Container>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const apollo = CreateClient(ctx);

  const username = ctx.query?.username as string;

  console.log(username, 'username');

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
