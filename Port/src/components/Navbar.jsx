// Navbar.js
import { Container, Nav, Navbar } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
