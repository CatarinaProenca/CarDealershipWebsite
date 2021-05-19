import React from "react";
import Car from "./car";

const CarList = ({ cars }) => {
  return (
    <div className="CarList-car">
      {cars.map((item) => (
        <Car key={item.id} {...item} info = {item}/>
      ))}
    </div>
  );
};

CarList.defaultProps = {
  car: [],
};

export default CarList;
