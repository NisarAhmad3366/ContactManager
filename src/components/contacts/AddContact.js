import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card md-3">
        <div className="card-header">Add contact</div>
        <div className="card-body">
          <form action="" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name"> Name </label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter name"
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name"> Email </label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter email"
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name"> Phone </label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone"
                value={phone}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-primary btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
