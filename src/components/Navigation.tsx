import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <NavLink to="/">Home</NavLink>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
