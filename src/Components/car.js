import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
      helperTextName: "",
      helperTextMail: "",
      email: "",
      wiki: this.props.info.wiki,
      value: "", //Cor
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
      pageNumber: 0
    })
    this.setOpen(false);
  };

  setOpen(flag) {
    this.setState({
      open: flag
    })
  }

  setHelperText(flag) {
    this.setState({
      helperText: flag
    })
  }

  setError(flag) {
    this.setState({
      error: flag
    })
  }

  setValue(flag) {
    this.setState({
      value: flag
    })
  }

 handleRadioChange = (event) => {
    this.setValue(event.target.value);
    this.setHelperText(' ');
    this.setError(false);
  };

 handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.value === '') {
      this.setHelperText('Please select an option.');
      this.setError(true);
    } else {
      this.setError(false);
      this.setState({
        pageNumber: 1
      })
    }
  };

  handleNameChange = (event) => {
    this.setState({
      userName: event.target.value
    })
    this.setHelperText(' ');
     this.setError(false);
   };

   handleEmailChange = (event) => {
     this.setState({
       email: event.target.value
     })
     this.setHelperText(' ');
      this.setError(false);
    };

  handleSubmit1 = (event) => {
     event.preventDefault();

     if(this.state.email === ""){
       this.setError(true);
       this.setState({
         helperTextMail: "Email errado"
       })
     }

     if (this.state.userName === "") {
       this.setError(true);
       this.setState({
         helperTextName: "Email errado"
       })
     }

     //Aqui tens os dados Todos
     console.log("cor - " + this.state.value)
     console.log("username - " + this.state.userName)
     console.log("Email - " + this.state.email)

     this.handleClose();
   };

  render(){

    return (
      <div>
        <h3> {this.state.name}{this.state.price}€</h3>
        <h4> {this.state.model} </h4>
        {this.state.wiki && <p>Link: {this.state.wiki}</p>}
        {<img src={this.state.img} alt="" width="193" height="130" />}
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Buy
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          {this.state.pageNumber === 0 ?
            <div>
              <DialogContent>
                <DialogContentText>
                  To subscribe to th
                </DialogContentText>
              </DialogContent>
              <form onSubmit={this.handleSubmit}>
                <FormControl component="fieldset" error={this.state.error} >
                  <FormLabel component="legend">Choose your color</FormLabel>
                  <RadioGroup aria-label="quiz" name="quiz" value={this.value} onChange={this.handleRadioChange}>
                    <FormControlLabel value="Red" control={<Radio color = "secondary"/>} label="Red" />
                    <FormControlLabel value="Blue" control={<Radio color = "primary"/>} label="Blue" />
                    <FormControlLabel value="Blue2" control={<Radio color = "error"/>} label="Blue2" />
                    <FormControlLabel value="Blue3" control={<Radio color = "info"/>} label="Blue3" />
                    <FormControlLabel value="Blue4" control={<Radio color = "warning"/>} label="Blue4" />
                    <FormControlLabel value="Blue5" control={<Radio color = "success"/>} label="Blue5" />
                  </RadioGroup>
                  <FormHelperText>{this.state.helperText}</FormHelperText>
                  <Button type="submit" variant="outlined" color="primary" >
                    Next
                  </Button>
                </FormControl>
              </form>
          </div>
          :
          null
        }
        {this.state.pageNumber === 1 ?
          <div>
            <DialogContent>
              <DialogContentText>
                Name and Email
              </DialogContentText>
            </DialogContent>
            <form onSubmit={this.handleSubmit1}>
              <div>
                <TextField required id="standard-required" helperText={this.state.helperTextName} label="Name" onChange={this.handleNameChange} />
                <TextField required id="standard-required" helperText={this.state.helperTextMail} label="Email" onChange={this.handleEmailChange}/>
              </div>
              <Button type="submit" variant="outlined" color="primary" >
                Finish
              </Button>
            </form>
        </div>
        :
        null
      }
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      </div>

  );
}
};

export default Car;
