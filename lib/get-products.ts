/**
 * stripeの商品一覧を取得する
 * @returns products
 */
export async function getProducts() {
  const url = process.env.NEXT_PUBLIC_STRIPE_PRODUCT_URL!
  const res = await fetch(`${url}/api/fetch_products`);
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}