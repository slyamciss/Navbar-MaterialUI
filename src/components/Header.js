import React from "react";
import {
  FaSearch,
  FaHeart,
  FaCartPlus,
  FaBars,
  FaUtensils,
} from "react-icons/fa";
import { links } from "./data";
import "./header.css";

function Header() {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <section className="logo">
            <FaUtensils />
            <h1>Resto.</h1>
          </section>
          <div className="links-container ">
            <ul class="social-icon">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="icons">
            <button className="nav-toggle">
              <FaBars className="fa" />
            </button>

            <FaSearch className="fa" />
            <FaHeart className="fa" />
            <FaCartPlus className="fa" />
          </div>
        </div>
        {/* show-container */}
      </div>
    </nav>
  );
}

export default Header;
