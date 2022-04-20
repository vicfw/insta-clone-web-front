import type { NextPage } from 'next';
import Head from 'next/head';
import withPrivateRoute from '../components/HOC/withAuth';
import { useContext } from 'react';
import { UserContext } from 'context/UserContext';
import * as Style from '../styles/home';
import Layout from 'components/layout';
import Stories from 'components/stories';
import { Grid } from '@mui/material';

const Home: NextPage = () => {
  const user = useContext(UserContext);
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
              <Stories />
            </Grid>
          </Grid>
        </Style.Wrapper>
      </Layout>
    </>
  );
};

export default withPrivateRoute(Home);
