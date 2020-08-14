import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import  Navbar from "react-bootstrap/Navbar";
import  Nav from "react-bootstrap/Nav";

import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Olena Turetska",
      headerLinks: [
        {title: "About", path:"/"},
        {title: "Portfolio", path: "/portfolio"},
        {title: "Contact", path: "/contact"}
      ],
      about:{
        title: "About me",
        
      },
      portfolio: {
        title: "Portfolio",
        sultitle: "My projects:"
      },
      contact: {
        title: "Email me:"

      }
    }
  }
  render(){
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
  <Footer />
</Container>
   </Router>

  )
};
}

export default App;
