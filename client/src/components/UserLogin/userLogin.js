// import React from "react";
// import Input from "../Input";
// import Button from "../Button";
// import { Container, Row, Col } from "../Grid";

// const UserLogin = props => 
// 	<div> 
// 	        <Container>
// 	          <Row>
// 	            <Col size="md-12">
// 	              <form>
// 	                <Container>
// 	                  <Row>
// 	                    <Col size="xs-9 sm-5">
// 	                      <Input
// 	                        name="username"
// 	                        value={props.username}
// 	                        onChange={props.handleInputChange}
// 	                        placeholder="Username"
// 	                      />
// 	                      <Input
// 	                        name="password"
// 	                        value={props.password}
// 	                        onChange={props.handleInputChange}
// 	                        placeholder="Password"
// 	                      />
// 	                    </Col>
// 	                  </Row>
// 	                  <Row>
// 	                  	<Col size="xs-3 sm-2">
// 	                      <Button
// 	                        onClick={this.handleFormSubmit}
// 	                        type="success"
// 	                        className="input-lg"
// 	                      >
// 	                        Sign Up!
// 	                      </Button>
// 	                    </Col>
// 	                  </Row>
// 	                </Container>
// 	              </form>
// 	            </Col>
// 	          </Row>	          
// 	        </Container>
//     </div>;

//  export default UserLogin; 

 import React from "react";
 import Jumbotron from "../Jumbotron";
 import Input from "../Input";
 import Button from "../Button";
 import { Container, Row, Col } from "../Grid";
 //import Purchase from "../Purchase";
 
 const UserLogin = props => 
 <div> 
 <Jumbotron />
 {/* <Purchase /> */}
				<Container>
					<Row>
						<Col size="md-12">
							<form>
								<Container>
									<Row>
										<Col size="xs-9 sm-5">
											<Input
												type="text"
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
										</Col>
									</Row>
									<Row>
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