import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styled from '@emotion/styled';

function valuetext(value: number) {
  return `${value}°C`;
}

const PrettoSlider = styled(Slider)({
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#1976d2',
    transformOrigin: 'bottom left',
    transform: 'translate(20%, -100%) rotate(-45deg) scale(0)',
    // '&.MuiSlider-valueLabelLabel': {
    //   transform: 'translate(50%, -100%) rotate(0deg) scale(0)',
    // },
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
  },
});

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([14, 18]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const getText = (value: number | number[]) => `${value}`;

  const customMarks = [
    {
      value: 6,
      label: '6',
    },
    {
      value: 12,
      label: '12',
    },
    {
      value: 18,
      label: '18',
    },
    {
      value: 24,
      label: '24',
    },
  ];

  return (
    <Box display="flex" flexDirection="column" m={10} width={500}>
      <PrettoSlider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={getText}
        step={1}
        min={6}
        max={24}
        marks={customMarks}
        aria-labelledby="range-slider"
      />
    </Box>
  );
}
