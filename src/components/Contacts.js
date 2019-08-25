import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  // state = {
  //   contacts: [
  //     {
  //       id: 1,
  //       name: "John",
  //       email: "john@gamil.com",
  //       phone: "223-33-444"
  //     },
  //     {
  //       id: 2,
  //       name: "HOnn",
  //       email: "honn@gamil.com",
  //       phone: "25654-33-444"
  //     },
  //     {
  //       id: 3,
  //       name: "Deess",
  //       email: "dess@gamil.com",
  //       phone: "223-33-444"
  //     }
  //   ]
  // };
  //METHODS
  deleteContact = id => {
    const { contacts } = this.state;

    const newContact = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContact
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {/* rendering the Contact */}
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );

    // const { contacts } = this.state;
    // return (
    //   <React.Fragment>
    //     {/* rendering the Contact */}
    //     {contacts.map(contact => (
    //       <Contact
    //         key={contact.id}
    //         contact={contact}
    //         deleteClickHandler={this.deleteContact.bind(this, contact.id)}
    //       />
    //     ))}
    //   </React.Fragment>
    // );
  }
}

export default Contacts;
