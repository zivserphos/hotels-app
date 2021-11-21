import { Component } from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class HotelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Col className="HotelPageCardPadding">
        <Card style={{ width: "18rem", margin: "auto" }}>
          <Card.Img variant="top" src="/images/contact.png" />
          <Card.Body>
            <Card.Title>{this.props.hotel["שם"]}</Card.Title>
            <Card.Text className="align-right">
              טלפון: {this.props.hotel["בית"]}-{this.props.hotel["טלפון"]}{" "}
              <br />
              כתובת: {this.props.hotel["שם רחוב"]}
            </Card.Text>
          </Card.Body>
          <Card.Footer>Call Me!</Card.Footer>
        </Card>
      </Col>
    );
  }
}
