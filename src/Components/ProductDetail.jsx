import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);
  if (!product) return <p className="p-6">Loading...</p>;
  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-contain"
      />
      <div>
        <h1 className="text-xl font-semibold">{product.title}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>

        <div className="mt-4">
          <span className="text-orange-600 text-2xl font-bold">
            Rs. {(product.price * 0.7).toFixed(2)}
          </span>
          <span className="line-through ml-2 text-gray-400">
            Rs. {product.price}
          </span>
        </div>
        <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
