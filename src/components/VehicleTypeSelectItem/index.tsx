import { FormEvent, ReactNode } from 'react';
import {
  Paper,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';

import { InputHidden } from './styles';

interface IVehicleTypeSelectItemProps {
  isSelected: boolean;
  icon: ReactNode;
  iconColor: string;
  placeholder: string;
  value: string;
  handleOnChange: (event: FormEvent<HTMLInputElement>) => void;
}

const VehicleTypeSelectItem = ({
  isSelected,
  icon,
  iconColor,
  placeholder,
  value,
  handleOnChange,
}: IVehicleTypeSelectItemProps) => (
  <Paper
    elevation={3}
    component="label"
    sx={{ cursor: `pointer`, bgcolor: isSelected ? iconColor : `#fff` }}
  >
    <ListItem component="div">
      <ListItemAvatar>
        <Avatar
          sx={{
            bgcolor: isSelected ? `#fff` : iconColor,
            color: isSelected ? iconColor : `#fff`,
          }}
        >
          {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={placeholder}
        sx={{ color: isSelected ? `#fff` : `initial` }}
      />
      <InputHidden
        type="radio"
        name="vehicleType"
        value={value}
        onChange={handleOnChange}
      />
    </ListItem>
  </Paper>
);

export default VehicleTypeSelectItem;
