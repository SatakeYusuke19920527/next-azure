/**
 * stripeの商品一覧を取得する
 * @returns products
 */
export async function getProducts() {
  const url = process.env.NEXT_PUBLIC_STRIPE_PRODUCT_URL!
  const res = await fetch(`https://green-pond-08be32800.1.azurestaticapps.net/api/fetch_products`);
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}