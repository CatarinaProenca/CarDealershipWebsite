import React from "react";
import classnames from "classnames";

const Car = ({ name, model, price, wiki, img }) => {
  return (
    <article className={classnames("Car", { model, price })}>
      <h3>{name}</h3>
      {wiki && <p>Link: {wiki}</p>}
    </article>
  );
};

export default Car;
