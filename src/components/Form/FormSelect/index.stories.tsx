import React from 'react';
import PremedFormSelect from '.';
import PremedTheme from '../../Theme/index';

import { Formik, Form, Field } from 'formik';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid, Typography, Divider, Box } from '@mui/material';
import { Description, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';

const participacion = [
  {
    label: 'Doctorado',
    value: 2,
  },
  {
    label: 'Maestría',
    value: 1,
  },
];

const initialValues = {
  participacion: 1,
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
                fullWidth
                label='Participacion'
                name='participacion'
                options={participacion}
                component={PremedFormSelect}
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
  title: 'Select/PremedFormSelect',
  component: PremedFormSelect,
  parameters: {
    docs: {
      description: {
        component: '- Componente ',
      },
      page: () => <EstadoComponente />,
    },
  },
} as ComponentMeta<typeof PremedFormSelect>;

const Template: ComponentStory<typeof PremedFormSelect> = (args) => <PremedFormSelect {...args} />;

export const Estandar = Template.bind({});
Estandar.args = {
  color: 'secondary.main',
  textColor: 'secondary.main',
};
