import { Box } from '@mui/material';
import Checkboxes from 'components/CheckBox';
import RangeSlider from 'components/Slider';
import { WeekDay } from 'components/WeekDay';
import React from 'react';
import BasicSelect from './ButtonAdd';

const chk = true;

function Schedule() {
  if (chk === true) {
    return (
      <>
        <Box display="flex" justifyContent="space-between" alignItems={'center'} m={3} width={600}>
          <WeekDay />
          <Checkboxes />
          <RangeSlider chk={true} />
          <BasicSelect />
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={'center'}
          m={10}
          width={'100%'}
        >
          <WeekDay />
          <Checkboxes />
          <RangeSlider chk={false} />
          <BasicSelect />
        </Box>
      </>
    );
  }
}

export default Schedule;
