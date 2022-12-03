import React from 'react';
import PremedFullDialog from '.';
import PremedTheme from '../Theme/index';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Grid, Typography, Divider, Box, Button } from '@mui/material';
import { Description, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';

const EstadoComponente = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <PremedTheme>
      <Box
        sx={{
          margin: 'auto',
          maxWidth: '100%',
          maxHeight: '100%',
          flexGrow: 0,
        }}
      >
        <div>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              margin: 0,
              padding: 0,
            }}
          >
            <Typography variant='h2'> | TABS |</Typography>
            <Typography variant='subtitle1'> División por medio de tabs </Typography>
            <Divider sx={{ width: '80%' }} />
            <Description />
            <Divider sx={{ width: '80%' }} />
          </Grid>
        </div>
        <div>
          <Button
            variant='outlined'
            onClick={() => {
              setOpen(true);
            }}
          >
            Open dialog
          </Button>
          <PremedFullDialog
            id='premed-full-dialog-1'
            handleClose={() => {
              setOpen(false);
            }}
            open={open}
            title='Agregar estudiante'
          >
            <p>Hola</p>
          </PremedFullDialog>
          <Divider sx={{ width: '80%' }} />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </div>
      </Box>
    </PremedTheme>
  );
};

export default {
  title: 'Dialog/FullDialog',
  component: PremedFullDialog,
  parameters: {
    docs: {
      description: {
        component: '- Componente ',
      },
      page: () => <EstadoComponente />,
    },
  },
} as ComponentMeta<typeof PremedFullDialog>;

const Template: ComponentStory<typeof PremedFullDialog> = (args) => <PremedFullDialog {...args} />;

export const Estandar = Template.bind({});
Estandar.args = {
  titulo: 'No Aprobado',
  width: '100%',
};
