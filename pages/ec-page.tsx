import Layout from '../components/Layout';

const EC = () => {
  return (
    <Layout>
      <h1>Hello Next.js 👋</h1>
      <ul>
        <li>test</li>
      </ul>
    </Layout>
  );
};

export default EC;

// export const getStaticProps: GetStaticProps = async () => {
//   const products: any = await client.product.fetchAll();
//   return {
//     props: {
//       products: JSON.parse(JSON.stringify(products)),
//     },
//   };
// };
