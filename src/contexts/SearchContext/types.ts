import { Dispatch, SetStateAction } from 'react';
import { ReactNode } from 'react';

export interface ISearchResult {
  price: string;
  brand: string;
  model: string;
  modelYear: number;
}

export interface ISearchContextProps {
  vehicleType: string | null;
  brandId: number | null;
  modelId: number | null;
  yearId: string | null;
  setVehicleType: Dispatch<SetStateAction<string | null>>;
  setBrandId: Dispatch<SetStateAction<number | null>>;
  setModelId: Dispatch<SetStateAction<number | null>>;
  setYearId: Dispatch<SetStateAction<string | null>>;
  isLoading: boolean;
  result: ISearchResult | null;
  errorMessage: string | null;
  doSearch: () => void;
  searchAgain: () => void;
}

export interface ISearchContextProviderProps {
  children: ReactNode;
}
