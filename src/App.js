import React from "react";
import Header from "./components/Header/Header";
import Actions from "./components/Actions/actions";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Actions />
          {/* <SearchResults /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
