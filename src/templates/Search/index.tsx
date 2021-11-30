import { CardHeader, CardContent } from '@mui/material';
import VehicleTypeSelect from '../../components/VehicleTypeSelect';
import BrandSelect from '../../components/BrandSelect';
import ModelSelect from './../../components/ModelSelect';
import YearSelect from './../../components/YearSelect';

import { Form } from './styles';

const Search = () => (
  <Form variant="outlined">
    <CardHeader title="Pesquisar" align="center" />
    <CardContent>
      <VehicleTypeSelect />
      <BrandSelect />
      <ModelSelect />
      <YearSelect />
    </CardContent>
  </Form>
);

export default Search;
