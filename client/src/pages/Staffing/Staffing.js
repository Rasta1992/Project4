import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Staffing extends Component {
  state = {
    staffMember: [],
    memberName: "",
    department: "",
    jobTitle: "",
    address: "",
    phoneNumber: "",
    hireDate: ""
  };

  componentDidMount() {
    this.loadStaff();
  }

  loadStaff = () => {
    API.getStaff()
      .then(res =>
        this.setState({ staffMember: res.data, memberName: "", department: "", jobTitle: "", address: "", phoneNumber: "", hireDate: "" })
      )
      .catch(err => console.log(err));
  };

  deleteStaff = id => {
    API.deleteStaff(id)
      .then(res => this.loadStaffs())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.memberName && this.state.jobTitle) {
      API.saveStaff({
        memberName: this.state.memberName,
        jobTitle: this.state.jobTitle,
        address: this.state.address
      })
        .then(res => this.loadStaff())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            {/* <Jumbotron> */}
              <h1>Enter New Employee Information</h1>
            {/* </Jumbotron> */}
            <form>
              <Input
                value={this.state.memberName}
                onChange={this.handleInputChange}
                name="memberName"
                placeholder="Employee Name (required)"
              />
              <Input
                value={this.state.department}
                onChange={this.handleInputChange}
                name="department"
                placeholder="Department (required)"
              />
              <Input
                value={this.state.jobTitle}
                onChange={this.handleInputChange}
                name="jobTitle"
                placeholder="Job Title (optional)"
              />
              <TextArea
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="Address (required)"
              />
              <Input
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                name="phoneNumber"
                placeholder="phone number (required)"
              />
              <FormBtn
                disabled={!(this.state.jobTitle && this.state.memberName)}
                onClick={this.handleFormSubmit}
              >
                Submit Staff
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Staffing;
