import React from "react";

const PatagoniaPage = (props) => {
    return (
        <main className="container mt-2 mb-2 p-4 position-relative">
            <section className="main-info w-100 h-100 p-2">
                <h2 className="fw-bold text-center display-3">
                    ¡Viajá por el sur argentino!
                </h2>
                <div className="travels row row-cols-1 row-cols-sm-2 g-4 p-4">
                    <div className="col position-relative">
                        <p className="display-5 fw-bold text-center travel-title mt-2"><span className="ps-2 pe-2">Calafate</span></p>
                        <img src="../../../../images/calafate.jpg" alt="Calafate" className="mb-4"/>
                        <p className="fs-4 fw-bold text-center travel-date">Salidas: 15 de Octubre y 23 de Diciembre</p>
                        <p className="fs-4 fw-bold text-center travel-assets"> Pasaje aéreo - Traslado ida y vuelta en destino - 03 Noches de alojamiento</p>
                        <p className="fs-4 fw-bold text-center travel-extra">Full Day Glaciar Perito Moreno</p>
                        <p className="fs-4 fw-bold text-center travel-hotel">Hotel Desing Suites 4*</p>
                        <p className="fs-5 fw-bold text-center travel-price"><span className="ps-2 pe-2 fs-2">$40.000</span><br/>(por pax)</p>
                    </div>
                    <div className="col position-relative">
                        <p className="display-5 fw-bold text-center travel-title mt-2"><span className="ps-2 pe-2">Ushuaia</span></p>
                        <img src="../../../../images/ushuaia.jpg" alt="Ushuaia" className="mb-4"/>
                        <p className="fs-4 fw-bold text-center travel-date">Salidas: 19 de Septiembre y 30 de Noviembre</p>
                        <p className="fs-4 fw-bold text-center travel-assets">Pasaje aéreo - Traslados - 04 Noches de alojamiento</p>
                        <p className="fs-4 fw-bold text-center travel-extra">Excursión medio día Parque Nacional Tierra del Fuego</p>
                        <p className="fs-4 fw-bold text-center travel-hotel">Hostal del Bosque 3* con desayuno buffet</p>
                        <p className="fs-5 fw-bold text-center travel-price"><span className="ps-2 pe-2 fs-2">$27.000</span><br/>(por pax)</p>
                    </div>
                    <div className="col position-relative">
                        <p className="display-5 fw-bold text-center travel-title mt-2"><span className="ps-2 pe-2">Bariloche</span></p>
                        <img src="../../../../images/bariloche.jpg" alt="Bariloche" className="mb-4"/>
                        <p className="fs-4 fw-bold text-center travel-date">Salidas: 10 y 25 de Octubre</p>
                        <p className="fs-4 fw-bold text-center travel-assets">Bus desde terminal - 05 Noches de alojamiento</p>
                        <p className="fs-4 fw-bold text-center travel-extra">Excursiones opcionales - Asistencia al viajero</p>
                        <p className="fs-4 fw-bold text-center travel-hotel">Hotel Aguas del Sur</p>
                        <p className="fs-5 fw-bold text-center travel-price"><span className="ps-2 pe-2 fs-2">$25.000</span><br/>(por pax)</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PatagoniaPage;