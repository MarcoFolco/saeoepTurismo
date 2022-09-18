import React from "react";

const PatagoniaPage = (props) => {
    const travels = [
        {
            id: 1,
            place: "Calafate",
            dates: "15 de Octubre y 23 de Diciembre",
            assets: "Pasaje aéreo - Traslado ida y vuelta en destino - 03 Noches de alojamiento",
            extra: "Full Day Glaciar Perito Moreno",
            hotel: "Hotel Desing Suites 4*",
            price: "40.000"
        },
        {
            id: 2,
            place: "Ushuaia",
            dates: "19 de Septiembre y 30 de Noviembre",
            assets: "Pasaje aéreo - Traslados - 04 Noches de alojamiento",
            extra: "Excursión medio día Parque Nacional Tierra del Fuego",
            hotel: "Hostal del Bosque 3* con desayuno buffet",
            price: "27.000"
        },
        {
            id: 3,
            place: "Bariloche",
            dates: "10 y 25 de Octubre",
            assets: "Bus desde terminal - 05 Noches de alojamiento",
            extra: "Excursiones opcionales - Asistencia al viajero",
            hotel: "Hotel Aguas del Sur",
            price: "25.000"
        },
    ]
    return (
        <main className="container mt-2 mb-2 p-4 position-relative">
            <section className="main-info w-100 h-100 p-2">
                <h2 className="fw-bold text-center display-3">
                    ¡Viajá por el sur argentino!
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

export default PatagoniaPage;