import * as React from "react";
import { Container } from "reactstrap";

import { Header, Sidebar } from "../../components";

class Full extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Full;
