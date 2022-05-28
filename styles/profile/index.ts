import { Box } from '@mui/system';
import styled from 'styled-components';

export const Container = styled.div`
  .container {
    margin-top: 1.5rem;

    .username {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 300;
    }

    .flex {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
    .status {
      margin-top: 2rem;
      gap: 30px;
    }
  }
`;

export const MaterialBox = styled('form')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border-radius: 6px;
  padding: 20px 30px;
`;
