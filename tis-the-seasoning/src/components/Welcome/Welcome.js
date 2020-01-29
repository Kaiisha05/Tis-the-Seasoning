import React from 'react';
import './Welcome.css';


function Welcome() {
  return (
    <div>
    <div className="container">

      <div className="container" />
      <div className="row justify-content-between" />
      <div className="col-5" />

      <form className="form-group" action="/login" method="POST" />
      <div>
        <h2>Welcome Back!</h2>
        <label for="email">Email</label>
        <input type="email" className="form-control" id="email" name="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" className="form-control" id="password" name="password" required />
      </div>
      <button className="btn btn-danger" type="submit">Login</button>

    </div>

    <div className="col-5" />

    <form className="form-group" action="/register" method="POST" />
    <h2>Come Taste!</h2>
    <div>
      <label for="username">User Name</label>
      <input type="text" className="form-control" id="username" name="username" required />
    </div>
    <div>
      <label for="lastname">Last Name</label>
      <input type="text" className="form-control" id="lastname" name="lastname" required />
    </div>
    <div>
      <label for="firstname">First Name</label>
      <input type="text" className="form-control" id="firstname" name="firstname" required />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" className="form-control" id="email" name="email" required />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" className="form-control" id="password" name="password" required />
    </div>

    <button className="btn btn-danger" type="submit">Register</button>

           
        </div >
    
    
    );
}



export default Welcome;