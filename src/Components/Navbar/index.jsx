import React, { useState } from "react";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">
          <Link to={"/"} className="brand-link">
            <h1>Shoppers</h1>
          </Link>
        </div>
        <div
          className="menu-icon"
          onClick={() => {
            setShowNavbar(!showNavbar);
          }}
        >
          <GiHamburgerMenu size={25} />
        </div>
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

export default Navbar;
