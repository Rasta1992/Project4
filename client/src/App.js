import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";

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
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="Username"
                      />
                      <Input
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        placeholder="Password"
                      />
                      <Input
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        placeholder="First Name"
                      />
                      <Input
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        placeholder="Last Name"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Sign Up!
                      </Button>
                    </Col>
                  </Row>


                </Container>
              </form>
            </Col>
          </Row>
          
        </Container>
      </div>
    );
  }
}

export default App;
