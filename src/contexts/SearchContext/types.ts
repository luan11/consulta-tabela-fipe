import { ReactNode } from 'react';

export interface ISearchResult {
  price: string;
  brand: string;
  model: string;
  modelYear: number;
}

export interface ISearchContextProps {
  isLoading: boolean;
  result: ISearchResult | null;
  setFilters: (
    vehicleType: string,
    brandId: number,
    modelId: number,
    yearId: string
  ) => void;
}

export interface ISearchContextProviderProps {
  children: ReactNode;
}
