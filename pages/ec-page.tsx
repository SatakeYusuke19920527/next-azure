import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { selectUser } from '../features/user/userSlice';
import { useAppSelector } from '../hooks/useRTK';
import { getProducts } from '../lib/get-products';
import { ProductType } from '../types/ProductType';

const EcPage = () => {
  const [pds, setPds] = useState<ProductType[]>([]);
  console.log('π ~ file: ec-page.tsx ~ line 15 ~ EcPage ~ pds', pds);
  const user = useAppSelector(selectUser);
  console.log('π ~ file: ec-page.tsx ~ line 17 ~ EcPage ~ user', user);
  useEffect(() => {
    getStripeProducts();
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when youβre ready.'
      );
    }
  }, []);

  const getStripeProducts = async () => {
    const res = await getProducts();
    console.log(
      'π ~ file: ec-page.tsx ~ line 34 ~ getStripeProducts ~ res',
      res
    );
    setPds(res.props.products);
  };

  return pds.length !== 0 ? (
    <Layout>
      <main className="w-screen box-content p-20 flex flex-wrap justify-center">
        {pds &&
          pds.map((product, index) => {
            return (
              <div key={index}>
                <ProductCard product={product} />
              </div>
            );
          })}
      </main>
    </Layout>
  ) : (
    <Layout>
      <main className="w-screen box-content p-20 flex flex-wrap justify-center">
        <h1>loading...</h1>
      </main>
    </Layout>
  );
};

export default EcPage;
