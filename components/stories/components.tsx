import { Icon } from 'components/icon';
import { FC } from 'react';
import * as Style from './styles';
import * as Types from './types';

export const StoryViewer: FC<Types.StoryViewerProps> = ({
  handleShowStories,
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
      </div>
    </Style.StoryViewerWrapper>
  );
};
