import { SyntheticEvent, useEffect, useState } from 'react';
import { Autocomplete, TextField, Alert } from '@mui/material';

import useSearchContext from '../../hooks/useSearchContext';
import useFetch from '../../hooks/useFetch';

type Year = {
  name: string;
  code: string;
};

const YearSelect = () => {
  const { vehicleType, brandId, modelId, setYearId } = useSearchContext();

  const url = `/${vehicleType}/brands/${brandId}/models/${modelId}/years`;
  const { data, loading, hasError, setHasError } = useFetch<Year[]>({
    url,
    isAbleToRequest: !!vehicleType && !!brandId && !!modelId,
  });

  const [selectedYear, setSelectedYear] = useState<Year | null>(null);

  const handleOnChange = (
    event: SyntheticEvent<Element | Event>,
    newInputValue: Year | null
  ) => {
    setSelectedYear(newInputValue);
    setYearId(newInputValue ? newInputValue.code : null);
  };

  const handleOnCloseErrorMessage = () => setHasError(false);

  useEffect(() => {
    if (!!vehicleType && !!brandId && !!modelId) {
      setSelectedYear(null);
      setYearId(null);
    }
  }, [vehicleType, brandId, modelId, setYearId]);

  return !!vehicleType && !!brandId && !!modelId ? (
    <>
      <Autocomplete
        disabled={loading}
        options={data ?? []}
        renderInput={(params) => <TextField {...params} label="Ano" />}
        loading={loading}
        loadingText="Buscando..."
        noOptionsText="Nada encontrado..."
        getOptionLabel={({ name }) => name}
        value={selectedYear}
        onChange={handleOnChange}
        sx={{ marginBottom: 1 }}
      />
      {hasError && (
        <Alert
          sx={{ marginBottom: 1 }}
          onClose={handleOnCloseErrorMessage}
          severity="error"
        >
          Algo deu errado ao buscar os modelos.
        </Alert>
      )}
    </>
  ) : null;
};

export default YearSelect;
