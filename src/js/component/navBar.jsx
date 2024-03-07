import React from "react";
import NavItem from "../component/navItem";

const NavBar = () => {

    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <div className="container-fluid">
      <a className="navbar-brand " href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
       <NavItem />
      </div>
    </div>
  </nav>
}


export default NavBar;