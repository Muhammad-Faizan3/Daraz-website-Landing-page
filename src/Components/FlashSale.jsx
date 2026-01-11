import  { useState, useEffect } from "react";
const FlashSale = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=6");
        const data = await res.json();
        const formatted = data.map((item) => {
          const oldPrice = Math.round(item.price * 1.5);
          const discount = `-${Math.round(((oldPrice - item.price) / oldPrice) * 100)}%`;
          return {
            id: item.id,
            title: item.title,
            price: Math.round(item.price),
            oldPrice,
            discount,
            image: item.image,
          };
        });

        setProducts(formatted);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="p-4 mt-6 bg-white animate-pulse">
        <h2 className="text-xl font-semibold mb-4">FlashSale</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-200 h-60 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 mt-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">FlashSale</h2>

      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-orange-500 text-sm cursor-pointer">On Sale Now</p>
        </div>
        <button className="border border-orange-500 text-orange-500 px-4 py-1 text-sm cursor-pointer hover:bg-orange-500 hover:text-white transition">
          SHOP ALL PRODUCTS
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {products.map((item) => (
          <div key={item.id} className="rounded hover:shadow-lg transition bg-white cursor-pointer">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />

            <div className="p-2">
              <p className="text-sm line-clamp-2">{item.title}</p>

              <p className="text-orange-500 font-semibold">Rs.{item.price}</p>

              <div className="text-xs text-gray-400 flex gap-2">
                <span className="line-through">Rs.{item.oldPrice}</span>
                <span className="text-black">{item.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
