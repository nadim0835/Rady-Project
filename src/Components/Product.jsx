import React from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
    let { productid } = useParams();
    console.log(productid);
  return (

    
    <div>Product.....{productid}</div>
  )
}

export default Product