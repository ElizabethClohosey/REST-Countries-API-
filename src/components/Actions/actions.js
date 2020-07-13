import React, { Component } from "react";
import { GoSearch } from "react-icons/go";
import "bootstrap/dist/css/bootstrap.css";
import "./actions.scss";

// const toggleDarkMode = () => {
//   console.log("button clicked");
//   document.body.classList.toggle("dark-mode");
// };

class Actions extends Component {
  render() {
    return (
      <section className="actions">
        <div className="action-container">
          <div className="row justify-content-between">
            <div className="col-6">
              <GoSearch class="search-icon"/>
              <input type="text" placeholder="Search for a Country..."></input>
            </div>
            <div className="col-3">
              <select>
                <option value="">Filter By Region</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Actions; // Don’t forget to use export default!
