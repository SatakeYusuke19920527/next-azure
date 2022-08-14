
/**
 * stripeの商品一覧を取得する
 * @returns products
 */
export async function getProducts() {
  const res = await fetch('http://localhost:3000/api/fetch_products');
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}