import React, { FC, useEffect } from 'react';
import * as Style from './styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Carousel } from '@trendyol-js/react-carousel';
import * as Types from './types';
import imageAddress from 'utils/imageAddress';

const Stories: FC<Types.StoriesProps> = ({ ownerStories, profile_pic }) => {
  console.log(ownerStories, 'ownerStories');

  return (
    <Style.Wrapper>
      <Carousel
        show={7.5}
        slide={4}
        rightArrow={
          <div className="arrow-right">
            <ArrowForwardIosIcon />
          </div>
        }
        leftArrow={
          <div className="arrow-left">
            <ArrowBackIosIcon />
          </div>
        }
        infinite={false}
      >
        {ownerStories?.length ? (
          <div className="user-story">
            <img src={imageAddress(profile_pic)} alt={profile_pic} />
          </div>
        ) : (
          <></>
        )}
        <div></div>
      </Carousel>
    </Style.Wrapper>
  );
};

export default Stories;
