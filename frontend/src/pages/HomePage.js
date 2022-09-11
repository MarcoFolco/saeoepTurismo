import React from "react";
import "../styles/components/pages/HomePage.css";

const HomePage = (props) => {
    return (
        <main className="container mt-2 mb-2 p-4 position-relative bg-active">
            <section className="main-info w-100 h-100 p-2">
                <h2 className="fw-bold text-center display-3">
                    ¡Viajá por toda la Argentina!<br/>
                    <small className="display-6 text-white-50">Mirá todos los viajes en la pestaña Destinos</small>
                </h2>
                <div className="home-gallery row row-cols-1 row-cols-sm-2 g-4 p-4">
                    <div className="col position-relative">
                        <img src="../../../images/florianopolis.jpg" alt="Florianopolis"/>
                        <p className="display-4 w-100 position-absolute text-center pe-none">
                            <span className="ps-3 pe-3 text-truncate" title="Florianópolis">Florianópolis</span>
                        </p>
                    </div>
                    <div className="col position-relative">
                        <img src="../../../images/bombinhas.jpg" alt="Bombas y Bombinhas"/>
                        <p className="display-4 w-100 position-absolute text-center pe-none">
                            <span className="ps-3 pe-3 text-truncate" title="Bombas y Bombinhas">Bombas y Bombinhas</span>
                        </p>
                    </div>
                    <div className="col position-relative">
                        <img src="../../../images/buzios.jpg" alt="Buzios"/>
                        <p className="display-4 w-100 position-absolute text-center pe-none">
                            <span className="ps-3 pe-3 text-truncate" title="Buzios">Buzios</span>
                        </p>
                    </div>
                    <div className="col position-relative">
                        <img src="../../../images/porto-seguro.jpg" alt="Porto Seguro"/>
                        <p className="display-4 w-100 position-absolute text-center pe-none">
                            <span className="ps-3 pe-3 text-truncate" title="Porto Seguro">Porto Seguro</span>
                        </p>
                    </div>
                    <div className="col position-relative">
                        <img src="../../../images/cuba.jpg" alt="Cuba"/>
                        <p className="display-4 w-100 position-absolute text-center pe-none">
                            <span className="ps-3 pe-3 text-truncate" title="Cuba">Cuba</span>
                        </p>
                    </div>
                    <div className="col position-relative">
                        <img src="../../../images/cancun.jpg" alt="Cancún"/>
                        <p className="display-4 w-100 position-absolute text-center pe-none">
                            <span className="ps-3 pe-3 text-truncate" title="Cancún">Cancún</span>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomePage;