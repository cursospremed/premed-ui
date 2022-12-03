import React from 'react';
import PremedSectionTitle from '.';
import PremedTheme from '../Theme/index';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid, Typography, Divider, Box, Link } from '@mui/material';
import { Description, ArgsTable, Stories, PRIMARY_STORY, Primary } from '@storybook/addon-docs';

export default {
  title: 'Title/Premed Section Title',
  component: PremedSectionTitle,
  argTypes: {
    label: {
      description: 'Texto que será visualizado como título.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Título',
        },
      },
    },
    bgcolor: {
      description: 'Es el color del contenedor del título que se visualizará.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'primary',
        },
      },
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    color: {
      description: 'Es el color del texto del título que se visualizará.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'primary',
        },
      },
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    variant: {
      description: 'Es el tamaño del texto del título que se visualiará.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'h4',
        },
      },
      options: ['h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    elevation: {
      description: 'Es el tamaño de la sombras del título que se visualiará.',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: '2',
        },
      },
      control: { type: 'number' },
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
        component:
          '- Componente para mostrar un título de manera dinámica en las diferentes seciones de la página.',
      },
      page: () => (
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
                <Typography variant='h2'> | Section Title |</Typography>
                <Typography variant='subtitle1'> Título de sección </Typography>
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
      ),
    },
  },
} as ComponentMeta<typeof PremedSectionTitle>;

const Template: ComponentStory<typeof PremedSectionTitle> = (args) => (
  <>
    <PremedTheme>
      <PremedSectionTitle {...args} />
    </PremedTheme>
  </>
);

export const Estandar = Template.bind({});
Estandar.args = {
  label: 'Título',
  elevation: 2,
  bgcolor: 'primary',
  color: 'primary',
  variant: 'h4',
};

export const FondoSecondario = Template.bind({});
FondoSecondario.args = {
  label: 'Título',
  bgcolor: 'secondary',
  variant: 'h5',
};
FondoSecondario.story = {
  parameters: {
    docs: {
      storyDescription: 'Título de sección con color de fondo secundario y una variante de h5.',
    },
  },
};

export const TextoSecondario = Template.bind({});
TextoSecondario.args = {
  label: 'Título',
  color: 'secondary',
  variant: 'h6',
};
TextoSecondario.story = {
  parameters: {
    docs: {
      storyDescription: 'Título de sección con color de texto secundario y una variante de h6.',
    },
  },
};

export const ConElevacion = Template.bind({});
ConElevacion.args = {
  label: 'Título',
  elevation: 10,
};
ConElevacion.story = {
  parameters: {
    docs: {
      storyDescription: 'Título de sección con una elevación de 10.',
    },
  },
};
