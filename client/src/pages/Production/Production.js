import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Production.css";

class Production extends Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
              <h1>Our Staff</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Production;
