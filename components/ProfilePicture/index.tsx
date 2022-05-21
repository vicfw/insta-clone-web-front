import Image from 'next/image';
import imageAddress from 'utils/imageAddress';
import * as Type from './type';
import * as Style from './style';
import { FC } from 'react';

const ProfilePicture: FC<Type.ProfilePictureProps> = (
  { imagePath, width, height },
  props
) => {
  return (
    <Style.ProfilePictureContainer>
      <Image
        width={width}
        height={height}
        src={imageAddress(imagePath)}
        className="profile-pic"
        {...props}
      />
    </Style.ProfilePictureContainer>
  );
};

export default ProfilePicture;
