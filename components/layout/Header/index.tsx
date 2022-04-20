import { Search } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import * as Style from './styles';
import { Icon } from 'components/icon';

const Header = () => {
  return (
    <>
      <Style.Header>
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
            <Icon name="add_post" color="#262626" />
            <Icon name="location" color="#262626" />
            <Icon name="heart" color="#262626" />
          </div>
        </div>
      </Style.Header>
    </>
  );
};

export default Header;
