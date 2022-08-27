import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  const test = process.env.NEXT_PUBLIC_STRIPE_PRODUCT_URL;
  const test2 = process.env.NEXT_PUBLIC_STRIPE_PRODUCT_KEY;
  console.log('🚀 ~ file: index.tsx ~ line 7 ~ test2', test2);
  console.log('🚀 ~ file: index.tsx ~ line 6 ~ test', test);

  return (
    <Layout>
      <h1>Hello next.js</h1>
      <h1>test</h1>
    </Layout>
  );
};

export default Home;
