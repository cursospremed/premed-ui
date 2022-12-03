import React from 'react';
import PremedFormCheckBox from '.';
import PremedTheme from '../../Theme/index';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Formik, Form, Field } from 'formik';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid, Typography, Divider, Box, Button } from '@mui/material';
import { Description, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';

const initialValues = {
  verify: false,
};

const EstadoComponente = () => {
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
          <Formik
            initialValues={initialValues}
            onSubmit={(value) => {
              console.log(value);
            }}
          >
            <Form>
              <Field
                id='verify'
                name='verify'
                label='Asesores Internos'
                component={PremedFormCheckBox}
              />
              <Button variant='contained' type='submit'>
                Agregar
              </Button>
            </Form>
          </Formik>
          <Divider sx={{ width: '80%' }} />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </div>
      </Box>
    </PremedTheme>
  );
};

export default {
  title: 'CheckBox/PremedFormCheckBox',
  component: PremedFormCheckBox,
  parameters: {
    docs: {
      description: {
        component: '- Componente ',
      },
      page: () => <EstadoComponente />,
    },
  },
} as ComponentMeta<typeof PremedFormCheckBox>;

const Template: ComponentStory<typeof PremedFormCheckBox> = (args) => (
  <PremedFormCheckBox {...args} />
);

export const Estandar = Template.bind({});
Estandar.args = {
  color: 'secondary.main',
  textColor: 'secondary.main',
};
