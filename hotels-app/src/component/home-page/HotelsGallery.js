import { Component } from "react";
import HotelCard from "./HotelCard";
import { Row, Container } from "react-bootstrap";
import img from "../../images/contact.png";
import { data } from "../../helpers/hotels";

export default class HotelGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const cards = data.map((card) => {
      return (
        <HotelCard
          img={img}
          name={card["שם"]}
          address={card["כתובת"]}
          street={card["רחוב"]}
          telephone={card["טלפון"]}
          house={card["בית"]}
          key={card["key"]}
        />
      );
    });
    return (
      <Container>
        <Row className="g-4" xs={2} md={4}>
          {cards}
        </Row>
      </Container>
    );
  }
}
