import { SyntheticEvent, useEffect, useState } from 'react';
import { Autocomplete, TextField, Alert } from '@mui/material';

import useSearchContext from '../../hooks/useSearchContext';
import useFetch from '../../hooks/useFetch';

type Model = {
  name: string;
  code: number;
};

const ModelSelect = () => {
  const { vehicleType, brandId, setModelId } = useSearchContext();

  const url = `/${vehicleType}/brands/${brandId}/models`;
  const { data, loading, hasError, setHasError } = useFetch<Model[]>({
    url,
    isAbleToRequest: !!vehicleType && !!brandId,
  });

  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  const handleOnChange = (
    event: SyntheticEvent<Element | Event>,
    newInputValue: Model | null
  ) => {
    setSelectedModel(newInputValue);
    setModelId(newInputValue ? newInputValue.code : null);
  };

  const handleOnCloseErrorMessage = () => setHasError(false);

  useEffect(() => {
    if (!!vehicleType && !!brandId) {
      setSelectedModel(null);
      setModelId(null);
    }
  }, [vehicleType, brandId, setModelId]);

  return !!vehicleType && !!brandId ? (
    <>
      <Autocomplete
        disabled={loading}
        options={data ?? []}
        renderInput={(params) => <TextField {...params} label="Modelo" />}
        loading={loading}
        loadingText="Buscando..."
        noOptionsText="Nada encontrado..."
        getOptionLabel={({ name }) => name}
        value={selectedModel}
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

export default ModelSelect;
