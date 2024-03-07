import React from "react";

const NavItem = () => {

    const textItems = ["Home","About","Services","Contact"];
    
    
  return  <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >{textItems.map((item, i) => {
    return <li className="nav-item" key={i}>
    <a className= {i===0 ? "nav-link active" : "nav-link" } aria-current="page" href="#">{item}</a>
    </li>
  } ) }</ul>



}

export default NavItem;