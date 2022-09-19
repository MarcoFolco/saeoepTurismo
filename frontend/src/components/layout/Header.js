import React from "react";
import "./../../styles/components/layout/Header.css";
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
            <section id="carouselHeader" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselHeader" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active h-100" data-bs-interval="5000">
                        <div className="w-100 h-100"></div>
                    </div>
                    <div className="carousel-item h-100" data-bs-interval="5000">
                        <div className="w-100 h-100"></div>
                    </div>
                    <div className="carousel-item h-100" data-bs-interval="5000">
                        <div className="w-100 h-100"></div>
                    </div>
                    <div className="carousel-item h-100" data-bs-interval="5000">
                        <div className="w-100 h-100"></div>
                    </div>
                    <div className="carousel-item h-100" data-bs-interval="5000">
                        <div className="w-100 h-100"></div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselHeader" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselHeader" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </section>
            <Navigation/>
        </header>
    )
}

export default Header;