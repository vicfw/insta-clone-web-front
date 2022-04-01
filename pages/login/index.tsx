import React from 'react';
import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import { PageContainer } from '../../styles/login/styles';
import { useSlider } from '../../hooks/login';

const Login = () => {
  const {} = useSlider();
  return (
    <PageContainer>
      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        <Grid item xs={5}>
          {/* <div className="phone">
              <Image
                src="/images/iphone3.png"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div> */}
          <div className="images">
            <img className="image" src="/images/phone-1.png" alt="" />
            <img className="image" src="/images/phone-2.png" alt="" />
            <img className="image" src="/images/phone-3.png" alt="" />
            <img className="image" src="/images/phone-4.png" alt="" />
          </div>
        </Grid>
        <Grid item xs={7}>
          <span>s</span>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Login;
