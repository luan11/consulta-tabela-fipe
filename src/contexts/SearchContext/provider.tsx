import { useState } from 'react';
import SearchContext from './context';
import { ISearchContextProviderProps, ISearchResult } from './types';

const SearchContextProvider = ({ children }: ISearchContextProviderProps) => {
  const [vehicleType, setVehicleType] = useState<string | null>(null);
  const [brandId, setBrandId] = useState<number | null>(null);
  const [modelId, setModelId] = useState<number | null>(null);
  const [yearId, setYearId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ISearchResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
