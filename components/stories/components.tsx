import { Icon } from 'components/icon';
import ProfilePicture from 'components/ProfilePicture';
import { FC } from 'react';
import imageAddress from 'utils/imageAddress';
import * as Style from './styles';
import * as Types from './types';
import dayjs from 'dayjs';
import useDateOption from 'hooks/customHooks/useDateOption';

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
                  {story.map((st) => {
                    return (
                      <div className="story" key={st.id}>
                        <div className="loaders">
                          <div className="line"></div>
                          <div className="fill-line"></div>
                        </div>
                        <header className="profile-wrapper">
                          <div className="profile">
                            <ProfilePicture
                              width={50}
                              height={50}
                              imagePath={st.profile?.profile_pic!}
                            />
                          </div>
                          <div className="profile-name">
                            <span>{st.profile?.name}</span>
                            <span> {dayjs(st.created_at).fromNow(true)}</span>
                          </div>
                        </header>

                        <img
                          className="main-image"
                          src={imageAddress(st?.story!)}
                          alt=""
                        />
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
