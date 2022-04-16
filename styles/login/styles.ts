import styled from 'styled-components';
import { Container } from '@mui/material';

export const PageContainer = styled(Container)`
  background-color: #fafafa;
  .images {
    width: 600px;
    height: 600px;
    background-image: url('/images/iphone-bg.png');
    background-repeat: no-repeat;
    position: relative;
  }

  .image {
    position: absolute;
    visibility: hidden;
    top: 23px;
    animation: hide 3s ease;
    right: 193px;
  }

  .form-container {
    border: 1px solid #dbdbdb;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin-top: 100px;
    padding: 30px;
    justify-content: center;
    align-items: center;

    > span {
      font-size: 14px;
      cursor: pointer;
    }

    .logo-container {
      width: 200px;
      height: 50px;
      margin-bottom: 2.5rem;
      img {
        width: 100%;
      }
    }
    /*  */
    .inputs-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > div {
        width: 100%;
        margin-bottom: 10px;
      }
      > button {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
  /*  */

  .signup {
    background-color: #fff;
    border: 1px solid #dbdbdb;
    max-width: 400px;
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

  .show {
    visibility: visible;
    animation: show 3s ease;
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
