// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import PremedButtonFilePicker from '.';
import PremedTheme from '../Theme';
import PremedSectionTitle from '../SectionTitle';

import { UploadFile } from '@mui/icons-material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid, Divider, Box, Typography, Link } from '@mui/material';
import { PRIMARY_STORY, Stories, ArgsTable, Description, Primary } from '@storybook/addon-docs';

const data = ['.pdf', '.png'];
const onSelect = (e: any) => {
  console.log(e.target.files[0]);
};

export default {
  title: 'FilePicker/Premed ButtonFile Picker',
  component: PremedButtonFilePicker,
  argTypes: {
    children: {
      description: 'Texto o elemento que se estará visualizando en el botón.',
      table: {
        type: {
          summary: 'string || elemento',
        },
        defaultValue: {
          summary: 'Subir archivo',
        },
      },
    },
    fileType: {
      description: 'Extensiones de archivos que se le van a permitir seleccionar a los usuarios.',
      table: {
        type: {
          summary: 'Array<string>',
        },
        defaultValue: {
          summary: 'null',
        },
      },
      control: { type: 'array' },
    },
    onChange: {
      description:
        'Función que se va a ejecutar después de realizar la selección del archivo o archivos.',
      table: {
        type: {
          summary: '(e: any) => any',
        },
        defaultValue: {
          summary: 'null',
        },
      },
      control: false,
    },
    multiple: {
      description: 'Opción que determina si se permitirán seleccionar más de un archivo.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
      control: { type: 'boolean' },
    },
    color: {
      description: 'Es el color del botón que se visualizará.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'primary',
        },
      },
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      control: { type: 'select' },
    },
    variant: {
      description: 'Es el tipo de botón que se visualizará.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'text',
        },
      },
      options: ['contained', 'text', 'outlined'],
      control: { type: 'select' },
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
          '- Son botones que permiten a los usuarios elegir un archivo o archivos(s) con un solo toque. ',
      },
      page: () => (
        <PremedTheme>
          <Box
            sx={{
              margin: 'auto',
              maxWidth: '100%',
              maxHeight: '100%',
              flexGrow: 0,
              pb: 2,
            }}
          >
            <div id='header'>
              <Grid
                className='bgcolor'
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
                <Typography variant='h2'> | Button File Picker |</Typography>
                <Typography variant='subtitle1'> Botón de selección de archivos </Typography>
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
                  >
                    <Typography component='div' variant='body1'>
                      Los parámetros opcionales son aquellos con los que cuenta el componente de
                      <b> Button</b> de <b>MUI</b> el cual anexo en la documentación:
                      <ul>
                        <li>
                          <Link href='https://mui.com/material-ui/react-button/' underline='hover'>
                            {'Button MUI'}
                          </Link>
                        </li>
                        <li>
                          <Link href='https://mui.com/material-ui/api/button/' underline='hover'>
                            {'Button API MUI'}
                          </Link>
                        </li>
                      </ul>
                    </Typography>
                  </Grid>
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
} as ComponentMeta<typeof PremedButtonFilePicker>;

const Template: ComponentStory<typeof PremedButtonFilePicker> = (args) => (
  <>
    <PremedTheme>
      <PremedButtonFilePicker {...args} />
    </PremedTheme>
  </>
);

export const Estandar = Template.bind({});
Estandar.args = {
  children: 'Subir archivo',
  fileType: data,
  onChange: (e: any) => onSelect(e),
  multiple: false,
  color: 'primary',
  variant: 'text',
};

export const ConIcono = Template.bind({});
ConIcono.args = {
  children: <UploadFile />,
  fileType: data,
  onChange: (e: any) => onSelect(e),
  variant: 'text',
};
ConIcono.story = {
  parameters: {
    docs: {
      storyDescription:
        'Botón de selección de archivos que se muestra con un ícono, con variante de text',
    },
  },
};

export const ConTexto = Template.bind({});
ConTexto.args = {
  children: 'Subir archivo',
  fileType: data,
  onChange: (e: any) => onSelect(e),
  variant: 'contained',
  color: 'warning',
};
ConTexto.story = {
  parameters: {
    docs: {
      storyDescription:
        'Botón de selección de archivos que se muestra con un texto, con variante de contained y color de warning.',
    },
  },
};

export const ConTextoEIcono = Template.bind({});
ConTextoEIcono.args = {
  children: 'Subir archivo',
  fileType: data,
  onChange: (e: any) => onSelect(e),
  variant: 'outlined',
  color: 'info',
  endIcon: <UploadFile />,
};
ConTextoEIcono.story = {
  parameters: {
    docs: {
      storyDescription:
        'Botón de selección de archivos que se muestra con texto e ícono, con variante de outlined y color de info.',
    },
  },
};
