import { Navbar, Nav, NavDropdown} 
from 'react-bootstrap';
import SearchForm from "./SearchForm";

export default function Header(props){
    return(

<Navbar className="nav-news" collapseOnSelect expand="lg" bg="dark" variant="dark">
<img
        src="LogoNewsBoard.png"
        width="30"
        height="30"
        className="d-inline-block align-top mr-3"
        alt="React Bootstrap logo"/>
  <Navbar.Brand href="#home">NewsBoard</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">News</Nav.Link>
      <Nav.Link href="#pricing">Past</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Comments</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Ask</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Show</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Jobs</NavDropdown.Item>
      </NavDropdown>
      <SearchForm
      onSubmit={props.handleSubmit}
      type="text"
      value={props.value}
      onChange={props.handleChange}
      />
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Submit</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}