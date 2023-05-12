import * as React from 'react';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import { Icons } from './utils/icons';
import { Modal } from './Modal';
import { useContext } from 'react';
import { ModalContext } from './utils/ModalContext';

export function ButtonPlus({ disabled }: { disabled: boolean }) {
  // function handleClick(event: Event): void {}
  const { modal, open, close } = useContext(ModalContext);
  return (
    <Stack direction="row" spacing={2} width={140}>
      <Button
        variant="contained"
        disabled={disabled}
        onClick={(open) => {
          {
            modal && (
              <Modal title="Create new product" onClose={close}>
                {/* <CreateProduct onCreate={createHandler} /> */}
              </Modal>
            );
          }
          console.log(open);
        }}
      >
        Add +
      </Button>
    </Stack>
  );
}
