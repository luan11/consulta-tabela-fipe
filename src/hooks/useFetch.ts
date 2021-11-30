import { useState, useEffect } from 'react';
import api from '../services/api';

type useFetchProps = {
  url: string;
  isAbleToRequest: boolean;
};

function useFetch<T>({ url, isAbleToRequest }: useFetchProps) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [doRefetch, setDoRefetch] = useState(false);

  const refetch = () => setDoRefetch(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setHasError(false);

      try {
        const { data } = await api.get(url);

        setData(data);
      } catch (error) {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    if (isAbleToRequest) {
      getData();
    }

    if (isAbleToRequest && doRefetch) {
      console.log(`with refetch`);
      getData();
    }
  }, [url, isAbleToRequest, doRefetch]);

  return { data, loading, hasError, setHasError, refetch };
}

export default useFetch;
