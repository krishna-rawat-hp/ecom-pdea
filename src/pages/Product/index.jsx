import React, { useEffect, useState } from "react";
import ProductCard from '../../Components/Card';
import { useSelector } from "react-redux";
import "./index.css";

const Product = () => {
  // const [products, setProducts] = useState([]);

  const productsList = useSelector((store) => store.productSlice.products);

  productsList && console.log(productsList[0]);
  return (
    <div className="product-container">
      {productsList.length > 0 &&
        productsList.map((product) => {
          console.log(product);
          return (
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
              />
          );
        })}
    </div>
  );
};

export default Product;
