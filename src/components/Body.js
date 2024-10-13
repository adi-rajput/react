import { ProductCard } from "./Product-card";
import { useState, useEffect } from "react";

export const Body = () => {
  const [products, setTopProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setTopProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleTopProducts() {
    setTopProducts(products.filter((product) => product.rating.rate >= 4.5));
  }

  return (
    <>
      <button className="top" onClick={handleTopProducts}>
        Top Products
      </button>
      <div className="Body">
        {products.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </div>
    </>
  );
};
