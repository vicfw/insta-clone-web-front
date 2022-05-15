import SearchIcon from '@mui/icons-material/Search';
import * as Style from './styles';
import { Icon } from 'components/icon';
import { Button, Modal } from '@mui/material';
import * as useHook from './hook';
import * as Component from './components';
import { Box } from '@mui/system';

const Header = () => {
  const { on, val, set } = useHook.useHeader();

  return (
    <>
      <Style.Header>
        <Modal open={val.showModal} onClose={on.handleModal}>
          <Style.ModalWrapper>
            <Box sx={Style.StoryModalBoxStyle}>
              <div className="upload">
                <Component.StoryUploadStepOne
                  closeModalSetState={set.setShowModal}
                />
              </div>
            </Box>
          </Style.ModalWrapper>
        </Modal>

        <div className="inner-content">
          <div className="img">
            <img src="images/instagram-homepage-logo.png" alt="logo" />
          </div>

          <Style.Search className="search">
            <Style.SearchIconWrapper>
              <SearchIcon sx={{ color: '#8E8E8E' }} />
            </Style.SearchIconWrapper>
            <Style.StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Style.Search>

          <div className="actions">
            <Icon name="home" color="#262626" />
            <Icon name="direct" color="#262626" />
            <Icon name="add_post" color="#262626" onClick={on.handleModal} />
            <Icon name="location" color="#262626" />
            <Icon name="heart" color="#262626" />
          </div>
        </div>
      </Style.Header>
    </>
  );
};

export default Header;
