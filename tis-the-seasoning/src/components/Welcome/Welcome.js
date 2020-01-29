import React from 'react';


function Welcome() {
  return (
//  Returning Users ========== All routes currently lead to All Recipes page
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-5">
          <form className="form-group" action="/login" />
          <div>
            <h2>Welcome Back</h2>
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="email" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="pasword" className="form-control" id="password" name="password" placeholder="password" required />
          </div>
          <br />
          <a href="/allrecipes" className="btn btn-danger" type="submit">Login</a>
        </div>
{/* New Users ========== All routes currently lead to All Recipes Page */}
        <div className="col-5">
          <form className="form-group" action="/login" />
          <h2>Come Taste!</h2>
          <div>
            <label for="fullname">Full Name</label>
            <input type="text" className="form-control" id="fullname" name="fullname" placeholder="Full Name" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="email" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="password" required />
          </div>
          <br />
          <a href="/login" className="btn btn-danger" type="submit">Signup</a>
        </div>
      </div>
    </div>



  );
}



export default Welcome;