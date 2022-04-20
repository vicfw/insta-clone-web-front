import { alpha, InputBase, styled as muiStyled } from '@mui/material';
import styled from 'styled-components';

export const Header = styled.header`
  height: 60px;
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid rgba(219, 219, 219, 1);
  display: flex;
  justify-content: center;
  align-items: center;

  .inner-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 50%;
    min-width: 50%;
  }

  .search {
    flex: 0.35;
  }

  .actions {
    display: flex;
    flex: 0.3;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Search = muiStyled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#EFEFEF',
  '&:hover': {
    backgroundColor: '#EFEFEF',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = muiStyled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = muiStyled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
