import { createContext } from 'react';
import { ISearchContextProps } from './types';

const SearchContext = createContext({} as ISearchContextProps);

export default SearchContext;
