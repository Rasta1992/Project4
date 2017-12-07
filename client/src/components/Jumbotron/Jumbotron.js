import React from "react";
import "./Jumbotron.css"

const Jumbotron = ({ children }) =>
  <div style={{ height: 300 }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
// import React from "react";
// // import "./Jumbotron.css";
// // import {Container , Row, Col} from "../Grid";


// const Jumbotron = ({children}) => (

// //<Container>
// //  <Row>
//   <div style={{ height: 300 }} className="jumbotron">
//     {children}
//   </div>;

//     {/* <div className="text-center">
//       <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Hexahedron.gif" alt="Business Cube" width="130" height="130"/>
//       <h1 style={{color:"white"}}>Business in a Box</h1>
//       <a
//       target="_blank"
//       rel="noopener noreferrer"
//       href="#">
//       Designed by :
//       Shamar Orr,
//       Thomas Duell,
//       Joe Fuentes

//       </a>
//     </div> */}
// //  </Row>
// //</Container> 
// );

// export default Jumbotron;
