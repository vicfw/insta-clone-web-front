import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Carousel } from '@trendyol-js/react-carousel';
import { Icon } from 'components/icon';
import useDateOption from 'hooks/customHooks/useDateOption';
import { FC } from 'react';
import Stories from 'react-insta-stories';
import { Story } from 'react-insta-stories/dist/interfaces';
import * as Style from './styles';
import * as Types from './types';

export const StoryViewer: FC<Types.StoryViewerProps> = ({
  handleShowStories,
  allUsersStories,
}) => {
  const {} = useDateOption();

  return (
    <Style.StoryViewerWrapper>
      <div className="inner-container">
        <div className="logo">
          <img src="images/logo-white.png" alt="logo" />
        </div>
        <div className="close">
          <Icon
            name="close"
            size={23}
            color="#fff"
            onClick={handleShowStories}
          />
        </div>
        <div className="story-container">
          <div className="container">
            {allUsersStories?.map((story, index) => {
              return (
                <div className="story-wrapper" key={index}>
                  <Stories
                    defaultInterval={6000}
                    loop={true}
                    width="100%"
                    stories={story as Story[]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Style.StoryViewerWrapper>
  );
};
