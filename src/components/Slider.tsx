import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styled from '@emotion/styled';
import './styles.css';
import classnames from 'classnames';

// function valuetext(value: number) {
//   return `${value}°C`;
// }

interface SliderTrackProps {
  className: string;
  style: React.CSSProperties;
}

function ValueLabelComponent(props: SliderTrackProps) {
  // console.log(props);

  const { className, style } = props;
  return (
    <div className={classnames(className, 'track_style')} style={style}>
      <div></div>
    </div>
  );
}

const PrettoSlider = styled(Slider)({
  '& .MuiSlider-valueLabel': {
    lineHeight: 1,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 25,
    height: 25,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#1976d2',
    transformOrigin: 'bottom left',
    transform: 'translate(20%, -100%) rotate(-45deg) scale(0)',

    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
  },
  '& 	.MuiSlider-track': {
    color: '##4caf50', ////color of the slider outside  teh area between thumbs
  },
  // '&.MuiSlider-valueLabelLabel': {
  //   transform: 'translate(50%, -100%) rotate(145deg) scale(0)',
  // },
});

export default function RangeSlider({ disabled }: { disabled: boolean }) {
  const dafaultValues: number[] = [14, 16];
  const [value, setValue] = React.useState<number[]>(dafaultValues);

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
    <Box display="flex" flexDirection="column" m={3} width={500}>
      <PrettoSlider
        track="normal"
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
        components={{
          Track: ValueLabelComponent,
        }}
        disabled={disabled}
      />
    </Box>
  );
}
