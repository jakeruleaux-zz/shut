import React from "react";
import { Link } from 'react-router-dom';


function Header(props){
  return (
    <div>
      <h1>Shut the Box</h1>
      <Link to="/">Home</Link> | 
    </div>
   );
}

export default Header;
