import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarTop() {
  return (
    <>
      <Navbar bg="dark" variant="dark" id="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://media.discordapp.net/attachments/1024594853008506920/1068560828032352377/MeWe_logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="MeWe"
              id="navbar__logo"
            />
            <span id="navbar__name">MeWe - Together Sustainable</span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              id="navbar__navigation"
              className="underline.gradient"
              href="#navigation1"
            >
              Navigation1
            </Nav.Link>
            <Nav.Link
              id="navbar__navigation"
              className="underline.gradient"
              href="#navigation2"
            >
              Navigation2
            </Nav.Link>
            <Nav.Link
              id="navbar__navigation"
              className="underline.gradient"
              href="#navigation3"
            >
              Navigation3
            </Nav.Link>
            <Nav.Link
              id="navbar__navigation"
              className="underline.gradient"
              href="#navigation4"
            >
              Navigation4
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarTop;
