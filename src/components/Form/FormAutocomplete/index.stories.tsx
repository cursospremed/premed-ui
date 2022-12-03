import React from 'react';
import PremedFormAutocomplete from '.';
import PremedTheme from '../../Theme/index';

import { Formik, Form, Field } from 'formik';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid, Typography, Divider, Box } from '@mui/material';
import { Description, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';

const personal = [
  {
    id: 1,
    nombre: 'Ed',
    apellidoPaterno: 'M',
    apellidoMaterno: 'V',
  },
  {
    id: 2,
    nombre: 'Ed',
    apellidoPaterno: '34',
    apellidoMaterno: '34',
  },
  {
    id: 3,
    nombre: 'Ed',
    apellidoPaterno: '34',
    apellidoMaterno: '34',
  },
];

const initialValues = {
  id: null,
  nombre: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
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
            onSubmit={() => {
              console.log('Enviado');
            }}
          >
            <Form>
              <Field
                id='nombre'
                name='nombre'
                label='Asesores Internos'
                options={personal}
                getOptionLabel={({ id, nombre, apellidoPaterno, apellidoMaterno }) =>
                  `${id} - ${nombre} ${apellidoPaterno} ${apellidoMaterno}`
                }
                unstructured={[
                  { key: 'id', defaultValue: null },
                  { key: 'nombre', defaultValue: '' },
                  { key: 'apellidoPaterno', defaultValue: '' },
                  { key: 'apellidoMaterno', defaultValue: '' },
                ]}
                component={PremedFormAutocomplete}
              />
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
  title: 'Select/PremedFormAutocomplete',
  component: PremedFormAutocomplete,
  parameters: {
    docs: {
      description: {
        component: '- Componente ',
      },
      page: () => <EstadoComponente />,
    },
  },
} as ComponentMeta<typeof PremedFormAutocomplete>;

const Template: ComponentStory<typeof PremedFormAutocomplete> = (args) => (
  <PremedFormAutocomplete {...args} />
);

export const Estandar = Template.bind({});
Estandar.args = {
  color: 'secondary.main',
  textColor: 'secondary.main',
};
