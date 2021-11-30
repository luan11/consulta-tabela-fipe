import { FormEvent } from 'react';
import { Grid, Typography } from '@mui/material';
import { blue, red, green } from '@mui/material/colors';
import { AiFillCar } from 'react-icons/ai';
import { FaMotorcycle } from 'react-icons/fa';
import { ImTruck } from 'react-icons/im';

import useSearchContext from '../../hooks/useSearchContext';
import VehicleTypeSelectItem from '../VehicleTypeSelectItem';

const VehicleTypeSelect = () => {
  const { vehicleType, setVehicleType } = useSearchContext();

  const isSelected = (value: string) => value === vehicleType;

  const handleOnChange = (event: FormEvent<HTMLInputElement>) =>
    setVehicleType(event.currentTarget.value);

  return (
    <>
      <Typography gutterBottom>Consultar por</Typography>
      <Grid
        container
        spacing={2}
        gap={2}
        sx={{ width: `100%`, margin: `0 0 16px` }}
      >
        <VehicleTypeSelectItem
          isSelected={isSelected(`cars`)}
          icon={<AiFillCar />}
          iconColor={blue[700]}
          placeholder="Carros"
          value="cars"
          handleOnChange={handleOnChange}
        />
        <VehicleTypeSelectItem
          isSelected={isSelected(`motorcycles`)}
          icon={<FaMotorcycle />}
          iconColor={red[700]}
          placeholder="Motos"
          value="motorcycles"
          handleOnChange={handleOnChange}
        />
        <VehicleTypeSelectItem
          isSelected={isSelected(`trucks`)}
          icon={<ImTruck />}
          iconColor={green[700]}
          placeholder="Caminhões"
          value="trucks"
          handleOnChange={handleOnChange}
        />
      </Grid>
    </>
  );
};

export default VehicleTypeSelect;
