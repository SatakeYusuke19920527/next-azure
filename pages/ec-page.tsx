import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { selectUser } from '../features/user/userSlice';
import { useAppSelector } from '../hooks/useRTK';
import { getProducts } from '../lib/get-products';
import { ProductType } from '../types/ProductType';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
const EcPage = ({ products }: { products: ProductType[] }) => {
  const [pds, setPds] = useState<ProductType[]>([]);
  console.log('🚀 ~ file: ec-page.tsx ~ line 15 ~ EcPage ~ pds', pds);
  const user = useAppSelector(selectUser);
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }

    setPds(products);
  }, [products]);

  return pds.length !== 0 ? (
    <Layout>
      <main className="w-screen box-content p-20 flex flex-wrap justify-center">
        {/* {pds &&
          pds.map((product, index) => {
            return (
              <div key={index}>
                <ProductCard product={product} />
                <ProductCard product={product} />
                <ProductCard product={product} />
              </div>
            );
          })} */}
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

export async function getStaticProps() {
  const res = await getProducts();
  return res;
}

export default EcPage;
