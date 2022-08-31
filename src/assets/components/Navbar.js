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
    <div className="container-fluid" style={{backgroundColor:"#7DD9CA", padding:"0px 100px"}}>
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
            <Link to="/howitworks " className="navitems">
              How does it work?
            </Link>
            <Link to="/market-place" className="navitems">
              Marketplace
            </Link>
            <Link to="/company" className="navitems">
              Company <MdOutlineKeyboardArrowDown />
              <div className="submenu">
                <Link to="/aboutus" className="submenu-item">
                  About
                </Link>
                <Link to="/" className="submenu-item">
                  Legal Documents
                </Link>
              </div>
            </Link>
            <Link to="/Resources" className="navitems">
              Resources <MdOutlineKeyboardArrowDown />
              <div className="submenu">
                <Link to='/LearningCenter' className="submenu-item">
                  Learning
                </Link>
                <Link to="/Faq  " className="submenu-item">
                  FAQs
                </Link>
              </div>
            </Link>
          </div>
          <div className="nav-btn">
            <Link to="/Login" className="logs">
              Login
            </Link>
            <Link to="/Signup" className="logs">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
