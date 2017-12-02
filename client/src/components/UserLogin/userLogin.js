import React from "react";
import Jumbotron from "../Jumbotron";
import Input from "../Input";
import Button from "../Button";
import { Container, Row, Col } from "../Grid";

const UserLogin = props => 
	<div> 
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
	                        value={props.username}
	                        onChange={props.handleInputChange}
	                        placeholder="Username"
	                      />
	                      <Input
	                        name="password"
	                        value={props.password}
	                        onChange={props.handleInputChange}
	                        placeholder="Password"
	                      />
	                      <Input
	                        name="firstName"
	                        value={props.firstName}
	                        onChange={props.handleInputChange}
	                        placeholder="First Name"
	                      />
	                      <Input
	                        name="lastName"
	                        value={props.lastName}
	                        onChange={props.handleInputChange}
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
    </div>;

 export default UserLogin; 