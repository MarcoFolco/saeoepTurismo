import React, { useEffect } from "react";
import "../../styles/components/layout/Nav.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    const dropdownActive = () => {
        const dropdownToggle = document.querySelector('#basic-nav-dropdown');
        dropdownToggle.classList.add('active');
    }
    // Add the active class to the dropwdown toggle when a dropdown item is clicked, and remove it if a nav-link item is clicked
    useEffect(() => {
        const navLinks = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");
        const dropdownToggles = document.querySelectorAll('#basic-nav-dropdown');

        Array.from(navLinks).forEach(navLink => {
            navLink.addEventListener('click', event => {
                Array.from(dropdownToggles).forEach(toggle => {
                    toggle.classList.remove('active');
                });
            }, false)
        });
    }, []);
    return (
        <Navbar expand="md" variant="dark" collapseOnSelect>
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img src="../../../images/page-icon.png" alt="Logo del navbar" id="nav-icon" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link eventKey="1" as={NavLink} to="/">
                            Inicio
                        </Nav.Link>
                        <NavDropdown title="Destinos" id="basic-nav-dropdown">
                            <NavDropdown.Item
                            eventKey="2"
                            as={NavLink}
                            to="destinos/sur-patagonia"
                            onClick={dropdownActive}>
                                Sur - Patagonia
                            </NavDropdown.Item>
                            <NavDropdown.Item
                            eventKey="3"
                            as={NavLink}
                            to="destinos/cordoba"
                            onClick={dropdownActive}>
                                Córdoba
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey="4" as={NavLink} to="cruceros">
                            Cruceros
                        </Nav.Link>
                        <Nav.Link eventKey="5" as={NavLink} to="descuentos">
                            Descuentos
                        </Nav.Link>
                        <Nav.Link eventKey="6" as={NavLink} to="contactenos">
                            Contactenos
                        </Nav.Link>
                        <Nav.Link eventKey="7" as={NavLink} to="nosotros">
                            Nosotros
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <nav className="container navbar sticky-top navbar-expand-md navbar-dark primary">
        //     <div className="container">
        //         <NavLink className="navbar-brand" to="/">
        //             <img src="../../../images/page-icon.png" alt="Logo del navbar" id="nav-icon" />
        //         </NavLink>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        //             data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        //             aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="/">
        //                         Inicio
        //                     </NavLink>
        //                 </li>
        //                 <li className="nav-item dropdown">
        //                     <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
        //                         aria-expanded="false" to="destinos">
        //                         Destinos
        //                     </NavLink>
        //                     <ul className="dropdown-menu primary">
        //                         <li><NavLink className="dropdown-item" to="destinos/sur-patagonia">
        //                             Sur - Patagonia
        //                         </NavLink></li>
        //                         <li><NavLink className="dropdown-item" to="destinos/cordoba">
        //                             Córdoba
        //                         </NavLink></li>
        //                     </ul>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="cruceros">
        //                         Cruceros
        //                     </NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="descuentos">
        //                         Descuentos
        //                     </NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="contactenos">
        //                         Contactenos
        //                     </NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="nosotros">
        //                         Nosotros
        //                     </NavLink>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navigation;