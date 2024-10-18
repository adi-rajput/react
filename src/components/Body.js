import { HOF, ProductCard } from "./Product-card";
import { useState, useEffect, useContext } from "react";
import Skeleton from "./skeleton";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
export const Body = () => {
  const user = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [minRating, setminRating] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [filterProduct, setfilterProduct] = useState([]);
  // const [username,setUsername] = useState("");
  const changeName = (e) => {
    user.setUsername(e.target.value);
  };
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

  const HOFComponent = HOF(ProductCard);

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
        <div>
          <input
            type="text"
            className="flex border-gray-400 border-2 shadow-xl mx-8 px-10 my-4"
            value={user.name}
            onChange={changeName}
          />
        </div>
        {/* Input field for the user to enter a minimum rating */}
        <label htmlFor="ratingInput" className="filter ">
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
          className="border-2 border-gray-300 rounded-md mx-1"
          placeholder="Enter rating (e.g., 3.5)"
        />

        {/* Button to trigger the filter function */}
        <button
          className="bg-black mx-1 px-4  text-white rounded-md  "
          onClick={handleTopProducts}
        >
          Filter
        </button>
      </div>

      <div className="search">
        <label>Search:</label>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border-2 border-gray-300 rounded-md mx-1"
        />
        <button
          className="bg-black font-mono text-white rounded-md px-1"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="Body">
        {filterProduct.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            {product.rating.rate >= 4 ? (
              <HOFComponent products={product} />
            ) : (
              <ProductCard products={product} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};
