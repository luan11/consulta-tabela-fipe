import { useState } from 'react';
import SearchContext from './context';
import { ISearchContextProviderProps, ISearchResult } from './types';
import api from '../../services/api';
import { useRouter } from 'next/router';

const SearchContextProvider = ({ children }: ISearchContextProviderProps) => {
  const [vehicleType, setVehicleType] = useState<string | null>(null);
  const [brandId, setBrandId] = useState<number | null>(null);
  const [modelId, setModelId] = useState<number | null>(null);
  const [yearId, setYearId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ISearchResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();

  const url = `/${vehicleType}/brands/${brandId}/models/${modelId}/years/${yearId}`;
  const doSearch = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const { data } = await api.get<ISearchResult>(url);

      setResult(data);

      router.push(`/result`);
    } catch (error) {
      setErrorMessage(`Não foi possível consultar o preço.`);
    } finally {
      setIsLoading(false);
    }
  };

  const searchAgain = () => {
    setVehicleType(null);
    setBrandId(null);
    setModelId(null);
    setYearId(null);
    setResult(null);
    setErrorMessage(null);
  };

  return (
    <SearchContext.Provider
      value={{
        vehicleType,
        brandId,
        modelId,
        yearId,
        setVehicleType,
        setBrandId,
        setModelId,
        setYearId,
        isLoading,
        result,
        errorMessage,
        doSearch,
        searchAgain,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
