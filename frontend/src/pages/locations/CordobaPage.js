import React from "react";

const CordobaPage = (props) => {
    return (
        <main className="container mt-2 mb-2 p-4 position-relative">
        <section className="main-info w-100 h-100 p-2">
            <h2 className="fw-bold text-center display-3">
                ¡Viajá a Córdoba!
            </h2>
            <div className="travels row row-cols-1 row-cols-sm-2 g-4 p-4">
                <div className="col position-relative">
                    <p className="display-5 fw-bold text-center travel-title mt-2"><span className="ps-2 pe-2">Villa Carlos Paz</span></p>
                    <img src="../../../../images/villa-carlos-paz.jpg" alt="Villa Carlos Paz" className="mb-4"/>
                    <p className="fs-4 fw-bold text-center travel-date">Salidas: 18 de Noviembre y 07 de Diciembre</p>
                    <p className="fs-4 fw-bold text-center travel-assets">Bus semicama - Traslados - 02 Noches de alojamiento en destino</p>
                    <p className="fs-4 fw-bold text-center travel-extra">Excursiones opcionales - Asistencia al viajero</p>
                    <p className="fs-4 fw-bold text-center travel-hotel">Hotel Bahía Norte 2* C/Des</p>
                    <p className="fs-5 fw-bold text-center travel-price"><span className="ps-2 pe-2 fs-2">$35.000</span><br/>(por pax)</p>
                </div>
                <div className="col position-relative">
                    <p className="display-5 fw-bold text-center travel-title mt-2"><span className="ps-2 pe-2">Capilla del Monte</span></p>
                    <img src="../../../../images/capilla-del-monte.jpg" alt="Capilla del Monte" className="mb-4"/>
                    <p className="fs-4 fw-bold text-center travel-date">Salidas: 20 de Octubre y 15 de Noviembre</p>
                    <p className="fs-4 fw-bold text-center travel-assets">Bus semicama - Traslados - 05 Noches de alojamiento en destino</p>
                    <p className="fs-4 fw-bold text-center travel-extra">Excursiones opcionales - Asistencia al viajero</p>
                    <p className="fs-4 fw-bold text-center travel-hotel">Hotel Posada del Inifinito C/Des</p>
                    <p className="fs-5 fw-bold text-center travel-price"><span className="ps-2 pe-2 fs-2">$24.000</span><br/>(por pax)</p>
                </div>
                <div className="col position-relative">
                    <p className="display-5 fw-bold text-center travel-title mt-2"><span className="ps-2 pe-2">Mina Clavero</span></p>
                    <img src="../../../../images/mina-clavero.jpg" alt="Mina Clavero" className="mb-4"/>
                    <p className="fs-4 fw-bold text-center travel-date">Salidas: 12 y 24 de Diciembre</p>
                    <p className="fs-4 fw-bold text-center travel-assets">Bus semicama - Traslados - 04 Noches de alojamiento en destino</p>
                    <p className="fs-4 fw-bold text-center travel-extra">Excursiones opcionales - Asistencia al viajero</p>
                    <p className="fs-4 fw-bold text-center travel-hotel">Cabañas La Catalana</p>
                    <p className="fs-5 fw-bold text-center travel-price"><span className="ps-2 pe-2 fs-2">$30.000</span><br/>(por pax)</p>
                </div>
            </div>
        </section>
    </main>
    )
}

export default CordobaPage;