import React, { Component } from "react";
import { FaRegMoon } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import "./header.scss";

const toggleDarkMode = () => {
  console.log("button clicked");
  document.body.classList.toggle("dark-mode");
};

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <div className="row justify-content-between">
            <div className="col-5 p-0">
              <h1>Where in the world</h1>
            </div>
            <div
              className="col-2 theme-toggle text-right p-0"
              onClick={toggleDarkMode}
            >
              <FaRegMoon className="moon-icon ml-auto" />
              <p class="my-auto">Dark Mode</p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header; // Don’t forget to use export default!
