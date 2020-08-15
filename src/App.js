import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Olena Turetska",
      headerLinks: [
        { title: "About", path: "/" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "Contact", path: "/contact" }
      ],
      about: {
        title: "About me",
        text: "my story",
        github: "https://github.com/kisjan4ik",
        linkedin: "https://www.linkedin.com/in/olena-turetska-82126a191/",
        email: "aliona_kuzmenko@yahoo.com",
        phone: "407-308-16-72"

      },
      portfolio: {
        title: "Portfolio",
        subtitle: "My projects:"
      },
      contact: {
        title: "Email me:"

      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg" >
            <Navbar.Brand>Olena Turetska</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <AboutPage title={this.state.about.title} text={this.state.about.text} />} />
          <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} subtitle={this.state.portfolio.subtitle} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/React_Portfolio" render={() => <AboutPage title={this.state.about.title} text={this.state.about.text} />} />

          <Footer />
        </Container>
      </Router>

    )
  };
}

export default App;
