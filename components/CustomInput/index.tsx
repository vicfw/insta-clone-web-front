import { InputBaseProps } from '@mui/material';
import { Input } from './style';

export default (props: InputBaseProps) => {
  return (
    <>
      {/* <InputLabel shrink htmlFor="customInput">
        Bootstrap
      </InputLabel> */}
      <Input id="customInput" {...props} />
    </>
  );
};
