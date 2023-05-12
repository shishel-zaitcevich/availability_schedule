import { Box } from '@mui/material';
import RangeSlider from 'components/Slider';
import { WeekDay } from 'components/WeekDay';
import React, { useContext } from 'react';
import BasicSelect from './Select';
import { Checkboxes } from './CheckBox';
import { ButtonPlus } from './ButtonPlus';
import { ModalContext } from './utils/ModalContext';
import { Modal } from './Modal';

function Schedule() {
  const [checked, setChecked] = React.useState(true);
  const handleClick = () => setChecked(!checked);

  const { modal, open, close } = useContext(ModalContext);
  // const createHandler = (product: IProduct) => {
  //   close();
  //   addProduct(product);
  // };

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems={'center'} m={3} width={600}>
        <WeekDay />
        <Checkboxes checked={checked} handleToggleCheck={handleClick} />
        <RangeSlider disabled={!checked} />
        {/* <BasicSelect /> */}
        <ButtonPlus disabled={!checked} />
        {modal && (
          <Modal title="Create new product" onClose={close}>
            {/* <CreateProduct onCreate={createHandler} /> */}
          </Modal>
        )}
      </Box>
    </>
  );
}

export default Schedule;
