import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall() {
  const [sport, setSport] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSport(event.target.value);
  };

  const sports = ['Football', 'Basketball', 'Volleyball', 'Tennis', 'Squash', 'Speaking club'];

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Event</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sport}
        label="Event"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {sports.map((sport) => (
          <MenuItem key={sport} value={sport}>
            {sport}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
