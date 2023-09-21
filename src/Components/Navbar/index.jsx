//Import the necessary modules for React and the required components and styles.
import React, { useState } from "react";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

// Create a functional React component called `Navbar`.
function Navbar() {

  //Initialize a state variable called `showNavbar` using the `useState` hook, with an initial value of `false`.
  const [showNavbar, setShowNavbar] = useState(false);

  //Define the JSX structure for the `Navbar` component. Use a `<nav>` element with class "navbar".
  return (
    <nav className="navbar">
      {/* Create a `<div>` with class "brand" and inside it, a `<Link>` to the home page ("/") with class "brand-link" and a `<h1>` element containing the text "Shoppers". */}
      <div className="container">
        <div className="brand">
          <Link to={"/"} className="brand-link">
            <h1>Shoppers</h1>
          </Link>
        </div>
        {/* Create a `<div>` with class "menu-icon" that toggles the `showNavbar` state when clicked. Inside it, use the `<GiHamburgerMenu>` component with a size of 25.*/}
        <div
          className="menu-icon"
          onClick={() => {
            setShowNavbar(!showNavbar);
          }}
        >
          <GiHamburgerMenu size={25} />
        </div>
        {/* Create a `<div>` with class "nav-elements" and conditionally add the "active" class based on the `showNavbar` state. Inside it, define an unordered list (`<ul>`) containing two navigation links to "Home" and "Products". Use `<NavLink>` for each link. */}
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <div className="nav-pages">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
            </div>

            {/* Inside the navigation elements, add a separate `<div>` with class "nav-cart". Inside this div, create a list item (`<li>`) with a `<NavLink>` to "Cart". */}
            <div className="nav-cart">
            <li>
              <NavLink to={"/cart"}>Cart</NavLink>
            </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Export the `Navbar` component as the default export.
export default Navbar;
