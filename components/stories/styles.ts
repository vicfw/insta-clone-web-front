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

  .carousel {
    > div > div > div {
      width: auto !important;
    }
  }

  .story-container {
    width: 70px;
    height: 70px;
    min-width: 70px;
    min-height: 70px;

    .user-story {
      width: 70px;
      height: 70px;
      min-width: 70px;
      min-height: 70px;
      border-radius: 50%;
      padding: 2px;
      background: linear-gradient(to right, red, purple);

      img {
        width: 100%;
        height: 100%;
        border: 2px solid #fff;
        border-radius: 50%;
      }
    }
  }

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

  .inner-container {
    position: relative;
    display: flex;
    flex: 1;

    .logo {
      position: absolute;
      left: 5px;
      top: 5px;
    }

    .close {
      position: absolute;
      right: 10px;
      top: 10px;
    }

    .story-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;

      .container {
        display: flex;
        gap: 20px;

        max-width: 1140px;
        height: 100%;

        align-self: center;
        overflow: hidden;
        position: relative;
        .story-wrapper {
          margin-top: 50px;
          width: 380px;
          width: 800px;
          border-left: 46px solid transparent;
          border-right: 46px solid transparent;
          height: 100%;
          position: relative;
          border-radius: 10px;

          img {
            width: 100%;
            height: 100%;
            display: block;
          }

          .story {
            position: relative;
            .main-image {
              border-radius: 10px;
            }
            .profile-wrapper {
              display: flex;
              position: absolute;
              width: 100%;
              height: 25%;
              vertical-align: baseline;
              align-items: center;

              background: linear-gradient(
                180deg,
                rgba(20, 20, 20, 0.8) 0%,
                rgba(38, 38, 38, 0) 100%
              );
              .profile {
                padding: 10px;
              }

              .profile-name {
                span:first-child {
                  color: #fff;
                }
                span:last-child {
                  color: #fff;
                  font-size: 13px;
                  margin: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
