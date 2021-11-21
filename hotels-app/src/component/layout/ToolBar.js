import { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar
        class="navbar"
        collapseOnSelect
        fixed="top"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>Hotels App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Link class="link" to="/">
                Home
              </Link>
              <Link class="link" to="/hotelHome">
                Contacts
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      //   <>
      //     <Navbar bg="dark" variant="dark" collapseOnSelect fixed="top">
      //       <Container>
      //         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      //         <Nav.Collapse className="me-auto">
      //           <Nav.Link href="#home">Home</Nav.Link>
      //           <Nav.Link href="#features">Features</Nav.Link>
      //           <Nav.Link href="#pricing">Pricing</Nav.Link>
      //         </Nav.Collapse>
      //       </Container>
      //     </Navbar>
      //     <br />
      //   </>
    );
  }
}
