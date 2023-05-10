import { Box } from '@mui/material';
import RangeSlider from 'components/Slider';
import { WeekDay } from 'components/WeekDay';
import React from 'react';
import BasicSelect from './ButtonAdd';
import { Checkboxes } from './CheckBox';

function Schedule() {
  const [checked, setChecked] = React.useState(true);
  const handleClick = () => setChecked(!checked);

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems={'center'} m={3} width={600}>
        <WeekDay />
        <Checkboxes checked={checked} handleToggleCheck={handleClick} />
        <RangeSlider disabled={!checked} />
        <BasicSelect />
      </Box>
    </>
  );
}

export default Schedule;
