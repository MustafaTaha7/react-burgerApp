import React, { Component } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";
class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    render() {
        return (
            <div>
              <Toolbar />
              <SideDrawer open ={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
              <main className="content">{this.props.children}</main>
            </div>
          );
    }
  
};
export default Layout;
