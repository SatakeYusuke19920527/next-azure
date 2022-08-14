import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  // const res = process.env.NEXT_PUBLIC_STRIPE_PRODUCT_URL!;
  console.log(
    '🚀 ~ file: index.tsx ~ line 6 ~ 環境変数',
    process.env['NEXT_PUBLIC_STRIPE_PRODUCT_URL']
  );

  return (
    <Layout>
      <h1>Hello next.js</h1>
      <h1>test</h1>
    </Layout>
  );
};

export default Home;
