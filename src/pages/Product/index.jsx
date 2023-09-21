// Import React and other necessary modules for a React component.
import React, { useEffect, useState } from "react";
import ProductCard from '../../Components/Card';
import { useSelector } from "react-redux";
import "./index.css";

// Define a functional component named Product.
const Product = () => {

  // Inside the component, use the useSelector hook to select data from the Redux store. Extract the products from the store using the store.productSlice.products selector.
  const productsList = useSelector((store) => store.productSlice.products);

  // Implement conditional logic to check if productsList exists and log the first item if it does.
  productsList && console.log(productsList[0]);
  return (
    // Render a div element with the class name "product-container."
    <div className="product-container">
      {/* Implement a conditional check to map through productsList and render a ProductCard component for each product in the list. */}
      {productsList.length > 0 &&
        productsList.map((product) => {
          console.log(product);
          // Inside the map function, render a ProductCard component with the following props: id, title, price, description, category, and image. Use the properties from the product object for each prop.
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
          // Close the mapping and conditional blocks.
        })}
    </div>
  );
};

// Export the Product component as the default export of the module.
export default Product;
