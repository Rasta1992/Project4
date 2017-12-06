import React from "react";
import "./Jumbotron.css";
import {Container , Row, Col} from "../Grid";


const Jumbotron = () => (

<Container>
  <Row>

    <div className="text-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Hexahedron.gif" alt="Business Cube" width="130" height="130"/>
      <h1 style={{color:"green"}}>Business in a Box</h1>
      <a
      target="_blank"
      rel="noopener noreferrer"
      href="#">
      Designed by :
      Shamar Orr,
      
      Thomas Duell,

      Joe Fuentes

      </a>
    </div>
  </Row>
</Container> 
  );

export default Jumbotron;
