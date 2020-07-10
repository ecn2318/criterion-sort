import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Wrapper from "./Wrapper";


class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };


  //calling setState method - update current page with new value
  //value coming through page will be "home" or "about"
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {

    //check value of currentPage in state
    if (this.state.currentPage === "About") {
      return <About />
    } else if (this.state.currentPage === "Blog") {
      return <Blog />
    } else if (this.state.currentPage === "Contact") {
      return <Contact />
    } else if (this.state.currentPage === "Home") {
      return <Home />
    }

  }

  //define your own renderPage()

  //handlePageChange takes in parameter that we need to provide parameter for - provide value for (page)

  render(props) {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />

        {this.renderPage()}

      </div>
    );
  }
}

export default PortfolioContainer;
