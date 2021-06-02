import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import * as emailjs from "emailjs-com";
//import { MDBIcon } from "mdbreact";

class Car extends Component {
  constructor(props) {
    super(props);
    //const [open, setOpen] = React.useState(false);
    this.state = {
      open: false,
      name: this.props.info.name,
      model: this.props.info.model,
      price: this.props.info.price,
      pageNumber: 0,
      userName: "",
      address: "",
      helperTextName: "",
      helperTextMail: "",
      helperTextAddress: "",
      email: "",
      wiki: this.props.info.wiki,
      value: "", //Cor
      vin: "",
      license: "",
      error: "",
      helperText: "",
      img: this.props.info.img,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickOpen = () => {
    this.setOpen(true);
  };

  handleClose = () => {
    this.setState({
      pageNumber: 0,
    });
    this.setOpen(false);
  };

  setOpen(flag) {
    this.setState({
      open: flag,
    });
  }

  setHelperText(flag) {
    this.setState({
      helperText: flag,
    });
  }

  setError(flag) {
    this.setState({
      error: flag,
    });
  }

  setValue(flag) {
    this.setState({
      value: flag,
    });
  }

  handleRadioChange = (event) => {
    this.setValue(event.target.value);
    this.setHelperText(" ");
    this.setError(false);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.value === "") {
      this.setHelperText("Please select an option.");
      this.setError(true);
    } else {
      this.setError(false);
      this.setState({
        pageNumber: 1,
      });
    }
  };

  handleNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
    this.setHelperText(" ");
    this.setError(false);
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
    this.setHelperText(" ");
    this.setError(false);
  };

  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value,
    });
    this.setHelperText(" ");
    this.setError(false);
  };

  handleSubmit1 = (event) => {
    event.preventDefault();

    if (this.state.email === "") {
      this.setError(true);
      this.setState({
        helperTextMail: "Email errado",
      });
    }

    if (this.state.userName === "") {
      this.setError(true);
      this.setState({
        helperTextName: "Email errado",
      });
    }

    //Aqui tens os dados Todos
    console.log("cor - " + this.state.value);
    console.log("username - " + this.state.userName);
    console.log("Email - " + this.state.email);
    console.log("Address - " + this.state.address);
    this.handleClose();

    (async () => {
      await this.fetch_vin_license(function () {
        console.log("");
      });
    })();

    // ------------------------------------------------------------------------
  };

  async fetch_vin_license(_callback) {
    // -------------------- request à REST API para ver se existe o veículo ----------------------
    const model_color =
      "model=" + this.state.model + "&color=" + this.state.value;

    const response = await fetch(
      "https://4dtokwix40.execute-api.us-east-1.amazonaws.com/getCar/getcars?" +
        model_color
    );
    const json = await response.json();
    if (json.statusCode === 200) {
      console.log("Carro existeiii!!");
      this.setState({ vin: json.vin });
      console.log("VIN: " + this.state.vin);
    } else {
      console.log("Carro não existe!!");
      return;
    }

    var data = {
      to_email: this.state.email,
      name: this.state.userName,
      color: this.state.value,
      model: this.state.model,
      car: this.state.name,
      vin: this.state.vin,
      address: this.state.address,
    };

    // ------------------- envia o email a confirmar o pedido -----------------
    /*emailjs.send(
      "service_2m96o4t",
      "template_f1h2xzs",
      data,
      "user_MIlsk8WDaHRjzZFRIshub"
    );*/
    // ------------------------------------------------------------------------

    const response2 = await fetch(
      "https://1cndwc1y01.execute-api.us-east-1.amazonaws.com/CheckVin/checkvin/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vin: this.state.vin }),
      }
    );
    const json2 = await response2.json();
    if (response2.status === 200) {
      console.log("VIN recebido!!");
    } else {
      console.log("Falha ao enviar VIN!!");
    }

    const response1 = await fetch(
      "https://1cndwc1y01.execute-api.us-east-1.amazonaws.com/CheckVin/checkvin?vin=" +
        this.state.vin
    );
    const json1 = await response1.json();

    if (json1.statusCode === 200) {
      console.log("Matricula recebida!");
      this.setState({ license: json1.license });
      console.log("License: " + this.state.license);
      this.setState({ qrcode: json1.qrcode });
      console.log("qr: " + json1.qrcode);
    } else {
      console.log("Falha com a matricula!!");
    }

    var data1 = {
      to_email: this.state.email,
      name: this.state.userName,
      color: this.state.value,
      model: this.state.model,
      car: this.state.name,
      vin: this.state.vin,
      address: this.state.address,
      license: this.state.license,
      qrcode: this.state.qrcode,
    };

    // ------------------- envia o email a confirmar o pedido -----------------
    /*emailjs.send(
      "service_2m96o4t",
      "template_t08jm0j",
      data1,
      "user_MIlsk8WDaHRjzZFRIshub"
    );*/

    _callback();
  }

  render() {
    return (
      <div>
        <h3>
          {" "}
          {this.state.name} - {this.state.price}€
        </h3>
        <h4> {this.state.model} </h4>
        {this.state.wiki && (
          <p>
            <tr>
              <td>
                <a href={this.state.wiki}>Mais informações do carro</a>
              </td>
            </tr>
          </p>
        )}
        {<img src={this.state.img} alt="" width="193" height="130" />}
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Buy
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Personalize</DialogTitle>
          {this.state.pageNumber === 0 ? (
            <div>
              <form onSubmit={this.handleSubmit}>
                <FormControl component="fieldset" error={this.state.error}>
                  <FormLabel component="legend">
                    Choose your car color
                  </FormLabel>
                  <RadioGroup
                    aria-label="quiz"
                    name="quiz"
                    value={this.value}
                    onChange={this.handleRadioChange}
                  >
                    <FormControlLabel
                      value="Red"
                      control={<Radio color="secondary" />}
                      label="Red"
                    />
                    <FormControlLabel
                      value="Blue"
                      control={<Radio color="primary" />}
                      label="Blue"
                    />
                    <FormControlLabel
                      value="Grey"
                      control={<Radio color="error" />}
                      label="Grey"
                    />
                    <FormControlLabel
                      value="Green"
                      control={<Radio color="sucess" />}
                      label="Green"
                    />
                    <FormControlLabel
                      value="Black"
                      control={<Radio color="warning" />}
                      label="Black"
                    />
                    <FormControlLabel
                      value="Yellow"
                      control={<Radio color="success" />}
                      label="Yellow"
                    />
                  </RadioGroup>
                  <FormHelperText>{this.state.helperText}</FormHelperText>
                  <Button type="submit" variant="outlined" color="primary">
                    Next
                  </Button>
                </FormControl>
              </form>
            </div>
          ) : null}
          {this.state.pageNumber === 1 ? (
            <div>
              <DialogContent>
                <DialogContentText>
                  Name, Email and Delivery Address
                </DialogContentText>
              </DialogContent>
              <form onSubmit={this.handleSubmit1}>
                <div>
                  <TextField
                    required
                    id="standard-required"
                    helperText={this.state.helperTextName}
                    label="Name"
                    onChange={this.handleNameChange}
                  />
                  <TextField
                    required
                    id="standard-required"
                    helperText={this.state.helperTextMail}
                    label="Email"
                    onChange={this.handleEmailChange}
                  />
                  <p></p>
                  <TextField
                    required
                    id="standard-full-width"
                    helperText={this.state.helperTextAddress}
                    label="Address"
                    fullWidth
                    onChange={this.handleAddressChange}
                  />
                </div>
                <Button type="submit" variant="outlined" color="primary">
                  Finish
                </Button>
              </form>
            </div>
          ) : null}
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Car;
