// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react';

import { Box, Grid, Typography } from '@mui/material';

type Color = {
  textColor: string;
  titleColor: string;
};

interface NewGridProfileProps extends Color {
  startIndex: number;
  finalIndex: number;
  data: object;
  flexD: string;
  align: string;
} // NewGridProfileProps

interface PropiedadesProps extends Color {
  propertyKey: string;
  value: number | string | boolean | null;
  flexD: string;
  align: string;
}

const Propiedad: React.FC<PropiedadesProps> = ({
  propertyKey,
  value,
  textColor,
  titleColor,
  flexD,
  align,
}) => {
  const valueAsString = `${value}`;
  return (
    <>
      {value !== null && value !== undefined && valueAsString !== ' ' && valueAsString !== '' && (
        <Box sx={{ display: 'flex', flexDirection: flexD }} alignItems={align}>
          <Typography variant='body1' display='inline' color={titleColor} sx={{ ml: 1 }}>
            <b>{capitalizeFirstLetter(propertyKey)}:</b>
          </Typography>
          <Typography variant='body1' display='inline' sx={{ ml: 1 }} color={textColor}>
            {`${value}`}
          </Typography>
        </Box>
      )}
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NewGridProfile = ({
  data = {},
  startIndex = 0,
  finalIndex = 0,
  textColor = '',
  titleColor = '',
  flexD = '',
  align = '',
}: NewGridProfileProps) => {
  return (
    <Grid item>
      {Object.entries(data)
        .slice(startIndex, finalIndex)
        .map(([key, value], index) => (
          <Propiedad
            propertyKey={key}
            key={`premed-profile-card-${key.replace(' ', '')}-${index}`}
            value={value}
            textColor={textColor}
            titleColor={titleColor}
            flexD={flexD}
            align={align}
          />
        ))}
    </Grid>
  );
}; // NewGridProfile

const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}; // capitalizeFirstLetter
