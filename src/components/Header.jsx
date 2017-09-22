import React from "react";
import { Link } from 'react-router-dom';


function Header(props){
  return (
    <div>
      <h1>Shut the Box</h1>
      <Link to="/">Home</Link> | <Link to="/instructions">Instructions</Link>
    </div>
   );
}

export default Header;
