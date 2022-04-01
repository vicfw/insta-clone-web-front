import styled from 'styled-components';
import { Container } from '@mui/material';

export const PageContainer = styled(Container)`
  .image {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }

  .show {
    opacity: 1;
    visibility: visible;
    transition: all 1s ease-in-out;
  }
`;
