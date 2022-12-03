import React from 'react';
import PremedTheme from '../Theme';
import PremedCommentsCard from '../CommentsCard';
import PremedContainer from '.';

import { Grid, Typography, Divider, Box, Button, Container } from '@mui/material';
import { Description, ArgsTable, Stories, PRIMARY_STORY, Primary } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GridColDef, GridApi, GridCellValue, DataGrid } from '@mui/x-data-grid';

const listaComentarios = [
  {
    foto: 'https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png',
    nombre: 'Asuncion Async Lorem',
    cargo: 'Gestora de Posgrado',
    evaluacion: 'No aprobado',
    fecha: '9/21/2021',
    comentario: 'Por que quise',
  },
  {
    // foto: 'https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png',
    nombre: 'Bruce algun',
    cargo: 'Coordinador de unidad',
    evaluacion: 'No aprobado',
    fecha: '9/21/2021',
    comentario: 'Por que quise',
  },
];

const columns: GridColDef[] = [
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== '__check__' && !!c)
          .forEach((c) => (thisRow[c.field] = params.getValue(params.id, c.field)));

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return <Button onClick={onClick}>Click</Button>;
    },
  },
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Table = () => {
  return (
    <Container maxWidth='xl'>
      <div style={{ height: '80vh', width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      </div>
    </Container>
  );
};

const componentes = [
  {
    componente: <PremedCommentsCard data={listaComentarios} id='card' />,
    titulo: 'Participantes',
    alignVertical: 'top',
    alignHorizontal: 'left',
    alignTitulo: 'left',
  },
  // {
  //   componente: <PremedCommentsCard data={listaComentarios} id='card' />,
  //   titulo: 'Participantes',
  // },
  {
    alignHorizontal: 'right',
    componente: <Table />,
  },
];

export default {
  title: 'Containers/Premed Container',
  component: PremedContainer,
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
                <Primary />
                <PremedContainer data={componentes} />
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
} as ComponentMeta<typeof PremedContainer>;

// export const PruebaCard= () => <PremedProfileCard data={users} />;

const Template: ComponentStory<typeof PremedContainer> = (args) => <PremedContainer {...args} />;

export const Estandar = Template.bind({});
Estandar.args = {
  data: componentes,
};
