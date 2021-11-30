import { SyntheticEvent, useEffect, useState } from 'react';
import { Autocomplete, TextField, Alert } from '@mui/material';

import useSearchContext from '../../hooks/useSearchContext';
import useFetch from '../../hooks/useFetch';

type Brand = {
  name: string;
  code: number;
};

const BrandSelect = () => {
  const { vehicleType, setBrandId } = useSearchContext();

  const url = `/${vehicleType}/brands`;
  const { data, loading, hasError, setHasError } = useFetch<Brand[]>({
    url,
    isAbleToRequest: !!vehicleType,
  });

  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const handleOnChange = (
    event: SyntheticEvent<Element | Event>,
    newInputValue: Brand | null
  ) => {
    setSelectedBrand(newInputValue);
    setBrandId(newInputValue ? newInputValue.code : null);
  };

  const handleOnCloseErrorMessage = () => setHasError(false);

  useEffect(() => {
    if (!!vehicleType) {
      setSelectedBrand(null);
      setBrandId(null);
    }
  }, [vehicleType, setBrandId]);

  return !!vehicleType ? (
    <>
      <Autocomplete
        disabled={loading}
        options={data ?? []}
        renderInput={(params) => <TextField {...params} label="Marca" />}
        loading={loading}
        loadingText="Buscando..."
        noOptionsText="Nada encontrado..."
        getOptionLabel={({ name }) => name}
        value={selectedBrand}
        onChange={handleOnChange}
        sx={{ marginBottom: 1 }}
      />
      {hasError && (
        <Alert
          sx={{ marginBottom: 1 }}
          onClose={handleOnCloseErrorMessage}
          severity="error"
        >
          Algo deu errado ao buscar as marcas.
        </Alert>
      )}
    </>
  ) : null;
};

export default BrandSelect;
