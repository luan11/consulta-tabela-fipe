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

  const setFilters = (
    vehicleType: string,
    brandId: number,
    modelId: number,
    yearId: string
  ) => {
    setVehicleType(vehicleType);
    setBrandId(brandId);
    setModelId(modelId);
    setYearId(yearId);
  };

  return (
    <SearchContext.Provider
      value={{
        isLoading,
        result,
        setFilters,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
