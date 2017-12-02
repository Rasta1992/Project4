import React from "react";
import "./Nav.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand brand" href="/">BusinessBox</a>
      <a href="/" className="navbar-brand">Home</a>
    </div>

<Router>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
            <li><Link to="/Purchase" className="navbar-brand">Purchase</Link></li>
            <li><a href="/Production" className="navbar-brand">Production</a></li>
            <li><a href="/Sold" className="navbar-brand">Sold!</a></li>
            <li className="dropdown">
                <a href="#" className="navbar-brand" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Support<span className="caret"></span></a>
                <ul className="dropdown-menu">
                    <li><a href="/Management" className="navbar-brand">Management</a></li>
                    <li><a href="/HR" className="navbar-brand">HR</a></li>
                    <li><a href="/Accounting" className="navbar-brand">Accounting</a></li>
                    <li><a href="/Maintenance" className="navbar-brand">Maintenance</a></li>
                    <li><a href="/Shipping" className="navbar-brand">Shipping</a></li>
                </ul>
            </li>
            <li><a href="/Settings" className="navbar-brand">Settings</a></li>
            <li><a href="/AboutUs" className="navbar-brand">About Us</a></li>
        </ul>
      </div>
      </Router>
    </div>
   
  </nav>
);

export default Nav;
