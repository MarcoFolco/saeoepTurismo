import React from "react";
import "../styles/components/pages/DiscountsPage.css";

const Discounts = (props) => {
    return (
        <main className="container mt-2 mb-2 p-4 position-relative">
            <section className="main-info w-100 h-100 p-2">
                <h2 className="fw-bold text-center display-3">
                    ¡Afiliate y obtené grandes descuentos!
                </h2>
                <div className="discounts row row-cols-1 g-3 p-4">
                    <div className="col position-relative d-flex justify-content-evenly discounts-title">
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Empresa</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Destino</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Descuento</span></p>
                    </div>
                    <div className="col position-relative d-flex justify-content-evenly pt-2 ps-3 pe-3">
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Vía Bariloche</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Misiones - Bariloche</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">15%</span></p>
                    </div>
                    <div className="col position-relative d-flex justify-content-evenly pt-2 ps-3 pe-3">
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Micromar</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Miramar - Gesell - Mar del Plata - Pinamar</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">15%</span></p>
                    </div>
                    <div className="col position-relative d-flex justify-content-evenly pt-2 ps-3 pe-3">
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Almirante Brown</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Rosario - Tucumán - Santiago del Estero</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">15%</span></p>
                    </div>
                    <div className="col position-relative d-flex justify-content-evenly pt-2 ps-3 pe-3">
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">General Urquiza</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Salta - Jujuy - La Quiaca - Córdoba</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">15%</span></p>
                    </div>
                    <div className="col position-relative d-flex justify-content-evenly pt-2 ps-3 pe-3">
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Plusmar</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Bahía Blanca - Costa Atlántica</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">15%</span></p>
                    </div>
                    <div className="col position-relative d-flex justify-content-evenly pt-2 ps-3 pe-3">
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Colonia Express</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">R.O. Uruguay</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">10%</span></p>
                    </div>
                    <div className="col position-relative d-flex justify-content-evenly pt-2 ps-3 pe-3">
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Flecha Bus, rápido - El Tata, San José</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">A todo el territorio nacional</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">15%</span></p>
                    </div>
                    <div className="col position-relative d-flex justify-content-evenly pt-2 ps-3 pe-3">
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Tte. Nueva Chevallier</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">A varios puntos del territorio nacional</span></p>
                        <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">15%</span></p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Discounts;