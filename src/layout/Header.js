import React, { Component } from "react";
import Navbar from "../components/Navbar";




class Header extends Component {
  state = {
    navBar: false,
  };
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.navBar !== nextState.navBar;
  }
  render() {
    const changeBackgroundColor = () => {
      if (window.scrollY >= 80) {
        this.setState({
          navBar: true,
        });
      } else {
        this.setState({
          navBar: false,
        });
      }
    };
    window.addEventListener("scroll", changeBackgroundColor);
    return (
      <header>
        <div className={this.state.navBar ? "top_header active" : "top_header"}>
          <h1>Assalomu alaykum</h1>
          <Navbar />
        </div>
        <div className="header_bottom">
          <h1>Bizning Xizmatlardan foydalaning😎</h1>
        </div>
      </header>
    );
  }
}

export default Header;
