import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid rgba(219, 219, 219, 1);
  border-radius: 3px;
  padding: 20px;
  background-color: #fff;

  .user-story {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(to right, red, purple);

    img {
      width: 100%;
      border: 2px solid #fff;
      border-radius: 50%;
    }
  }
`;
