import React from "react";

const CordobaPage = (props) => {
    const travels = [
        {
            id: 1,
            place: "Villa Carlos Paz",
            dates: "18 de Noviembre y 07 de Diciembre",
            assets: "Bus semicama - Traslados - 02 Noches de alojamiento en destino",
            extra: "Excursiones opcionales - Asistencia al viajero",
            hotel: "Hotel Bahía Norte 2* C/Des",
            price: "35.000"
        },
        {
            id: 2,
            place: "Capilla del Monte",
            dates: "20 de Octubre y 15 de Noviembre",
            assets: "Bus semicama - Traslados - 05 Noches de alojamiento en destino",
            extra: "Excursiones opcionales - Asistencia al viajero",
            hotel: "Hotel Posada del Inifinito C/Des",
            price: "24.000"
        },
        {
            id: 3,
            place: "Mina Clavero",
            dates: "18 de Noviembre y 07 de Diciembre",
            assets: "Bus semicama - Traslados - 04 Noches de alojamiento en destino",
            extra: "Excursiones opcionales - Asistencia al viajero",
            hotel: "Cabañas La Catalana",
            price: "30.000"
        },
    ]

    return (
        <main className="container mt-2 mb-2 p-4 position-relative">
        <section className="main-info w-100 h-100 p-2">
            <h2 className="fw-bold text-center display-3">
                ¡Viajá a Córdoba!
            </h2>
            <div className="travels row row-cols-1 row-cols-sm-2 g-4 p-4">
                {travels.map(travel => (
                    <div className="col position-relative" key={travel.id}>
                        <p className="display-5 fw-bold text-center travel-title mt-2"><span className="ps-2 pe-2">{travel.place}</span></p>
                        <img src={`../../../../images/${travel.place.toLowerCase().replaceAll(' ','-')}.jpg`} alt={travel.place} className="mb-4"/>
                        <p className="fs-4 fw-bold text-center travel-date">Salidas: {travel.dates}</p>
                        <p className="fs-4 fw-bold text-center travel-assets">{travel.assets}</p>
                        <p className="fs-4 fw-bold text-center travel-extra">{travel.extra}</p>
                        <p className="fs-4 fw-bold text-center travel-hotel">{travel.hotel}</p>
                        <p className="fs-5 fw-bold text-center travel-price"><span className="ps-2 pe-2 fs-2">${travel.price}</span><br/>(por pax)</p>
                    </div>
                ))}
            </div>
        </section>
    </main>
    )
}

export default CordobaPage;