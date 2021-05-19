import React from "react";
import classnames from "classnames";
import Info from "./infoPage";
//import { MDBIcon } from "mdbreact";

const Car = ({ name, model, price, wiki, img }) => {
  return (
    <article className={classnames("Car", { model, price })}>
      <h3>
        {name} {price}€
      </h3>
      <h4>{model}</h4>
      {wiki && <p>Link: {wiki}</p>}
      {<img src={img} alt="" width="193" height="130" />}
      <a
        className="btn btn-success btn-sm"
        onClick={() => {
          window.location.href = `/customize?id=${model}`;
        }}
      >
        Comprar
      </a>
      <button className="btn btn-primary btn-sm">+Info</button>
    </article>
  );
};

export default Car;
