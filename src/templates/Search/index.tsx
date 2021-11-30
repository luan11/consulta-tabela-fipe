import { CardHeader, CardContent } from '@mui/material';
import VehicleTypeSelect from '../../components/VehicleTypeSelect';

import { Form } from './styles';

const Search = () => (
  <Form variant="outlined">
    <CardHeader title="Pesquisar" align="center" />
    <CardContent>
      <VehicleTypeSelect />
    </CardContent>
  </Form>
);

export default Search;
