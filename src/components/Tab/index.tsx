import * as React from 'react';

import { Box, Typography, Tabs, Tab } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  color: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, color, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, bgcolor: color }}>
          <Typography component='div'>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export type Componente = {
  titulo: string;
  componente: React.ReactElement;
  margin?: number;
  description?: string;
  variant?:
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'overline';
  bold?: boolean;
};

interface PremedTabsProps {
  data: Componente[];
  textColor?: string;
  color?: string;
  align?: 'center' | 'left' | 'right';
  activeColor?: string;
  activeTextColor?: string;
}

/**
 * Primary UI component for user interaction sdsd
 */
const PremedTabs = ({
  data = [],
  textColor = 'text.primary',
  color = 'background.default',
  align = 'center',
  activeColor = 'primary.main',
  activeTextColor = 'white',
}: PremedTabsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
        flexGrow: 0,
      }}
    >
      <Box
        sx={{
          justifyContent: align,
          display: 'flex',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            '& button:hover': { backgroundColor: activeColor, color: activeTextColor },
            '& button': { color: textColor },
            '& button:focus': { backgroundColor: color },
            '& button:active': { backgroundColor: activeColor, color: activeTextColor },
            '& button.Mui-selected': { backgroundColor: activeColor, color: activeTextColor },
          }}
          TabIndicatorProps={{
            sx: {
              display: 'none',
              background: 'primary.main',
            },
          }}
        >
          {data.map((object: any, index: number) => (
            <Tab key={`premed-tabs-${index}`} label={object.titulo} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {data.map((object: any, index: number) => (
        <TabPanel key={`premed-tabpanel-${index}`} value={value} index={index} color={color}>
          <Box sx={{ pl: object.margin }}>
            <Typography
              variant={object.variant ? object.variant : 'body2'}
              sx={{ fontWeight: object.bold ? 'bold' : 'none' }}
              component='div'
            >
              <p>{object.description}</p>
            </Typography>
          </Box>
          {object.componente}
        </TabPanel>
      ))}
    </Box>
  );
};

export default PremedTabs;
