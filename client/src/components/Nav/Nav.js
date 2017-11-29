import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">Home</a>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="/Buy" className="navbar-brand">Buy</a>
                </li>
                <li>
                    <a href="/Accounts" className="navbar-brand">Accounts</a>
                </li>
                <li>
                    <a href="/Production" className="navbar-brand">Production</a>
                </li>
                <li>
                    <a href="/Sell" className="navbar-brand">Sell</a>
                </li>
                <li>
                    <a href="/Support" className="navbar-brand">Support</a>
                </li>
                <li>
                    <a href="/Setting" className="navbar-brand">Setting</a>
                </li>
                <li>
                    <a href="/AboutUs" className="navbar-brand">About Us</a>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
      </div>
    </div>
  </nav>
);

export default Nav;
