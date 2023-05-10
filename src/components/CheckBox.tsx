import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// const data: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut'];

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);
  const handleClick = () => setChecked(!checked);

  return (
    <div>
      <Checkbox {...label} defaultChecked onChange={handleClick} />
    </div>
  );
}
