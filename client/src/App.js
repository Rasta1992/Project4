import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Row, Col } from "./components/Grid";
import UserLogin from "./components/UserLogin"; 
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import HomePage from "./pages/HomePage";
import Purchase from "./pages/Purchase";
// import Production from "./pages/Production";
import Support from "./pages/Support";
import Staffing from "./pages/Staffing";


class App extends Component {
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    console.log(this.state.username);
    console.log(this.state.password);
    
  };

  render() {
    return (<Router>
      <div> 
        <Nav/>
        <div>      
          <Switch>
            <Route exact path="/" component={UserLogin}/>
            <Route exact path="/Purchase" component={Purchase}/>
            {/* <Route exact path="/Production" component={Production}/> */}
            <Route exact path="/Support" component={Support}/>
            <Route exact path="/Staffing" component={Staffing}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
        </div>
            </Router>
    );    
  }
}

export default App;
