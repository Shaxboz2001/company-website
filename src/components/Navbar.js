import React, { Component } from 'react';

class Navbar extends Component {
  state = {
    isMobile: false,
  };
  
  render() {
    return (
      <nav className={this.state.isMobile ? "active-burger" : ""}>
        <ul className={this.state.isMobile ? "nav-links-mobile" : "nav-links"}>
          <li>
            <a href="#about">Biz haqimizda</a>
          </li>
          <li>
            <a href="!#">Taomlar</a>
          </li>
          <li>
            <a href="!#">Xizmatlar</a>
          </li>
          <li>
            <a href="!#">Aloqa</a>
          </li>
        </ul>
        <div
          className="burger"
          onClick={() => {
            this.setState({
              isMobile: !this.state.isMobile,
            });
          }}
        >
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </nav>
    );
  }
}
 
export default Navbar;