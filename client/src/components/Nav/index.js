import React from "react";
import Jumbotron from "../Jumbotron";


function Nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark varient-light">
      <a className="navbar-brand" id="homeLink" href="/">
      Book Search
      </a>
     <ul className="navbar-nav">
     <li className="nav-item">
       <a className="nav-link navbar-brand" id="savedLink" href="/bookshelf">My Books</a>
     </li>
   </ul>
 </nav>
 <Jumbotron/>
 </div>
  );
}

export default Nav;