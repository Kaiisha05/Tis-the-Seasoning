import React from 'react';
import './Header.css';


// function Header() {
//   return (
//     <div className="row">
//       <div className="medium-12 columns">
//   <h2>Header Page</h2>
//       </div>
//     </div>
//   );
// }

const Header = () => {
  return (
    <header className="jumbotron text-center mb-0">
      <h1 className="display-4">
        {/* <Link to="/">‘Tis the Seasoning</Link> */}
        Tis the Seasoning
      </h1>
      <p className="container my-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        voluptatum quidem harum.
      </p>
    </header>
  );
};

export default Header;