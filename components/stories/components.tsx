import { Icon } from 'components/icon';
import { FC, useEffect } from 'react';
import imageAddress from 'utils/imageAddress';
import * as Style from './styles';
import * as Types from './types';

export const StoryViewer: FC<Types.StoryViewerProps> = ({
  handleShowStories,
  allUsersStories,
}) => {
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
              return <div>1</div>;
            })}
          </div>
        </div>
      </div>
    </Style.StoryViewerWrapper>
  );
};
