import React from "react";
import "./style.css"


function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1><span><a className="white" id="jumboHead" href="/">Virtual Books</a></span></h1>
        <div>
          <a className="white" target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
            Powered by Google
          </a>
        </div>
      
    </div>
  );
}



export default Jumbotron;