import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  const [myObject, setMyObject] = useState(null);
  const {id} = useParams();
  useEffect(() => {    
    fetchData();
  }, []);

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
    <div className='single-card'>
      <ul >
        <li><img src={image} alt={title} /></li>
        <li>{title}</li>
        <li>Price: ${price}</li>
        <li>Rating: {rating && rating.rate}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default ProductDetails;
