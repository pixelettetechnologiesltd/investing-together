import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../API/images";
import "../css/style.css";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";
import { ImCross } from "react-icons/im";

const Navbar=()=> {
  const [toggle, setToggle] = useState(true);
  const [nav, setNav] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
    setNav(!nav);
  };
  return (
    <div className="container-fluid" style={{backgroundColor:"#7DD9CA"}}>
      <div className="nav-bar">
        <span className="toggle-btn" onClick={handleToggle}>
          {toggle ? <GoThreeBars /> : <ImCross />}
        </span>
        <div className="left-side">
          <Link to="/" className="logo">
            <img src={images.logo} alt="logo" />
          </Link>
        </div>
        <div className="right-side">
          <div
            className={`${nav ? "responsive-nav" : "responsive-nav show-nav"}`}
          >
            <Link to="/" className="navitems">
              Home
            </Link>
            <Link to="/" className="navitems">
              Why investing togerther?
            </Link>
            <Link to="/" className="navitems">
              How does it work?
            </Link>
            <Link to="/" className="navitems">
              Marketplace
            </Link>
            <Link to="/" className="navitems">
              Company <MdOutlineKeyboardArrowDown />
              <div className="submenu">
                <Link to="/" className="submenu-item">
                  About
                </Link>
                <Link to="/" className="submenu-item">
                  Legal Documents
                </Link>
              </div>
            </Link>
            <Link to="/" className="navitems">
              Resources <MdOutlineKeyboardArrowDown />
              <div className="submenu">
                <Link to="/" className="submenu-item">
                  Marketplace
                </Link>
                <Link to="/" className="submenu-item">
                  Marketplace
                </Link>
              </div>
            </Link>
          </div>
          <div className="nav-btn">
            <Link to="/" className="logs">
              Login
            </Link>
            <Link to="/" className="logs">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
