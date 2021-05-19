import React, { Component } from "react";
import classnames from "classnames";
import { Button, ButtonGroup } from "react-bootstrap";

class Customize extends Component {
  render() {
    //console.log(this.props.location.search)
    let id = this.props.location.search.substring(4);
    console.log(id);
    return (
      <form>
        <div className="colors">
          <h3
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              borderBottomWidth: 10,
            }}
            className="textNav"
          >
            <p>Choose the color:</p>
            <ButtonGroup size="lg" className="mb-2">
              <Button className="btn btn-primary btn-lg">Azul</Button>
              <Button className="btn btn-secondary btn-lg">Cinzento</Button>
              <Button className="btn btn-success btn-lg">Verde</Button>
              <Button className="btn btn-danger btn-lg">Vermelho</Button>
              <Button className="btn btn-warning btn-lg">Amarelo</Button>
              <Button className="btn btn-light btn-lg">Branco</Button>
              <Button className="btn btn-dark btn-lg">Preto</Button>
            </ButtonGroup>
          </h3>
        </div>
        <div className="models">
          <h3
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              borderBottomWidth: 10,
            }}
            className="textNav"
          >
            <p>Choose the Model:</p>
            <ButtonGroup size="lg" className="mb-2"></ButtonGroup>
            <Button variant="outline-success">Comprar</Button>{" "}
          </h3>
        </div>
      </form>
    );
  }
}

export default Customize;
