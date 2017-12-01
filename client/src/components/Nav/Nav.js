import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">Home</a>
        <a href="/Purchasing" className="navbar-brand">Purchasing</a>
        <a href="/Production" className="navbar-brand">Production</a>
        <a href="/Sold" className="navbar-brand">Sold!</a>
        <a href="/Support" className="navbar-brand">Support</a>
        <a href="/Setting" className="navbar-brand">Setting</a>
        <a href="/AboutUs" className="navbar-brand">About Us</a>
      </div><!-- /.navbar-header -->
    </div><!-- /.container-fluid -->
  </nav><!-- navbar navbar-inverse navbar-top -->
);

export default Nav;
