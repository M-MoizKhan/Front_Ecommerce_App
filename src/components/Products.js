import React, {useContext} from 'react';
import {ProductsContext} from '../Global/ProductsState';
import Banner from './Banner';
// import {Link} from 'raect-router-dom';
// import {BrowserRouter as Router, Switch, Link,Route} from 'react-router-dom';

const Products = () => {
    const {products} = useContext(ProductsContext);
    // console.log(data);
    return(
        <div>
            <Banner />
       <div className='products'>
           {products.map((product) => (   
           <div className='pro' key={product.id}>
                <div className='pro-pic'>
                   <img src={product.pic} alt='Not Found' />
                </div>
           <div className='pro-dtls'>
               <h3 className='pro-nam'>
                   {product.name}
               </h3>
               <h4 className='pro-rs'>
                   Price:{product.price}/-
               </h4>
               <h5 className='add'>
                   Add To Cart
               </h5>
           </div>
           
           </div>
           ))}
       </div>
       </div>
    )
}
export default Products;