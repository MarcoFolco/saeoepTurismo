import React from "react";
import "./../../styles/components/layout/Header.css";
import Carousel from 'react-bootstrap/Carousel';
// Imports de layout
import Navigation from './Nav';

const Header = (props) => {
    return (
        <header className="container p-0 mt-3">
            <section className="header-title pt-2">
                <a href="./index.html">
                    <img src="../../../images/page-icon.png" alt="Logo de la pagina" id="header-icon" />
                </a>
                <h1>S.A.E.O.E.P. Turismo</h1>
            </section>
            <Carousel id="carouselHeader" fade>
                <Carousel.Item interval={5000}>
                    <div className="w-100 h-100"></div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className="w-100 h-100"></div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className="w-100 h-100"></div>
                </Carousel.Item>
            </Carousel>
            <Navigation />
        </header>
    )
}

export default Header;