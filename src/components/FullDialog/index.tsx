import * as React from 'react';
import { Close } from '@mui/icons-material';
import { IconButton, Dialog, AppBar, Toolbar, Typography, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

type Props = {
  id: string;
  title: string;
  open: boolean;
  handleClose: () => void;
};

const PremedFullDialog: React.FC<React.PropsWithChildren<Props>> = ({
  id,
  title,
  open,
  handleClose,
  children,
}) => {
  return (
    <div>
      <Dialog id={id} fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        {children}
      </Dialog>
    </div>
  );
};

export default PremedFullDialog;
