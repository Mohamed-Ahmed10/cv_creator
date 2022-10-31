import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import logo from "../assets/images/logo.png";
const CvNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink className="nav-link" to="/">
                    <img src={logo} alt="Site logo" className="site_logo" />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to="/create">
                            Create
                        </NavLink>
                        <NavLink className="nav-link" to="/preview">
                            Preview
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CvNavbar;
