import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JustForYou = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Add to cart
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          ...product,
          quantity: 1,
          discountedPrice: product.price * 0.7
        }
      ];
    });
  };

  // Loading Skeleton
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-lg font-semibold mb-4">Just For You</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-white p-4 animate-pulse">
              <div className="h-32 bg-gray-200 mb-3"></div>
              <div className="h-4 bg-gray-200 mb-2"></div>
              <div className="h-4 bg-gray-200 w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 mt-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Just For You</h2>

        {cart.length > 0 && (
          <div className="text-sm font-semibold">
            Cart Items: {cart.reduce((t, i) => t + i.quantity, 0)}
          </div>
        )}
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map(item => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="bg-white rounded-md hover:shadow-lg transition cursor-pointer"
          >
            {/* IMAGE */}
            <div className="w-full aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* CONTENT */}
            <div className="p-3">
              <p className="text-sm text-gray-800 line-clamp-2 h-10">
                {item.title}
              </p>

              {/* RATING */}
              <div className="text-yellow-500 text-xs mt-1">
                {"★".repeat(Math.round(item.rating?.rate || 4))}
                <span className="text-gray-500 ml-1">
                  ({item.rating?.count || 0})
                </span>
              </div>

              {/* PRICE */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-orange-600 font-semibold">
                  Rs. {(item.price * 0.7).toFixed(2)}
                </span>
                <span className="text-xs text-gray-500 line-through">
                  Rs. {item.price}
                </span>
                <span className="text-xs bg-orange-100 text-orange-600 px-1 rounded">
                  -30%
                </span>
              </div>

              {/* ADD TO CART */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // ⛔ card click block
                  addToCart(item);
                }}
                className="w-full mt-3 bg-[#F85606] text-white py-2 rounded text-sm hover:bg-[#E84B00]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JustForYou;
