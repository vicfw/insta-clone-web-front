import { Alert, Button, Snackbar } from '@mui/material';
import { Icon } from 'components/icon';
import * as Style from './styles';
import * as UseHook from './hook';
import SnackAlert from 'components/Alert';
import imageAddress from 'utils/imageAddress';
import { FC } from 'react';
import * as Type from './types';

export const StoryUploadStepOne: FC<Type.ModalProps> = ({
  closeModalSetState,
}) => {
  const { on, val, set } = UseHook.useUpload(closeModalSetState);

  const renderSteps = () => {
    if (val.isStepOne) {
      return (
        <div className="content">
          <Icon name="media" size={100} />
          <div className="inputs">
            <Button
              variant="contained"
              component="label"
              sx={{ fontWeight: 'bold', textTransform: 'initial' }}
              onClick={() => set.setStoryOrPost('story')}
            >
              Create a story
              <input
                type="file"
                hidden
                onChange={(e) => {
                  on.handleUploadInputChange(e);
                }}
              />
            </Button>
            <Button
              variant="contained"
              component="label"
              sx={{ fontWeight: 'bold', textTransform: 'initial' }}
              onClick={() => set.setStoryOrPost('post')}
            >
              Create a post
              <input
                type="file"
                hidden
                onChange={(e) => {
                  on.handleUploadInputChange(e);
                }}
              />
            </Button>
          </div>
        </div>
      );
    } else if (val.isCreateStoryStepTwo) {
      return (
        <div className="preview">
          <img src={imageAddress(val.imageName)} alt="" />
        </div>
      );
    } else if (val.isCreatePostStepTwo) {
      return <div>asdasdasdasd</div>;
    }
  };

  return (
    <Style.InputsWrapper>
      <div className="header">
        {val.isCreateStoryStepTwo || val.isCreatePostStepTwo ? (
          <Icon name="back-arrow" size={24} onClick={on.handleBackToStepOne} />
        ) : (
          <div></div>
        )}
        <p>Create New Story Or Post</p>
        {val.isCreateStoryStepTwo || val.isCreatePostStepTwo ? (
          <Button
            variant="text"
            color="primary"
            sx={{
              textTransform: 'initial',
              backgroundColor: 'transparent',
            }}
            onClick={on.handleCreateStory}
          >
            Share
          </Button>
        ) : (
          <div></div>
        )}
      </div>
      <SnackAlert
        show={val.showSnack.show}
        message={val.showSnack.message}
        vertical="bottom"
        horizontal="center"
      />
      {renderSteps()}
    </Style.InputsWrapper>
  );
};
