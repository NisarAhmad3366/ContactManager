import React, { Component } from "react";

const Context = React.createContext();

//global state

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John",
        email: "john@gamil.com",
        phone: "223-33-444"
      },
      {
        id: 2,
        name: "HOnn",
        email: "honn@gamil.com",
        phone: "25654-33-444"
      },
      {
        id: 3,
        name: "Deess",
        email: "dess@gamil.com",
        phone: "223-33-444"
      }
    ]
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
