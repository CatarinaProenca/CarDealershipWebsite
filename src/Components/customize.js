import React, { Component } from "react";

class Customize extends Component {
  render(){
    //console.log(this.props.location.search)
    let id = this.props.location.search.substring(4);
    console.log(id)
      return (

        <div className = "menubar">
          <p>This is the second page.</p>
          <p>This is the second page.</p>
          <p>This is the second page.</p>
          <p>This is the second page.</p>
          <p>This is the second page.</p>
          <p>This is the second page.</p>
          <p>This is the second page.</p>
          <p>This is the second page.</p>
          <p>This is the second page.</p>
          <p>This is the second page.</p>
          <p>This is the second page.</p>
          <p>This is the second page.</p>
          <p>This is the second page.</p>
          
        </div>
        
    );
  }
 }

 export default Customize;