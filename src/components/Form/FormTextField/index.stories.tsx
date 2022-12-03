import React from 'react';
import PremedFormTextField from '.';
import PremedTheme from '../../Theme/index';
import PremedSectionTitle from '../../SectionTitle';

import { Formik, Form, Field } from 'formik';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid, Typography, Divider, Box } from '@mui/material';
import { Description, ArgsTable, Stories, PRIMARY_STORY, Primary } from '@storybook/addon-docs';

const name = 'name';

const initialValues = {
  name: null,
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
            <Typography variant='h2'> | Text Field |</Typography>
            <Typography variant='subtitle1'> Cuadro de texto </Typography>
            <br />
            <Divider sx={{ width: '80%' }} />
            <Description />
            <Divider sx={{ width: '80%' }} />
            <p />
          </Grid>
        </div>
        <div>
          <p />
          <PremedSectionTitle label='Parámetros' variant='h5' bgcolor='secondary' />
          <br />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <div>
            <Box
              sx={{
                margin: 'auto',
                maxWidth: '100%',
                maxHeight: '100%',
                flexGrow: 0,
              }}
            >
              <Grid
                container
                justifyContent='center'
                alignItems='left'
                sx={{
                  display: 'flex',
                  pb: 2,
                }}
                flexDirection='column'
              ></Grid>
            </Box>
          </div>
          <PremedSectionTitle label='Códigos y demostración' variant='h5' />
          <p />
          <Stories />
        </div>
      </Box>
    </PremedTheme>
  );
};

export default {
  title: 'Text/PremedFormTextField',
  component: PremedFormTextField,
  argTypes: {
    id: {
      description: 'Texto o elemento que se estará visualizando en el textfield.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'null',
        },
      },
      control: false,
    },
    label: {
      description: 'Texto o elemento que se estará visualizando en el textfield.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'null',
        },
      },
    },
    name: {
      description: 'Texto o elemento que se estará visualizando en el textfield.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'null',
        },
      },
      control: false,
    },
  },
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: [],
        locales: '',
      },
    },
    docs: {
      description: {
        component: '- Componente ',
      },
      page: () => <EstadoComponente />,
    },
  },
} as ComponentMeta<typeof PremedFormTextField>;

const Template: ComponentStory<typeof PremedFormTextField> = (args) => (
  <>
    <PremedTheme>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          console.log('Enviado');
        }}
      >
        <Form>
          <Field fullWidth {...args} component={PremedFormTextField} />
        </Form>
      </Formik>
    </PremedTheme>
  </>
);

export const Estandar = Template.bind({});
Estandar.args = {
  id: 'premed',
  label: 'Label',
  name: 'Label',
};
