import { Alert, Snackbar } from '@mui/material';
import { FC } from 'react';
import * as Type from './types';

const SnackAlert: FC<Type.SnackAlertProps> = ({
  message,
  show,
  vertical = 'top',
  horizontal = 'right',
}) => {
  return (
    <Snackbar
      open={show}
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={4000}
      color="success"
    >
      <Alert severity="error" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackAlert;
