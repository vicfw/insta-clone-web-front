import { Grid } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Grid)`
  .form-container {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    max-width: 350px;
    border: 1px solid #dbdbdb;
    padding: 40px;
    gap: 1rem;

    > h4 {
      color: #8e8e8e;
    }

    .image-container {
      text-align: center;
    }

    .privacy {
      font-size: 12px;
      color: #8e8e8e;
    }
  }

  .signup {
    background-color: #fff;
    border: 1px solid #dbdbdb;
    width: 350px;
    margin-top: 2rem;
    > h4 {
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      > span {
        color: rgba(var(--d69, 0, 149, 246), 1);
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
`;
