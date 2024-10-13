
export const ProductCard = ({products}) => {
    return (
        <div className='card'>
            <ul id="card-item">
                <li><img src={products.image} id="Product_Image" /></li>
                <li>{products.title}</li>
                <li>Price: ${products.price}</li>
                <li>Rating: {products.rating.rate}</li>
            </ul>
        </div>
    );
}