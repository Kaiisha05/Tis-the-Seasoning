import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    console.log("I was changed");
    console.log(event)

    const { name, value } = event.target;
    console.log(event.target)
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("I did submit");
    console.log(event.target);
    console.log(`Your email: ${this.state.username}\n Your password: ${this.state.password}`)

  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <form className="form-group" action="/login" />
            <div>
              <h2>Sign In</h2>
              <label for="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="email" onChange = {this.handleInputChange}required />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="pasword" className="form-control" id="password" name="password" placeholder="password" onChange = {this.handleInputChange} required />
            </div>
            <br />
            <a href="/allrecipes" className="btn btn-danger" type="submit" onClick = {this.handleFormSubmit}>Login</a>
            {/* button still works even without form being filled in */}
          </div>
        </div>
      </div>
    );
  }
}


export default Login;