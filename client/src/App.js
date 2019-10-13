import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    urls: ""
  };
  openNewTab = () => {
    console.log("Clicked");
    axios
      .get(`http://localhost:9000/users`, {
        params: {
          url: "https://www.aliexpress.com"
        }
      })
      .then(res => {
        const urls = res.data;
        this.setState({ urls });
      });
  };

  render() {
    return (
      <div className="App">
        <button className="btn btn-primary" onClick={this.openNewTab}>
          Click
        </button>
        <p>{this.state.urls}</p>
      </div>
    );
  }
}

export default App;
