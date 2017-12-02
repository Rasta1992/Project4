import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";
import UserLogin from "./components/UserLogin"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";

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
    return (<div> 
      <Nav/>
     <Router>
        <div>      
          <Switch>
            <Route exact path="/" component={UserLogin} />       
            <Route component={NoMatch} />
          </Switch>
      </div>
    </Router>
      </div>
    );    
  }
}

export default App;
