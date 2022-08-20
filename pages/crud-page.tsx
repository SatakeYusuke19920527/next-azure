import Layout from '../components/Layout';
const CosmosClient = require('@azure/cosmos').CosmosClient;

const endpoint = process.env.NEXT_PUBLIC_STRIPE_PRODUCT_URL!;
const key = process.env.COSMOS_DB_KEY!;
const databaseId = 'Test';
const containerId = 'tests';

const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);

const container = database.container(containerId);
// query to return all items
const querySpec = {
  query: 'SELECT * from c',
};

const Crud = () => {
  const connectCosmos = async () => {
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();
    console.log(
      '🚀 ~ file: connect_cosmos.ts ~ line 19 ~ handler ~ items',
      items
    );
  };
  return (
    <Layout>
      <main>crud</main>
      <button onClick={connectCosmos}>fetch</button>
    </Layout>
  );
};

export default Crud;
