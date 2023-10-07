import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '@/apis/index';
import { IGetMoviesResult } from '@/types';
import * as S from './styles';
import Banner from '@/components/Banner';
import Slider from '@/components/Slider';
import Detail from '@/components/Detail';
import Loader from '@/screens/Loader';

const Popular = () => {
  const { isLoading, data } = useQuery<IGetMoviesResult>({
    queryKey: ['popular'],
    queryFn: getPopularMovies,
  });

  return (
    <S.Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Banner moviesList={data?.results} />
          <Slider moviesList={data?.results} />
          <Detail moviesList={data?.results} />
        </>
      )}
    </S.Wrapper>
  );
};

export default Popular;