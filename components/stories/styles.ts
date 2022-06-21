import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid rgba(219, 219, 219, 1);
  border-radius: 3px;
  padding: 30px 0 30px 10px;
  background-color: #fff;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  position: relative;
  z-index: 2;

  .arrow-right {
    background-color: #fff;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    border-radius: 50%;
    position: absolute;
    cursor: pointer;
    right: 15px;
    top: 47px;

    svg {
      color: #ccc;
      font-size: 15px;
      margin-left: 3px;
    }
  }

  .arrow-left {
    background-color: #fff;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    border-radius: 50%;
    position: absolute;
    cursor: pointer;
    left: 15px;
    top: 47px;
    z-index: 2;

    svg {
      color: #ccc;
      font-size: 15px;
      margin-left: 5px;
    }
  }

  .user-story {
    width: 66px;
    height: 66px;
    min-width: 66px;
    min-height: 66px;
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

export const StoryViewerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: #1a1a1a;
  display: flex;
  flex: 1;
  z-index: 100;
`;
