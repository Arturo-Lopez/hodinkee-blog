import { fetchApi } from '../utils/api';

export async function getServerSideProps() {
  const data = await fetchApi();

  return {
    props: {
      newApiResponse: data,
    },
  };
}
export { default } from '@modules/home/HomePage';
