import SearchIcon from '@mui/icons-material/Search';
import * as Style from './lib/styles';
import { Icon } from 'components/icon';
import {
  CircularProgress,
  Divider,
  dividerClasses,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Modal,
} from '@mui/material';
import { Box } from '@mui/system';
import * as Component from './lib/components';
import * as useHook from './lib/hook';
import Image from 'next/image';
import imageAddress from 'utils/imageAddress';
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';

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
          <div className="img" onClick={on.pushToHomePage}>
            <img src="images/instagram-homepage-logo.png" alt="logo" />
          </div>
          {/* search */}
          <Style.Search className="search">
            <Style.SearchIconWrapper>
              <SearchIcon sx={{ color: '#8E8E8E' }} />
            </Style.SearchIconWrapper>
            {val.searchQuery.length ? (
              <Style.ResultBox id="search-box">
                {val.searchResult.length ? (
                  val.searchResult.map((result) => {
                    return (
                      <div
                        className="user"
                        key={result.id}
                        onClick={() => {
                          router.push(result.username);
                          on.handleCloseSearchBox();
                        }}
                      >
                        <Image
                          src={imageAddress(result.imagePath)}
                          width={50}
                          height={50}
                          className="profile"
                        />
                        <div className="status">
                          <p>{result.username}</p>
                          <p>{result.name}</p>
                        </div>
                      </div>
                    );
                  })
                ) : val.loading ? (
                  <div className="not-found">
                    <CircularProgress color="primary" />
                  </div>
                ) : (
                  <div className="not-found">
                    <span className="text">There is no user found!</span>
                  </div>
                )}
              </Style.ResultBox>
            ) : null}

            <Style.StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={val.searchQuery}
              onChange={on.handleSearch}
              id="search-input"
            />
            {val.searchQuery.length ? (
              <CloseIcon
                sx={{
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: 15,
                  backgroundColor: '#ccc',
                  borderRadius: '50%',
                }}
                onClick={on.handleCloseSearchBox}
              />
            ) : null}
          </Style.Search>

          <div className="actions">
            <Icon name="home" color="#262626" />
            <Icon name="direct" color="#262626" />
            <Icon name="add_post" color="#262626" onClick={on.handleModal} />
            <Icon name="location" color="#262626" />
            <Icon name="heart" color="#262626" />
            <Image
              src={imageAddress(val.user?.profile?.profile_pic)}
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
