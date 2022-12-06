import React from 'react';
import PremedButtonSection from '.';
import PremedTheme from '../../Theme';
import PremedContainer from '../../Container';
import { Grid, Typography, Divider, Box } from '@mui/material';
import { Functions } from '@mui/icons-material';
import { Description, ArgsTable, Stories, PRIMARY_STORY, Primary } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const botones = [
  {
    componente: (
      <PremedButtonSection
        label='Materias'
        icon={<Functions />}
        variant='outlined'
        sx={{ borderColor: 'red' }}
      />
    ),
    width: 6,
    alignHorizontal: 'right',
  },
  {
    componente: (
      <PremedButtonSection
        label='Simuladores'
        icon={<Functions />}
        variant='outlined'
        sx={{ borderColor: 'blue' }}
      />
    ),
    width: 6,
  },
  {
    componente: (
      <PremedButtonSection
        label='Materias2'
        icon={<Functions />}
        variant='outlined'
        sx={{ borderColor: 'yellow' }}
      />
    ),
    width: 6,
    alignHorizontal: 'right',
  },
  {
    componente: (
      <PremedButtonSection
        label='Extras'
        icon={<Functions />}
        variant='outlined'
        sx={{ borderColor: 'green' }}
      />
    ),
    width: 6,
  },
];

export default {
  title: 'Buttons/Button Section',
  component: PremedButtonSection,
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
              <Primary />
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
                <PremedButtonSection
                  label='Materias'
                  icon={<Functions />}
                  variant='outlined'
                  sx={{ borderColor: 'red', color: 'black' }}
                />
                <p></p>
                <PremedContainer data={botones} />
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
} as ComponentMeta<typeof PremedButtonSection>;

const Template: ComponentStory<typeof PremedButtonSection> = (args) => (
  <PremedButtonSection {...args} />
);

export const Estandar = Template.bind({});
Estandar.args = {
  label: 'Clic',
  icon: <p>asdasdas</p>,
};
