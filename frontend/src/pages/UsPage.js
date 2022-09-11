import React from "react";
import "../styles/components/pages/UsPage.css";

const UsPage = (props) => {
    return (
        <main className="container mt-2 mb-2 p-4 position-relative bg-active">
            <section className="main-info w-100 h-100 p-4">
                <h2 className="fw-bold text-center display-3">
                    S.A.E.O.E.P. Turismo<br/>
                    <small className="fs-2 text-white-50">Sindicato Argentino de Empleados y Obreros de la Enseñanza
                        Privada</small>
                </h2>
                <img src="../../../images/logo-full.jpg" alt="Logo del sindicato" className="m-auto d-block mt-4 mb-4" id="logo-nosotros"/>
                <div className="about-us text-center">
                    <p className="fs-3 fw-bold mb-1">Desde hace muchos años, creemos en una forma distinta de trabajar en turismo.</p>
                    <p className="fs-3 fw-bold mb-1">Hoy tratamos de brindar un producto que se ajuste a la necesidad del pasajero, con una posición activa
                        interpretando el deseo del cliente.</p>
                    <p className="fs-3 fw-bold mb-1">Creemos que el turismo es algo más que llenar datos en una página web, por lo contrario, es generador de
                        cultura, movilizando vínculos, sensaciones, diferencias, que nos transportan de la historia, al futuro,
                        al placer, a la naturaleza. Esta suma de cosas son las que alimentan nuestra alma y enriquecen el
                        espíritu.</p>
                    <p className="fs-3 fw-bold mb-1">Por tal motivo el sindicato de enseñanza privada les brinda a sus afiliados todas las posibilidades e
                        informes que necesiten.</p>
                </div>
            </section>
        </main>
    )
}

export default UsPage;