import React, { Component } from 'react';

class Welcome extends Component {
  state = {
    fullname: "",
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // console.log("I was changed");
    // console.log(event)

    const { name, value } = event.target;
    // console.log(event.target)
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("I did submit");
    console.log(event.target);
    console.log(`Your name: ${this.state.fullname}\n Your email: ${this.state.email}\n Your password: ${this.state.password}`)

  }
  render() {
    return (
      //  Returning Users ========== All routes currently lead to All Recipes page
      <div className="container" >
        <div className="row justify-content-between">
          <div className="col-5">
            <form className="form-group" action="/login" />
            <div>
              <h2>Welcome Back</h2>
              <a href="/login" className="btn btn-danger" type="submit">Login</a>
              <br />
              <hr />
              <h2>Sample Only</h2>
              <a href="/allrecipes" className="btn btn-danger" type="submit">Guest</a>
              {/* <label for="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="email" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="pasword" className="form-control" id="password" name="password" placeholder="password" required /> */}
            </div>

            {/* button still works even without form being filled in */}
          </div>

          {/* New Users ========== All routes currently lead to All Recipes Page */}
          <div className="col-5">
            <form className="form-group" action="/login" />
            <h2>Fully Immerse</h2>
            <div>
              <label for="fullname">Full Name</label>
              <input type="text" className="form-control" id="fullname" name="fullname" placeholder="Full Name" onChange={this.handleInputChange} required />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="email" onChange={this.handleInputChange} required />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="password" onChange={this.handleInputChange} required />
            </div>
            <br />
            <a href="/login" className="btn btn-danger" type="button" onClick = {this.handleFormSubmit}>Signup</a>
            {/* button still works even without form being filled in */}
          </div>
        </div>
      </div>
    );
  }
}


export default Welcome;