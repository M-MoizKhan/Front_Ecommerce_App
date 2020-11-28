import React, {createContext, useState} from "react";
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';
import s5 from '../assets/s5.jpg';
import s6 from '../assets/s6.jpg';

export const ProductsContext = createContext();

const ProductsState = (props) => {
   const [products] = useState([
       {id: 1, name: 'New MK', price: 1800, pic: s1, status: 'hot'},
       {id: 2, name: 'Edenrobe', price: 2500, pic: s2, status: 'new'},
       {id: 3, name: 'alkaram', price: 2200, pic: s3, status: 'hot'},
       {id: 4, name: 'Gul Ahmed', price: 2500, pic: s4, status: 'new'},
       {id: 5, name: 'SanaSafi', price: 2000, pic: s5, status: 'hot'},
       {id: 6, name: 'Gul Ahmed', price: 2300, pic: s6, status: 'new'}
      ]);
    return(
    <ProductsContext.Provider value={{products: [...products]}}>
    {props.children}
    </ProductsContext.Provider>
    )
}
export default ProductsState;