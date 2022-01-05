import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "./selogo.svg";
import "./App.css";

export default function Navb(){
    return (
         <Navbar className="bg-dark p-2" variant="dark" expand="sm">
    <Navbar.Brand>
      <img src={logo} alt="" className="mb-1" width="40px" height="40px" />
      <span className="h5 mt-2">Logo</span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="h5 text-decoration-none">
        <NavDropdown title="Products">
          <NavDropdown.Item href="Tea">Tea</NavDropdown.Item>
          <NavDropdown.Item href="Coffee">Coffee</NavDropdown.Item>
          <NavDropdown.Item href="Chocolate">Chocolate</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="Promo">Promo</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className=" text" href="products">
          Blog
        </Nav.Link>
        <Nav.Link className=" text" href="products">
          Contact Us
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
}