import React from "react";
import "../styles/components/pages/ContactPage.css";
import { useEffect } from "react";

const ContactPage = (props) => {
    useEffect(() => {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
    
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }
    
            form.classList.add('was-validated')
        }, false)
        })
    });
    return (
        <main className="container mt-2 mb-2 p-4 position-relative bg-active">
            <section className="form-contact w-100 h-100 p-4">
                <h2 className="fw-bold text-center display-3">
                    Contacto via mail<br/>
                    <small className="fs-2 text-white-50">Por favor complete los datos del formulario para contactarse</small>
                </h2>
                <form className="needs-validation" noValidate>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control fs-4" id="name" placeholder="George" required/>
                        <label htmlFor="name" className="text-secondary fw-bold fs-6">Nombre</label>
                        <div className="invalid-feedback fs-5 fw-bold">
                            Este campo es requerido
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control fs-4" id="emailAddress" placeholder="name@example.com" required/>
                        <label htmlFor="emailAddress" className="text-secondary fw-bold fs-6">Correo Electrónico</label>
                        <div className="invalid-feedback fs-5 fw-bold">
                            Este campo es requerido
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control fs-4" id="phone" placeholder="name@example.com" required/>
                        <label htmlFor="phone" className="text-secondary fw-bold fs-6">Teléfono</label>
                        <div className="invalid-feedback fs-5 fw-bold">
                            Este campo es requerido
                        </div>
                    </div>
                    <div className="input-group mb-4">
                        <span className="input-group-text">Mensaje</span>
                        <textarea className="form-control fs-4" rows="5" required></textarea>
                        <div className="invalid-feedback fs-5 fw-bold">
                            Este campo es requerido
                        </div>
                    </div>
                    <button type="submit" className="btn fs-4 text-white fw-bold">Enviar</button>
                </form>
            </section>
            <hr style={{borderTop: "6px solid white",borderRadius: "35%",opacity: ".5"}}/>
            <section className="other-contact w-100 h-100 p-4">
                <h3 className="fw-bold text-center display-5">
                    Otras formas de contacto<br/>
                </h3>
                <p className="fs-3 fw-bold mb-3"><i className="fa-solid fa-building me-3"></i>Av. Jujuy 224/226, Ciudad Autónoma de Buenos Aires (CABA)</p>
                <p className="fs-3 fw-bold mb-3"><i className="fa-solid fa-phone me-3 fs-4"></i>(011) 4956-0408</p>
                <p className="fs-3 fw-bold mb-3"><i className="fa-solid fa-phone me-3 fs-4"></i>(011) 4956-0409</p>
                <p className="fs-3 fw-bold mb-3"><i className="fa-solid fa-user-tie me-3 fs-4"></i>Carlos Alberto Boccoli</p>
                <p className="fs-3 fw-bold mb-3"><i className="fa-solid fa-envelope me-3 fs-4"></i>informes@ospepweb.com.ar</p>
            </section>
        </main>
    )
}

export default ContactPage;