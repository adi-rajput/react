import { ProductCard } from "./Product-card";
import { useState, useEffect } from "react";
import Skeleton from "./skeleton";
export const Body = () => {
  const [products, setProducts] = useState([]);
  const [minRating, setminRating] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [filterProduct, setfilterProduct] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setfilterProduct(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleTopProducts() {
    setfilterProduct(
      products.filter((product) => product.rating.rate >= minRating)
    );
  }

  function handleSearch() {
    setfilterProduct(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }

  return products.length === 0 ? (
    <Skeleton />
  ) : (
    <>
      <div>
        {/* Input field for the user to enter a minimum rating */}
        <label htmlFor="ratingInput" className="filter">
          Enter Minimum Rating:{" "}
        </label>
        <input
          type="number"
          id="ratingInput"
          value={minRating}
          onChange={(e) => setminRating(e.target.value)}
          step="0.1"
          min="0"
          max="5"
          //placeholder="Enter rating (e.g., 3.5)"
        />

        {/* Button to trigger the filter function */}
        <button onClick={handleTopProducts}>Filter</button>
      </div>

      <div className="search">
        <label>Search:</label>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="Body">
        {filterProduct.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </div>
    </>
  );
};
