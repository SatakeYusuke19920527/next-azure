import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  const env = process.env.NEXT_AUZRE_ENV!;
  console.log('🚀 ~ file: index.tsx ~ line 6 ~ env', env);
  return (
    <Layout>
      <h1>Hello next.js</h1>
      <h1>test</h1>
    </Layout>
  );
};

export default Home;
