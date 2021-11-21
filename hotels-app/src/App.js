import React, { Component, createContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "./component/button";
import "./common.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import HotelGallery from "./component/home-page/HotelsGallery";

const Context = createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "white",
      hotel: "hara",
    };
  }
  changeColor = (color) => {
    if (color !== this.state.backgroundColor) {
      this.setState({
        backgroundColor: color,
      });
    }
  };
  render() {
    return (
      <Context.Provider value={this.state.hotel}>
        <div
          className="App"
          style={{ backgroundColor: this.state.backgroundColor }}
        >
          Boker Tov Olam!
          <div className="button">
            <Button color="grey" changeColor={this.changeColor} />
            <Button color="white" changeColor={this.changeColor} />
          </div>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/">Home-Page</Link> |{" "}
            {/* <Link to="/expenses">Expenses</Link> */}
          </nav>
          <Outlet />
          <HotelGallery />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
