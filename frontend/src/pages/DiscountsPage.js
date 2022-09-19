import React from "react";
import "../styles/components/pages/DiscountsPage.css";

const Discounts = (props) => {
    const discounts = [
        {
            id: 1,
            enterprise: "Vía Bariloche",
            places: "Misiones - Bariloche",
            value: "15",
        },
        {
            id: 2,
            enterprise: "Micromar",
            places: "Miramar - Gesell - Mar del Plata - Pinamar",
            value: "15",
        },
        {
            id: 3,
            enterprise: "Almirante Brown",
            places: "Rosario - Tucumán - Santiago del Estero",
            value: "15",
        },
        {
            id: 4,
            enterprise: "General Urquiza",
            places: "Salta - Jujuy - La Quiaca - Córdoba",
            value: "15",
        },
        {
            id: 5,
            enterprise: "Plusmar",
            places: "Bahía Blanca - Costa Atlántica",
            value: "15",
        },
        {
            id: 6,
            enterprise: "Colonia Express",
            places: "R.O. Uruguay",
            value: "10",
        },
        {
            id: 7,
            enterprise: "Flecha Bus, rápido - El Tata, San José",
            places: "A todo el territorio nacional",
            value: "15",
        },
        {
            id: 8,
            enterprise: "Tte. Nueva Chevallier",
            places: "A varios puntos del territorio nacional",
            value: "15",
        },
    ]

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
                    {discounts.map(discount => (
                        <div className="col position-relative d-flex justify-content-evenly pt-2 ps-3 pe-3" key={discount.id}>
                            <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">{discount.enterprise}</span></p>
                            <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">{discount.places}</span></p>
                            <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">{discount.value} %</span></p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Discounts;