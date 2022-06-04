import { alpha, InputBase, styled as muiStyled, SxProps } from '@mui/material';

import styled from 'styled-components';
import imageAddress from 'utils/imageAddress';

export const Header = styled.header`
  position: relative;
  z-index: 100;
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

    .img {
      cursor: pointer;
    }
  }

  .search {
    flex: 0.35;
  }

  .actions {
    display: flex;
    flex: 0.3;
    justify-content: space-around;
    align-items: center;

    .profile {
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;

export const ModalWrapper = styled.div`
  .upload {
    min-height: 750px;
  }
`;

export const ResultBox = styled.div`
  width: 375px;
  height: 362px;
  position: absolute;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 3px 6px 0px #ccc;
  right: -47px;
  bottom: 0;
  top: 50px;
  z-index: 99;
  ::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    box-shadow: 0 0 5px 1px #ccc;
    background-color: #fff;
    left: 47%;
    top: -6px;
    transform: rotate(45deg);
  }

  .user {
    display: flex;
    cursor: pointer;
    padding: 10px 20px;
    align-items: center;
    :hover {
      background-color: #fafafa;
    }
    .status {
      margin-left: 10px;
      p:last-child {
        color: #ccc;
      }
    }
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const StoryModalBoxStyle: SxProps = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
};

//start of StoryUploadStepOne components styles

export const InputsWrapper = styled.div`
  min-height: 750px;
  max-height: 750px;

  .header {
    border-bottom: 1px solid rgba(219, 219, 219, 1);
    text-align: center;
    font-weight: 500;
    padding: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    svg {
      position: absolute;
      left: 20px;
    }

    button {
      position: absolute;
      right: 20px;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    min-height: 750px;
    max-height: 750px;
  }

  .inputs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex: 1;
  }

  .inputs {
    display: flex;
    gap: 1rem;
  }

  .preview {
    width: 800px;
    height: 750px;

    > img {
      width: 100%;
      height: 696px;
      border-bottom-right-radius: 6px;
      border-bottom-left-radius: 6px;
    }
  }
`;
