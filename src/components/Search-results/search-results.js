import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./search-results.scss";

class SearchResults extends Component {
  render() {
    return (
      <section className="search-results">
        <div className="search-results-container">
          <div className="row mt-5">
            <div className="col-lg-3">
              <div class="country-info">
                <img
                  class="flag-img"
                  src="..."
                  alt="#"
                  height="200"
                  width="150"
                />
                <div class="info-body">
                  <h5 class="country-name">Country Name</h5>
                  <p class="card-text">Population:</p>
                  <p class="card-text">Region:</p>
                  <p class="card-text">Capital:</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="country-info">
                <img
                  class="flag-img"
                  src="..."
                  alt="#"
                  height="200"
                  width="150"
                />
                <div class="info-body">
                  <h5 class="country-name">Country Name</h5>
                  <p class="card-text">Population:</p>
                  <p class="card-text">Region:</p>
                  <p class="card-text">Capital:</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="country-info">
                <img
                  class="flag-img"
                  src="..."
                  alt="#"
                  height="200"
                  width="150"
                />
                <div class="info-body">
                  <h5 class="country-name">Country Name</h5>
                  <p class="card-text">Population:</p>
                  <p class="card-text">Region:</p>
                  <p class="card-text">Capital:</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div class="country-info">
                <img
                  class="flag-image"
                  src="..."
                  alt="#"
                  height="200"
                  width="150"
                />
                <div class="info-body">
                  <h5 class="country-name">Country Name</h5>
                  <p class="card-text">Population:</p>
                  <p class="card-text">Region:</p>
                  <p class="card-text">Capital:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SearchResults; // Don’t forget to use export default!
