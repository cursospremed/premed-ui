import React from 'react';
import PremedCommentsCard from '.';
import PremedTheme from '../Theme';

import { Grid, Typography, Divider, Box } from '@mui/material';
import { Description, ArgsTable, Stories, PRIMARY_STORY, Primary } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PremedSectionTitle from '../SectionTitle';

export default {
  title: 'Cards/Premed Comments Card',
  component: PremedCommentsCard,
  argTypes: {
    id: {
      description: 'Es el id que servirá de identificación para la cards de comentarios.',
      table: {
        type: {
          summary: 'string',
        },
      },
      control: false,
    },
    data: {
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
    docs: {
      options: {
        storySort: {
          method: 'alphabetical',
          order: [],
          locales: '',
        },
      },
      description: {
        component:
          'El componente de *** `` <PremedProfileCard /> ``*** se usa para la visualización de la información con la que cuenta una persona.' +
          '\n\n Se ingresan los datos y de forma **dinámica** se renderizarán dentro del componente',
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
                <Typography variant='h2'> | Comments Card |</Typography>
                <Typography variant='subtitle1'> Tarjeta de información de comentarios </Typography>
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
} as ComponentMeta<typeof PremedCommentsCard>;

const listaComentarios = [
  {
    foto: 'https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png',
    nombre: 'Asuncion Async Lorem',
    cargo: 'Gestora de Posgrado',
    evaluacion: 'No aprobado',
    fecha: '9/21/2021',
    comentario:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ducimus soluta sapiente minima neque ssddf excepturi quasi laborum quam expedita accusantium, natus repellendus, libero, consequuntur maiores impedit a quidem officia eaque.',
  },
  {
    // foto: 'https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png',
    nombre: 'Bruce algun',
    cargo: 'Coordinador de unidad',
    evaluacion: 'No aprobado',
    fecha: '9/21/2021',
    comentario: 'Por que quise',
  },
  {
    foto: 'https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png',
    nombre: 'Bruce algun',
    cargo: 'Coordinador de unidad',
    evaluacion: 'No aprobado',
    fecha: '9/21/2021',
    comentario: 'Por que quise',
  },
];

// export const PruebaCard = () => <PremedCommentsCard data={listaComentarios} />;

const Template: ComponentStory<typeof PremedCommentsCard> = (args) => (
  <>
    <PremedTheme>
      <PremedCommentsCard {...args} />
    </PremedTheme>
  </>
);

export const Estandar = Template.bind({});
Estandar.args = {
  id: 'premed-comments-card',
  data: listaComentarios,
  labelContenido: 'Comentario:',
};
