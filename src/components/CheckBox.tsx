import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { FC } from 'react';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// const data: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut'];

interface CheckboxType {
  checked: boolean;
  handleToggleCheck:
    | ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void)
    | undefined;
}

export const Checkboxes: FC<CheckboxType> = ({ checked, handleToggleCheck }) => {
  return (
    <div>
      <Checkbox checked={checked} {...label} defaultChecked onChange={handleToggleCheck} />
    </div>
  );
};
