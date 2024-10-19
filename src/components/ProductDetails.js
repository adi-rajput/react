import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../store/CartStore";
import { useDispatch } from "react-redux";
const ProductDetails = () => {
  const [myObject, setMyObject] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  
  const handelChange = () => {
    dispatch(addToCart(myObject));
  }

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setMyObject(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  if (!myObject) {
    return <div>Loading...</div>; // Loading state while data is being fetched
  }

  // Destructure the myObject to get required properties
  const { title, price, rating, description, image } = myObject;

  return (
    <div className="single-card">
      <ul>
        <li>
          <img src={image} alt={title} />
        </li>
        <li>{title}</li>
        <li>Price: ${price}</li>
        <li>Rating: {rating && rating.rate}</li>
        <li>{description}</li>
        <li>
          <button onClick={handelChange} className="flex bg-black text-white font-medium px-1 py-1 gap-1 shadow-lg rounded-md">
            Add to Cart
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetails;
