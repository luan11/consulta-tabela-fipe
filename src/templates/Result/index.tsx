import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  CardHeader,
  CardContent,
  Stack,
  Chip,
  Typography,
  Button,
} from '@mui/material';
import { MdOutlineArrowBack } from 'react-icons/md';

import useSearchContext from '../../hooks/useSearchContext';

import { Wrapper } from './styles';

const Result = () => {
  const { result, searchAgain } = useSearchContext();
  const router = useRouter();

  useEffect(() => {
    if (!result) {
      router.push(`/`);
    }
  }, [result, router]);

  return !!result ? (
    <Wrapper variant="outlined">
      <CardHeader title="Resultado" align="center" />
      <CardContent>
        <Stack alignItems="center" sx={{ marginBottom: 2 }}>
          <Typography variant="subtitle1" align="center">
            {result?.brand}
          </Typography>
          <Typography variant="h5" align="center" gutterBottom>
            {result?.model}
            <Chip
              color="primary"
              label={result?.modelYear}
              sx={{ marginLeft: 1 }}
            />
          </Typography>

          <Typography variant="h2" align="center" color="success">
            {result?.price}
          </Typography>
          <Typography variant="subtitle2" align="center">
            Este é o preço de compra do veículo
          </Typography>
        </Stack>

        <Button
          type="button"
          variant="contained"
          startIcon={<MdOutlineArrowBack />}
          fullWidth
          onClick={searchAgain}
        >
          Voltar
        </Button>
      </CardContent>
    </Wrapper>
  ) : null;
};

export default Result;
