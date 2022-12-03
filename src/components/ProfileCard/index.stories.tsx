import React from 'react';
import PremedProfileCard from '.';
import PremedTheme from '../Theme';

import { Grid, Typography, Divider, Box } from '@mui/material';
import { Description, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Cards/Profile Card',
  component: PremedProfileCard,
  argTypes: {},
  parameters: {
    docs: {
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
                <Typography variant='h2'> | Profile Card |</Typography>
                <Typography variant='subtitle1'> Tarjeta de información de perfil </Typography>
                <p></p>
                <Divider sx={{ width: '80%' }} />
                <Description />
                <Divider sx={{ width: '80%' }} />
                <p></p>
              </Grid>
            </div>
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
                <PremedProfileCard data={users} img={img} />
                <p></p>
                <Divider sx={{ width: '80%' }} />
              </Grid>
              <ArgsTable story={PRIMARY_STORY} />
              <Stories />
            </div>
          </Box>
        </PremedTheme>
      ),
    },
  },
} as ComponentMeta<typeof PremedProfileCard>;

const users = {
  idTutorSinodal: 100,
  nombre: 'Diego',
  unidad: 'Sancristobal',
  grado: 'Dr',
  gradoGeneral: 'Doctorado',
  correo: 'apoyo@premed.com',
  idParticipacion: 2,
  'Tipo participacion': 'Doctorado',
  url: 'htttp',
  insitucion: '',
  argumentacion: 0,
  'Estatus General': false,
  tipoAcademico: null,
  tipoAcademico2: undefined,
};

const img = 'https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png';

// export const PruebaCard= () => <PremedProfileCard data={users} />;

const Template: ComponentStory<typeof PremedProfileCard> = (args) => (
  <PremedProfileCard {...args} />
);

export const Estandar = Template.bind({});
Estandar.args = {
  data: users,
  img: 'https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png',
  sizeRow: 4,
};
