import { Dispatch } from 'react';

export interface ModalProps {
  closeModalSetState: Dispatch<boolean>;
}

export interface SearchResultType {
  id: number;
  imagePath: string;
  username: string;
  name: string;
}
