import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  Alert,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import React from 'react';
import * as Style from 'styles/signup';
import * as Hook from 'hooks/signup';
import Head from 'next/head';
import { useRouter } from 'next/router';
import nookies from 'nookies';

const Signup = () => {
  const { values, setValues, functions, loading } = Hook.useSignup();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <Style.Container
        container
        minHeight={'100vh'}
        justifyContent={'center'}
        alignItems="center"
        direction={'column'}
      >
        <div className="form-container">
          <div className="image-container">
            <img src="/images/logo.png" alt="" />
          </div>
          <h4>Sign up to see photos and videos from your friends.</h4>
          <div className="form"></div>
          <TextField
            id="outlined-basic"
            type="text"
            variant="outlined"
            size="small"
            label="Email"
            value={values.email}
            onChange={(e) => functions.handleChangeEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            size="small"
            type="text"
            variant="outlined"
            label="Username"
            value={values.username}
            onChange={(e) => functions.handleChangeUserName(e.target.value)}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              sx={{ mt: 1 }}
              type={values.showPassword ? 'text' : 'password'}
              size="small"
              value={values.password}
              onChange={(e) => functions.handleChangePassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={functions.handleClickShowPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {values.error && <Alert  color="error">{values.error}</Alert>}
          <Button
            variant="contained"
            onClick={functions.handleCreateUser}
            disabled={values.email && values.password ? false : true}
          >
            Log In
          </Button>
          <span className="privacy">
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy.
          </span>
        </div>
        <Grid justifyContent="center" alignItems="center" className="signup">
          <h4>
            Don't have an account?{' '}
            <span onClick={() => router.push('/login')}>Login</span>
          </h4>
        </Grid>
      </Style.Container>
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const { jwt } = nookies.get(ctx);

  if (jwt) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    };
  }
  return {
    props: {},
  };
};

export default Signup;
