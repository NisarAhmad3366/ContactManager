import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        // spread op
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        // spread op - to get the initial state
        ...state,
        //all value of name email and phone are in payload
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
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
