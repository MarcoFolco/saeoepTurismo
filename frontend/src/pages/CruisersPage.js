import React from "react";
import "../styles/components/pages/CruisersPage.css";

const Cruisers = (props) => {
    return (
        <main className="container mt-2 mb-2 p-4 position-relative">
            <section className="main-info w-100 h-100 p-2">
                <h2 className="fw-bold text-center display-3">
                    ¡Disfrutá de fabulosos cruceros!
                </h2>
                <div className="travels cruisers row row-cols-1 g-4 p-4">
                    <div className="col position-relative">
                        <p className="display-5 fw-bold text-center travel-title mt-2"><span className="ps-2 pe-2">Crucero Ibero Grand Celebration</span></p>
                        <img src="../../../images/crucero-grand.jpg" alt="Crucero Ibero Grand Celebration" className="mb-4"/>
                        <p className="fs-4 fw-bold text-center travel-date">Salidas: 18 de Septiembre</p>
                        <p className="fs-4 fw-bold text-center travel-assets">Recorre Buenos Aires/Montevideo/Punta del Este/Buenos Aires - 03 Noches</p>
                        <p className="fs-4 fw-bold text-center travel-extra">Incluye 5 comidas diarias,bebidas, todos los impuestos, propina y cobertura médica</p>
                        <p className="fs-5 fw-bold text-center travel-price"><span className="ps-2 pe-2 fs-2">$150.000</span><br/>(por pax)</p>
                    </div>
                    <div className="col position-relative">
                        <p className="display-5 fw-bold text-center travel-title mt-2"><span className="ps-2 pe-2">Crucero Costa Favolosa</span></p>
                        <img src="../../../images/crucero-costa.JPG" alt="Crucero Costa Favolosa" className="mb-4"/>
                        <p className="fs-4 fw-bold text-center travel-date">Salidas: 05 de octubre</p>
                        <p className="fs-4 fw-bold text-center travel-assets">Recorre Buenos Aires/Angra Dos Reis/Rio de Janeiro/Ilhabela/Punta del Este/Buenos Aires - 08 Noches</p>
                        <p className="fs-4 fw-bold text-center travel-extra">Incluye 5 comidas diarias,bebidas, todos los impuestos, propina y cobertura médica</p>
                        <p className="fs-5 fw-bold text-center travel-price"><span className="ps-2 pe-2 fs-2">$175.000</span><br/>(por pax)</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Cruisers;