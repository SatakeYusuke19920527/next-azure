const CosmosClient = require("@azure/cosmos").CosmosClient;

const endpoint = process.env.NEXT_PUBLIC_STRIPE_PRODUCT_URL!
const key = process.env.COSMOS_DB_KEY!
const databaseId = "Test"
const containerId = "tests"

const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);

const container = database.container(containerId);


export default async function handler(req: any, res: any) {
  // query to return all items
  const querySpec = {
    query: "SELECT * from c"
  };

  return new Promise(async (resolve, reject) => {
    try {
      const { resources: items } = await container.items.query(querySpec).fetchAll();
      console.log("🚀 ~ file: connect_cosmos.ts ~ line 19 ~ handler ~ items", items)
      resolve(
        res.status(200).json({ resources: items })
      )
    } catch (error) {
      console.log("🚀 ~ file: connect_cosmos.ts ~ line 19 ~ handler ~ error", error)
      reject(res.status(500).json({ resources: error }))
    }
  })
};