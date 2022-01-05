import logo from "./logo.svg";
import "./App.css";
//import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand, Nav, NavDropdown } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

export default function App() {
  let list = [1, 1, 1, 1];
  return (
    <div className="App">
      <Navb />
      <div className="row">
        <div className="col-12 bg-secondary text-light p-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora eos
          fugiat recusandae accusamus? Illum odit ipsa rem labore officiis,
          fugiat dignissimos praesentium doloribus delectus similique soluta
          deserunt! Debitis, expedita facere!
        </div>
      </div>
      <div className="row">
        {list.map(() => (
          <div className="col-12 col-md-3 d-flex text-dark p-3">
            <Cards></Cards>
          </div>
        ))}
      </div>
    </div>
  );
}

function Navb() {
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

function Cards() {
  return (
    <div className="card w-100 m-3">
      <img src="https://picsum.photos/300/200" alt="" />
      <div className="card-body">
        <div className="card-title border m-0 bg-secondary  text-center">
          #text
        </div>

        <div className="card-text text-center mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto natus
          blanditiis nemo eligendi? Delectus consequatur error labore assumenda
          praesentium at doloribus eligendi, architecto reprehenderit fuga. Vero
          eaque dolorem doloribus aperiam.
        </div>
      </div>
      <div className="card-footer text-center">
        <button type="button" class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}
