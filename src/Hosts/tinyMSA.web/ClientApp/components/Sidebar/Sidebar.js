import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Badge, Nav, NavItem, NavLink as RsNavLink} from 'reactstrap';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <Nav />
        </nav>
      </div>
    );
  }
}

export default Sidebar;
