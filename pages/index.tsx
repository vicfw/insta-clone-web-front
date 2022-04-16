import { Container, Grid } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import withPrivateRoute from '../components/HOC/withAuth';

const Home: NextPage = () => {
  return (
    <>
      <h1>hello</h1>
    </>
  );
};

export default withPrivateRoute(Home);
