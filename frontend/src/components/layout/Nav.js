import React from "react";
import "../../styles/components/layout/Nav.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className="container navbar sticky-top navbar-expand-md navbar-dark primary">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src="../../../images/page-icon.png" alt="Logo del navbar" id="nav-icon" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false" to="destinos">
                                Destinos
                            </NavLink>
                            <ul className="dropdown-menu primary">
                                <li><NavLink className="dropdown-item" to="destinos/sur-patagonia">
                                    Sur - Patagonia
                                </NavLink></li>
                                <li><NavLink className="dropdown-item" to="destinos/cordoba">
                                    Córdoba
                                </NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="cruceros">
                                Cruceros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="descuentos">
                                Descuentos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="contactenos">
                                Contactenos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="nosotros">
                                Nosotros
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;