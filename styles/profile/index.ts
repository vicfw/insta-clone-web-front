import styled from 'styled-components';

export const Container = styled.div`
  .container {
    margin-top: 1.5rem;

    .profile-pic {
      border-radius: 50%;
    }

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
