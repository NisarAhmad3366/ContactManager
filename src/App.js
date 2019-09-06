import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layouts/Header";
import AddContact from "./components/contacts/AddContact";

import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      //jsx extension is javascript extension like html
      //return can only return one div - dont use more than two div
      // taking input is called props short for properties
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container" />
          <AddContact />
          <Contacts />
        </div>
      </Provider>
    );

    //THIS IS THE EQUIVALENT OF ABOVE WITHOUT JXS
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "The App component")
    // );
  }
}

export default App;
