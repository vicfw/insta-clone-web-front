import React, { FC, useEffect } from 'react';
import {
  Alert,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  TextField,
} from '@mui/material';
import { PageContainer } from '../../styles/login/styles';
import { useSlider, useUserInterface } from '../../hooks/login';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter, withRouter } from 'next/router';
import Head from 'next/head';
import * as Types from '../../types/login';
import nookies from 'nookies';

const Login: FC<Types.LoginProps> = ({ router: routerProp }) => {
  const {} = useSlider();
  const { values, setValues, functions } = useUserInterface(routerProp);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={values.isCompleted}
        autoHideDuration={4000}
        color="success"
        onClose={functions.handleCloseSnackbar}
      >
        <Alert
          onClose={functions.handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Signup completed
        </Alert>
      </Snackbar>
      <PageContainer>
        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
          <Grid item xs={6} justifyContent="center" alignItems="center">
            <div className="images">
              <img className="image" src="/images/phone-1.png" alt="" />
              <img className="image" src="/images/phone-2.png" alt="" />
              <img className="image" src="/images/phone-3.png" alt="" />
              <img className="image" src="/images/phone-4.png" alt="" />
            </div>
          </Grid>
          <Grid item xs={6} justifyContent="center" alignItems="center">
            <div className="form-container">
              <div className="logo-container">
                <img src="/images/logo.png" className="logo" />
              </div>
              <div className="inputs-container">
                <TextField
                  id="outlined-basic"
                  type="text"
                  variant="outlined"
                  label="Email"
                  value={values.email}
                  onChange={(e) => functions.handleChangeEmail(e.target.value)}
                />

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={(e) =>
                      functions.handleChangePassword(e.target.value)
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={functions.handleClickShowPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Button
                  variant="contained"
                  onClick={functions.handleCreateUser}
                  disabled={values.email && values.password ? false : true}
                >
                  Log In
                </Button>
              </div>
              {values.error && (
                <Alert sx={{ mb: 1 }} color="error">
                  {values.error}
                </Alert>
              )}
              <span>Forgot password?</span>
            </div>
            <Grid
              item
              xs={9}
              justifyContent="center"
              alignItems="center"
              className="signup"
            >
              <h4>
                Don't have an account?{' '}
                <span onClick={() => router.push('/signup')}>Sign up</span>
              </h4>
            </Grid>
          </Grid>
        </Grid>
      </PageContainer>
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

export default withRouter(Login);
