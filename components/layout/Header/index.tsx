import SearchIcon from '@mui/icons-material/Search';
import * as Style from './styles';
import { Icon } from 'components/icon';
import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Modal,
  Paper,
} from '@mui/material';
import * as useHook from './hook';
import * as Component from './components';
import { Box } from '@mui/system';
import Image from 'next/image';
import imageAddress from 'utils/imageAddress';
import { useRouter } from 'next/router';

const Header = () => {
  const { on, val, set } = useHook.useHeader();
  const router = useRouter();

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
            <Image
              src={imageAddress(val.user.profile.profile_pic)}
              width={30}
              height={30}
              objectFit="cover"
              layout="fixed"
              aria-controls={val.openMenu ? 'menu' : undefined}
              aria-haspopup="true"
              aria-expanded={val.openMenu ? 'true' : undefined}
              onClick={on.handleClickMenu}
              className="profile"
              id="image-handler"
            />
            <Menu
              id="menu"
              anchorEl={val.anchorEl}
              open={val.openMenu}
              onClose={on.handleCloseMenu}
              MenuListProps={{
                'aria-labelledby': 'image-handler',
              }}
              className="menu"
            >
              <MenuItem onClick={() => router.push(val.user.username)}>
                <ListItemIcon>
                  <Icon name="profile" size={20} color="rgb(38, 38, 38)" />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Style.Header>
    </>
  );
};

export default Header;
