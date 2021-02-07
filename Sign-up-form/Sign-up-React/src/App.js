import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Axios from "axios";

const App = () => {
  const [formData, setformData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Navbar color="primary" light>
        <NavbarBrand href="/" className="mr-auto" id="logo">
          SIGN UP
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" id="toogle" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem id="headlink">
              <NavLink href="/signin" id="headLinks">
                {" "}
                Sign In
              </NavLink>
            </NavItem>
            <NavItem id="headlink">
              <NavLink href="https://github.com/Rajan03" id="headLinks" target='_blank'>
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Container fluid id="userForm">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  value={formData.userName}
                  onChange={(e) => {
                    setformData({
                      ...formData,
                      userName: e.target.value,
                    });
                  }}
                  name="userName"
                  id="username"
                  placeholder="example123"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => {
                    setformData({
                      ...formData,
                      password: e.target.value,
                    });
                  }}
                  id="Password"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="text"
              value={formData.email}
              onChange={(e) => {
                setformData({
                  ...formData,
                  email: e.target.value,
                });
              }}
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="fullName">Full Name</Label>
            <Input
              type="text"
              value={formData.fullName}
              onChange={(e) => {
                setformData({
                  ...formData,
                  fullName: e.target.value,
                });
              }}
              name="fullName"
              id="fullName"
              placeholder="Rajan Verma"
            />
          </FormGroup>
          <Button color="primary" onClick={() => {
            Axios.post(
              "http://localhost:8000/app/signup",
              formData
            ).then((response) => console.log(response.data));
            setformData({
              fullName: "",
              userName: "",
              email: "",
              password: "",
            });
          }}>
            Sign Up
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default App;
