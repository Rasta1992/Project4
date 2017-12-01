import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand brand" href="/">BusinessBox</a>
    </div>
        <a href="/" className="navbar-brand">Home</a>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="/Purchase" className="navbar-brand">Purchase</a></li>
                <li><a href="/Production" className="navbar-brand">Production</a></li>
                <li><a href="/Sold" className="navbar-brand">Sold!</a></li>
                <li><a href="/Support" className="navbar-brand">Support</a></li>
                <li><a href="/Settings" className="navbar-brand">Settings</a></li>
                <li><a href="/AboutUs" className="navbar-brand">About Us</a></li>
            </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
