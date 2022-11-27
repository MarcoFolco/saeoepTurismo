import React from "react";
import "../styles/components/pages/ContactPage.css";
import { useEffect, useState } from "react";
import axios from 'axios';

const ContactPage = (props) => {

    const initialForm = {
        name: '',
        email: '',
        phone: '',
        message: '',
    };

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contact', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
            setError(false);
        } else setError(true);
    };

    useEffect(() => {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
    
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
                setMsg('');
                setError(false);
            } else {
                form.classList.remove('was-validated');
            }
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
                <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control fs-4" 
                               id="name" name="name" placeholder="George"
                               value={formData.name} onChange={handleChange} required/>
                        <label htmlFor="name" className="text-secondary fw-bold fs-6">Nombre</label>
                        <div className="invalid-feedback fs-5 fw-bold">
                            Este campo es requerido
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control fs-4" 
                               id="emailAddress" name="email" placeholder="name@example.com" 
                               value={formData.email} onChange={handleChange} required/>
                        <label htmlFor="emailAddress" className="text-secondary fw-bold fs-6">Correo Electrónico</label>
                        <div className="invalid-feedback fs-5 fw-bold">
                            Este campo es requerido
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control fs-4" 
                               id="phone" name="phone" placeholder="name@example.com" 
                               value={formData.phone} onChange={handleChange} required/>
                        <label htmlFor="phone" className="text-secondary fw-bold fs-6">Teléfono</label>
                        <div className="invalid-feedback fs-5 fw-bold">
                            Este campo es requerido
                        </div>
                    </div>
                    <div className="input-group mb-4">
                        <span className="input-group-text">Mensaje</span>
                        <textarea className="form-control fs-4" 
                                  rows="5" name="message"
                                  value={formData.message} onChange={handleChange} required></textarea>
                        <div className="invalid-feedback fs-5 fw-bold">
                            Este campo es requerido
                        </div>
                    </div>
                    {sending ? <div className="mb-4"><span className="btn bg-info fs-6 text-white fw-bold">Sending...</span><span className="loader loader-small ms-2"></span></div> : null}
                    {msg ? <div className="mb-4"><span className={`btn ${error ? 'bg-danger' : 'bg-success'} fs-6 text-white fw-bold`}>{msg}</span></div> : null}
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