import React from 'react';
import PremedTabs from '.';
import PremedProfileCard from '../ProfileCard';
import PremedTheme from '../Theme/index';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid, Typography, Divider, Box, Container, Button } from '@mui/material';
import { Description, ArgsTable, Stories, PRIMARY_STORY, Primary } from '@storybook/addon-docs';
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';

const users = {
  name: 'Eduardo Miguel Victoria Sánchez',
  unidad: 'San Cristobal de las casas',
  matricula: 235434,
  matricula2: 235434,
  matricula3: 235434,
  name2: 'Eduardo Miguel Victoria Sánchez',
  matricula5: 235434,
};

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

const data = [
  {
    titulo: 'Primero',
    componente: <Table />,
    description: 'Tab número 1',
    margin: 3,
    bold: true,
    variant: 'h2',
  },
  {
    titulo: 'Segundo',
    componente: <span>Hola</span>,
    description: 'Tab número 1',
  },
  {
    titulo: 'Tercero',
    componente: <span>Hola23</span>,
  },
  {
    titulo: 'ProfileCard',
    componente: <PremedProfileCard data={users} />,
  },
  {
    titulo: 'Quinto',
    componente: <span>Hola54</span>,
  },
  {
    titulo: 'sadas',
    componente: <span>Hola54</span>,
  },
];

export default {
  title: 'Tabs/PremedTabs',
  component: PremedTabs,
  parameters: {
    docs: {
      description: {
        component: '- Componente ',
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
                <Typography variant='h2'> | TABS |</Typography>
                <Typography variant='subtitle1'> División por medio de tabs </Typography>
                <Divider sx={{ width: '80%' }} />
                <Description />
                <Divider sx={{ width: '80%' }} />
              </Grid>
            </div>
            <div>
              {/* <PremedTabs data={data} /> */}
              <Primary />
              <Divider sx={{ width: '80%' }} />
              <ArgsTable story={PRIMARY_STORY} />
              <Stories />
            </div>
          </Box>
        </PremedTheme>
      ),
    },
  },
} as ComponentMeta<typeof PremedTabs>;

const Template: ComponentStory<typeof PremedTabs> = (args) => (
  <>
    <PremedTheme>
      <PremedTabs {...args} />
    </PremedTheme>
  </>
);

export const Estandar = Template.bind({});
Estandar.args = {
  data: data,
};
Estandar.decorators = [
  (Story: any) => (
    <div style={{ margin: 'none' }}>
      <Story />
    </div>
  ),
];
