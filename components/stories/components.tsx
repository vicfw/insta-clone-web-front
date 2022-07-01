import { Icon } from 'components/icon';
import { FC, useEffect } from 'react';
import imageAddress from 'utils/imageAddress';
import * as Style from './styles';
import * as Types from './types';

export const StoryViewer: FC<Types.StoryViewerProps> = ({
  handleShowStories,
  allUsersStories,
}) => {
  console.log(allUsersStories, 'allUsersStories');

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
                <div className="story">
                  {story.map((st) => {
                    return (
                      <div>
                        <div className="loaders">
                          <div className="line"></div>
                          <div className="fill-line"></div>
                        </div>
                        <div className="profile">
                          <img
                            src={imageAddress(st.profile?.profile_pic!)}
                            alt=""
                          />
                        </div>
                        <img src={imageAddress(st?.story!)} alt="" />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Style.StoryViewerWrapper>
  );
};
