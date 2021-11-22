import { Component } from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { kebabCase } from "../../helpers/kebabCase";

export default class HotelCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Col>
          <Card id={this.props.key}>
            <Card.Img variant="top" src={this.props.img} />
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
              <Card.Text>
                טלפון={this.props.telephone} <br />
                רחוב={this.props.street} <br />
                כתובת={this.props.address} <br />
                בית={this.props.house} <br />
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {" "}
              <Link
                to={{
                  pathname: `/hotel/${encodeURI(kebabCase(this.props.name))}`,
                }}
              >
                לאתר הבית
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </div>
    );
  }
}
