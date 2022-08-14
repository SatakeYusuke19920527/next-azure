import { ProductType } from '../types/ProductType';

const ProductCard = ({ product }: { product: ProductType }) => {
  console.log(
    '🚀 ~ file: ProductCard.tsx ~ line 4 ~ ProductCard ~ product',
    product
  );
  return (
    <form
      action={`/api/checkout_sessions?product_key=${product.prices[0].id}`}
      method="POST"
    >
      <button className="w-96 p-4" type="submit">
        <div
          className="max-w-xs rounded overflow-hidden shadow-lg  cursor-pointer"
          role="link"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full"
            src={product.images[0]}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-base">
              {product.prices[0].unit_amount} 円
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #test
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #test2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #test3
            </span>
          </div>
        </div>
      </button>
    </form>
  );
};

export default ProductCard;
