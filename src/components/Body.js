import { ProductCard } from './Product-card';
import { products } from '../utils/product_list';
import { useState } from 'react';

export const Body = () => {    
    const [topProducts, setTopProducts] = useState(products);

    function handleTopProducts() {  
        setTopProducts(products.filter((key) => key.rating >= 4.4));
    }

    return (
        <>
            <button className='top' onClick={handleTopProducts}>Top Products</button>
            <div className='Body'>
                {topProducts.map((key) => (
                    <ProductCard  products={key} />  
                ))}           
            </div> 
        </>
    );
}
