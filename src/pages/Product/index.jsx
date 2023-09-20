import React, { useEffect, useState } from "react";
import CardComponent from "../../Components/Card";
import {  useSelector } from "react-redux";
import './index.css';

const Product = () => {

    // const [products, setProducts] = useState([]);

    const productsList = useSelector((store)=>store.productSlice.products);

    productsList && console.log(productsList[0]);
  return (
    <div className="product-container">
        {/* {
            productsList.map((product)=>{
                console.log(product);
                <CardComponent product={product} />
            })
        } */}
        {/* <CardComponent product={productsList[0]} key={productsList[0].id} /> */}
        {productsList.length>0  ? <CardComponent product={productsList[0]}/>:<p>Loading...</p>}
    </div>
  );
};

export default Product;
