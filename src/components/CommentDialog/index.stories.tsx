import React from 'react';
import PremedCommentDialog from '.';
import PremedTheme from '../Theme/index';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Grid, Typography, Divider, Box, Button } from '@mui/material';
import { Description, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';

const user = {
  Instrucciones:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum magni ex assumenda possimus ab alias nobis est unde voluptatum, consequatur numquam deleniti laborum blanditiis? Aliquid inventore a consequatur voluptate. ',
};

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
          <PremedCommentDialog
            data={user}
            handleClose={() => {
              setOpen(false);
            }}
            open={open}
            onClick={(comentario: string) => {
              console.log(comentario);
            }}
            titulo='Evaluación de Eduardo Miguel'
            label='Comentarios'
            instruccion={true}
          />
          <Divider sx={{ width: '80%' }} />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </div>
      </Box>
    </PremedTheme>
  );
};

export default {
  title: 'Dialog/CommentDialog',
  component: PremedCommentDialog,
  parameters: {
    docs: {
      description: {
        component: '- Componente ',
      },
      page: () => <EstadoComponente />,
    },
  },
} as ComponentMeta<typeof PremedCommentDialog>;

const Template: ComponentStory<typeof PremedCommentDialog> = (args) => (
  <PremedCommentDialog {...args} />
);

export const Estandar = Template.bind({});
Estandar.args = {
  data: user,
  titulo: 'No Aprobado',
  width: '100%',
};
