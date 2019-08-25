import React, { Component } from "react";
import PropTypes from "prop-types";

// import "./contact.css";
//class based component are created with rcc tab

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  //METHODS

  //java event functions  -- always use arrow function to def a user defined func
  onShowClick = () => {
    //this will toggle the state of showConcinfo to true or false depnding on the current state it is in
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  render() {
    //deconstruting
    // const { name, email, phone } = this.props;
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body md-3 container">
        {/* in class based component we use this.props.name_of_attrtbute used */}
        {/* <h4>{this.props.name}</h4> */}

        {/* <li>Phone:{this.props.phone}</li> */}
        {/* <li>Email:{this.props.email}</li> */}

        <h4>
          {name}
          <i
            onClick={this.onShowClick.bind(this, 1)}
            className="fa fa-sort-down"
            style={{ cursor: "pointer" }}
            //onClick={this.onShowClick.bind(this, 1)} //wtih parameter
          />
          <i
            className="fa fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group" style={{ color: "blue" }}>
            <li className="list-group-item">Email:{email}</li>
            <li className="list-group-item">Phone:{phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};
// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

//export name of component - if export default then no need to use {} while importing
export default Contact;
