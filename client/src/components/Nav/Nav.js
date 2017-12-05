import React from "react";
import "./Nav.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">

          <div className="navbar-header">
      <Link to="/" className="navbar-brand brand">BusinessBox</Link>
      <Link to="/" className="navbar-brand">Home</Link>
    </div>


    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
            <li><Link to="/Purchase" className="navbar-brand">Purchase</Link></li>
            <li><Link to="/Production" className="navbar-brand">Production</Link></li>
            <li><Link to="/Sold" className="navbar-brand">Sold!</Link></li>
            <li className="dropdown">
                <Link to="#" className="navbar-brand" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Support<span className="caret"></span></Link>
                <ul className="dropdown-menu">
                    <li><Link to="/Management" className="navbar-brand">Management</Link></li>
                    <li><Link to="/HR" className="navbar-brand">HR</Link></li>
                    <li><Link to="/Linkccounting" className="navbar-brand">Accounting</Link></li>
                    <li><Link to="/Maintenance" className="navbar-brand">Maintenance</Link></li>
                    <li><Link to="/Shipping" className="navbar-brand">Shipping</Link></li>
                </ul>
            </li>
            <li><Link to="/Settings" className="navbar-brand">Settings</Link></li>
            <li><Link to="/AboutUs" className="navbar-brand">About Us</Link></li>
        </ul>
      </div>
    </div>
   
  </nav>

);

export default Nav;
