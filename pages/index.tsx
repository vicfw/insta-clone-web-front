import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import * as Style from '../styles/home';
import Layout from 'components/layout';
import Stories from 'components/stories';
import { Grid } from '@mui/material';
import { GET_CURRENT_USER } from 'gql/query/getCurrentUser';
import CreateClient from 'utils/use-apollo';
import * as Type from '../types/home';
import { UserContext } from 'context/UserContext';
import { useContext, useEffect } from 'react';
import { StoryViewer } from 'components/stories/components';
import { GET_STORIES } from 'gql/query/getStories';
import { Following } from 'types/global';

const Home: NextPage<Type.MainPagePropTypes> = ({ currentUser, stories }) => {
  console.log(stories);

  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    dispatch({ type: 'SET_USER', payload: currentUser });
  }, []);
  return (
    <>
      <Head>
        <title>
          {!currentUser?.username
            ? 'Instagram'
            : ` Welcome ${currentUser?.username}`}
        </title>
      </Head>
      <Layout>
        <Style.Wrapper>
          <Grid container>
            <Grid item md={7}>
              {currentUser?.stories.length ? (
                <Stories
                  ownerStories={currentUser?.stories}
                  profile_pic={currentUser?.profile?.profile_pic}
                  followingStories={stories}
                />
              ):null}
            </Grid>
          </Grid>
        </Style.Wrapper>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const apollo = CreateClient(ctx);

  try {
    const { data } = await apollo.query({
      query: GET_CURRENT_USER,
    });

    const followingIds: number[] = data.getCurrentUser.following.map(
      (flw: Following) => flw.followedUserId
    );
    console.log(followingIds, 'followingIds');

    const { data: stories } = await apollo.query({
      query: GET_STORIES,
      variables: { id: followingIds },
    });

    console.log(stories, 'stories');

    return {
      props: { currentUser: data.getCurrentUser, stories: stories.userStories },
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
