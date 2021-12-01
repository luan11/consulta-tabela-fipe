import { CardHeader, CardContent, Alert } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import VehicleTypeSelect from '../../components/VehicleTypeSelect';
import BrandSelect from '../../components/BrandSelect';
import ModelSelect from './../../components/ModelSelect';
import YearSelect from './../../components/YearSelect';
import { BiSearchAlt } from 'react-icons/bi';

import useSearchContext from '../../hooks/useSearchContext';

import { Form } from './styles';

const Search = () => {
  const {
    vehicleType,
    brandId,
    modelId,
    yearId,
    isLoading,
    errorMessage,
    doSearch,
  } = useSearchContext();

  return (
    <Form
      variant="outlined"
      onSubmit={(event) => {
        event.preventDefault();

        doSearch();
      }}
    >
      <CardHeader title="Pesquisar" align="center" />
      <CardContent>
        <VehicleTypeSelect />
        <BrandSelect />
        <ModelSelect />
        <YearSelect />
        <LoadingButton
          loading={isLoading}
          type="submit"
          variant="contained"
          endIcon={<BiSearchAlt />}
          color="success"
          fullWidth
          disabled={!vehicleType || !brandId || !modelId || !yearId}
        >
          Consultar preço
        </LoadingButton>
        {!!errorMessage && (
          <Alert sx={{ marginBottom: 1 }} severity="error">
            {errorMessage}
          </Alert>
        )}
      </CardContent>
    </Form>
  );
};

export default Search;
