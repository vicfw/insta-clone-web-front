import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import * as Style from '../styles/home';
import Layout from 'components/layout';
import Stories from 'components/stories';
import { Grid } from '@mui/material';
import { GET_CURRENT_USER } from 'gql/query/getCurrentUser';
import CreateClient from 'utils/use-apollo';
import * as Type from '../types/home';

const Home: NextPage<Type.MainPagePropTypes> = ({ user }) => {
  console.log(user);

  return (
    <>
      <Head>
        <title>
          {!user?.username ? 'Instagram' : ` Welcome ${user?.username}`}
        </title>
      </Head>
      <Layout>
        <Style.Wrapper>
          <Grid container>
            <Grid item md={7}>
              {user.story && (
                <Stories
                  ownerStories={user?.story?.stories}
                  profile_pic={user?.profile?.profile_pic}
                />
              )}
            </Grid>
          </Grid>
        </Style.Wrapper>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const apollo = CreateClient(ctx);
  console.log('from  getServerSideProps');

  try {
    const { data } = await apollo.query({
      query: GET_CURRENT_USER,
    });

    return {
      props: { user: data.getCurrentUser },
    };
  } catch (e) {
    console.log(e);

    return {
      props: {},
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }
};

export default Home;
