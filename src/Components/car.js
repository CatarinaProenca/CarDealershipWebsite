import React from "react";
import classnames from "classnames";
import Info from "./infoPage";
import handleClickInfo from "./mainPage";
//import { MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

const Car = ({ name, model, price, wiki, img }) => {
  return (
    <article className={classnames("Car", { model, price })}>
      <h3>
        {name} {price}€
      </h3>
      <h4>{model}</h4>
      {wiki && <p>Link: {wiki}</p>}
      {<img src={img} alt="" width="193" height="130" />}
      <button onClick={handleClickInfo} className="btn btn-success btn-sm">
        Comprar
      </button>
      <button className="btn btn-primary btn-sm">+Info</button>
    </article>
  );
};

export default Car;
