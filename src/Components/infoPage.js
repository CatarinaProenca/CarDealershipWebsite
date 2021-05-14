import React, { Component } from "react";
import CarList from "./carList";
import {
  Navbar,
  Form,
  NavDropdown,
  FormControl,
  Nav,
  Button,
} from "react-bootstrap";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorStatus: "",
      search: "",
    };
  }

  render() {
    const { errorStatus, cars } = this.state;

    return (
      <div className="car-display">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Car Dealership</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Página inicial</Nav.Link>
              <Nav.Link href="#link">Em processamento</Nav.Link>
              <NavDropdown title="Mais" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Nao sei</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Nao sei1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Nao sei2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Nao sei3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Pesquisar"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Pesquisar</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className="menubar">
          <h2
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              borderBottomWidth: 10,
            }}
            className="textNav"
          >
            Welcome to Car Dealership
          </h2>
        </div>

        {errorStatus && <p className="error">{errorStatus}</p>}
      </div>
    );
  }

  /*getNCars(){
    /* carData.data.forEach(function(car) {
            car.id = id++;
    });

    return carData.data.length;
    }*/
}

export default MainPage;
