import { ImageProps } from 'next/image';

type CustomImageProps = Omit<ImageProps, 'src'>;

export interface ProfilePictureProps extends CustomImageProps {
  imagePath: string;
  width: number;
  height: number;
}
