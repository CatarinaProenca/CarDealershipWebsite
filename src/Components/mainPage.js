import React, { Component } from "react";
import CarList from "./carList";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        {
          id: 1,
          name: "Porsche",
          model: "911",
          price: 135000,
          wiki: "https://pt.wikipedia.org/wiki/Porsche_911",
          img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTnuYVDLA0hr3qzoMEMsk5bkGQvzNFs0z06F5j5XbCibohp3CYu7g",
        },
        {
          id: 2,
          name: "Tesla",
          model: "Model S",
          price: 100000,
          wiki: "https://pt.wikipedia.org/wiki/Tesla_Model_S",
          img: "https://pplware.sapo.pt/wp-content/uploads/2019/06/novo_tesla_model_s_00.jpg",
        },
        {
          id: 3,
          name: "Tesla",
          model: "Model X",
          price: 120000,
          wiki: "https://pt.wikipedia.org/wiki/Tesla_Model_X",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrqgYzyFlYmq_4-MJr_5Hy_-LenNHufzMIHuJio88EMDEYlN_7g",
        },
        {
          id: 4,
          name: "Porsche",
          model: "Cayenne Turbo",
          price: 11000,
          wiki: "https://pt.wikipedia.org/wiki/Porsche_Cayenne",
          img: "https://www.motor24.pt/files/2019/08/4-1-800x533_c.jpg",
        },
        {
          id: 5,
          name: "Nissan",
          model: "GT-R",
          price: 80000,
          wiki: "ttps://pt.wikipedia.org/wiki/Nissan_GT-R",
          img: "https://fotos.jornaldocarro.estadao.com.br/uploads/2019/04/21122627/5ee03295-2020-nissan-gt-r-19-1160x773.jpg",
        },
        {
          id: 6,
          name: "BMW",
          model: "M3",
          price: 60500,
          wiki: "http://en.wikipedia.org/wiki/Bmw_m3",
          img: "https://cdn.motor1.com/images/mgl/R09nm/s3/bmw-m3-2021-im-test.jpg",
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
      search: "",
      info: 0,
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  searchCars = () => {
    return this.state.cars.filter((car) =>
      car.name
        .toString()
        .toUpperCase()
        .includes(this.state.search.toString().toUpperCase())
    );
  };

  /*updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }*/

  renderTags() {
    if (this.state.cars.length === 0)
      return <p>There are no cars available!</p>;

    return <p>Showing: {this.searchCars().length} cars total</p>;
  }

  render() {
    const { errorStatus } = this.state;

    return (
      <div className="car-display">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Car Dealership</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Pesquisar"
                className="mr-sm-2"
                value={this.state.search}
                onChange={this.handleSearch}
              />
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
        {this.renderTags()}
        <h2>Cars:</h2>
        {errorStatus && <p className="error">{errorStatus}</p>}
        <CarList cars={this.searchCars()} />
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
