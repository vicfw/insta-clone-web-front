import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Carousel } from '@trendyol-js/react-carousel';
import { FC } from 'react';
import imageAddress from 'utils/imageAddress';
import * as Component from './components';
import * as Hook from './hooks';
import * as Style from './styles';
import * as Types from './types';

const Stories: FC<Types.StoriesProps> = ({
  ownerStories,
  profile_pic,
  followingStories,
}) => {
  const { get, on } = Hook.useStories(ownerStories, followingStories);

  return (
    <>
      <Style.Wrapper>
        <Carousel
          show={7.5}
          slide={4}
          className="carousel"
          rightArrow={
            <div className="arrow-right">
              <ArrowForwardIosIcon />
            </div>
          }
          leftArrow={
            <div className="arrow-left">
              <ArrowBackIosIcon />
            </div>
          }
          infinite={false}
        >
          <div className="story-container">
            {ownerStories?.length ? (
              <div className="user-story" onClick={on.handleShowStories}>
                <img src={imageAddress(profile_pic)} alt={profile_pic} />
              </div>
            ) : null}
          </div>
          <div className="story-container">
            {followingStories.length
              ? followingStories?.map((story) => {
                  return (
                    <div className="user-story" onClick={on.handleShowStories}>
                      <img
                        src={imageAddress(story?.profile?.profile_pic!)}
                        alt={story?.profile?.profile_pic!}
                      />
                    </div>
                  );
                })
              : null}
          </div>

          <div></div>
        </Carousel>
      </Style.Wrapper>
      {get.showStories && (
        <Component.StoryViewer
          handleShowStories={on.handleShowStories}
          allUsersStories={get.allUserStories}
        />
      )}
    </>
  );
};

export default Stories;
