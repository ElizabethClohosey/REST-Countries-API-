import React, { Component } from "react";
import "./header.scss";

const toggleDarkMode = () => {
  console.log("button clicked");
  document.body.classList.toggle("dark-mode");
};

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Where in the world</h1>
        <div className="dark-toggle">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            <p>Icon</p>
            <h2>Dark Mode</h2>
          </button>
        </div>
      </header>
    );
  }
}
export default Header; // Don’t forget to use export default!
