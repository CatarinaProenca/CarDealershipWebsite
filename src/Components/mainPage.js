import React, { Component } from "react";
import carList from "./carList";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      cars: [
        {
          id: 1,
          name: "Porsche",
          model: "911",
          price: 135000,
          wiki: "http://en.wikipedia.org/wiki/Porsche_997",
          img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnuYVDLA0hr3qzoMEMsk5bkGQvzNFs0z06F5j5XbCibohp3CYu7g",
        },
        {
          id: 2,
          name: "Tesla",
          model: "Model S",
          price: 100000,
          wiki: "http://en.wikipedia.org/wiki/Porsche_997",
          img: "http://media.caranddriver.com/images/14q4/638369/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-450x274.jpg",
        },
        {
          id: 3,
          name: "Tesla",
          model: "Model X",
          price: 120000,
          wiki: "http://en.wikipedia.org/wiki/Porsche_997",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrqgYzyFlYmq_4-MJr_5Hy_-LenNHufzMIHuJio88EMDEYlN_7g",
        },
        {
          id: 4,
          name: "Porsche",
          model: "Cayenne Turbo",
          price: 11000,
          wiki: "http://en.wikipedia.org/wiki/Porsche_997",
          img: "http://files3.porsche.com/filestore/galleryimagerwd/multimedia/none/rd-2013-9pa-e2-2nd-tu-gallery-exterior-06/preview/6e14937f-010f-11e4-84a6-001a64c55f5c/porsche-cayenne-image.jpg",
        },
        {
          id: 5,
          name: "Nissan",
          model: "GT-R",
          price: 80000,
          wiki: "http://en.wikipedia.org/wiki/Nissan_Gt-r",
          img: "http://media.caranddriver.com/images/14q4/638369/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-450x274.jpg",
        },
        {
          id: 6,
          name: "BMW",
          model: "M3",
          price: 60500,
          wiki: "http://en.wikipedia.org/wiki/Bmw_m3",
          img: "http://media.caranddriver.com/images/media/331369/m-is-for-mega-2015-bmw-m3-pricing-surfaces-photo-583888-s-450x274.jpg",
        },
        {
          id: 7,
          name: "Audi",
          model: "S5",
          price: 53000,
          wiki: "http://en.wikipedia.org/wiki/Audi_S5#Audi_S5",
          img: "http://www.blogcdn.com/www.autoblog.com/media/2012/11/001-2013-audi-s5-coupe.jpg",
        },
        {
          id: 8,
          name: "Audi",
          model: "TT",
          price: 40000,
          wiki: "http://en.wikipedia.org/wiki/Audi_TT",
          img: "http://www.topgear.com/sites/default/files/styles/16x9_640w/public/cars-road-test/image/2015/01/Large%20Image%20(optional)_417.jpg?itok=9L-AJyrg",
        },
      ],
      errorStatus: "",
    };
  }

  renderTags() {
    if (this.state.cars.length === 0)
      return <p>There are no cars available!</p>;

    return <p>Showing: {this.state.cars.length} cars total</p>;
  }

  render() {
    /* <div className="car-display">
        <p>Showing: {this.getNCars()} cars total</p>
        {
          this.props.carData.data.map(function(car){
            return (
              <div key={car.id} className="well">
                <div className="image-container">
                  <img src={car.img} />
                </div>
                <h3>{[car.make, car.model].join(" ")}</h3>
                <span>${car.price}</span>
              </div>
            )
          })
        }
      </div>*/
    const { errorStatus, cars } = this.state;

    return (
      <div className="car-display">
        {this.renderTags()}
        <h2>Cars:</h2>
        {errorStatus && <p className="error">{errorStatus}</p>}
        <carList cars={cars} />
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
