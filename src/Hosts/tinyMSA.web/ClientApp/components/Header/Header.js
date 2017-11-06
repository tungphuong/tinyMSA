// @flow

import React, { Component } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";

import HeaderDropdown from "./HeaderDropdown";

class Header extends React.Component<any> {
  mobileSidebarToggle(e: SyntheticEvent<>) {
    e.preventDefault();
    if (!document.body) {
      throw new Error();
    }
    document.body.classList.toggle("sidebar-mobile-show");
  }

  asideToggle(e: SyntheticEvent<>) {
    e.preventDefault();
    if (!document.body) {
      throw new Error();
    }
    document.body.classList.toggle("aside-menu-hidden");
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle("sidebar-hidden");
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
        <NavbarBrand href="#" />
        <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="#">Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Users</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Settings</NavLink>
          </NavItem>
        </Nav>

        <Nav className="ml-auto" navbar>
          <HeaderDropdown />
        </Nav>

        <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
      </header>
    );
  }
}

export default Header;
