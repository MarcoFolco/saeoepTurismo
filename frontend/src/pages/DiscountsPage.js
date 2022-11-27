import React from "react";
import "../styles/components/pages/DiscountsPage.css";
import axios from "axios";
import DiscountItem from "../components/discounts/DiscountItem";
import { useState } from "react";
import { useEffect } from "react";

const Discounts = (props) => {
    const [loading, setLoading] = useState(false);
    const [discounts, setDiscounts] = useState([]);

    useEffect(() => {
        const loadDiscounts = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/discounts');
            setDiscounts(response.data);
            setLoading(false);
        };

        loadDiscounts();
    }, []);

    return (
        <main className="container mt-2 mb-2 p-4 position-relative">
            <section className="main-info w-100 h-100 p-2">
                <h2 className="fw-bold text-center display-3 mb-4">
                    ¡Afiliate y obtené grandes descuentos!
                </h2>
                { loading ? (<div className="loader text-center m-auto"></div>) : (
                    <div className="discounts row row-cols-1 g-3 p-4">
                        <div className="col position-relative d-flex justify-content-evenly discounts-title">
                            <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Empresa</span></p>
                            <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Destino</span></p>
                            <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">Descuento</span></p>
                        </div>
                        {discounts.map(discount => <DiscountItem key={discount.id} enterprise_name={discount.enterprise_name}
                                                    places={discount.places} value={discount.value}/>)}
                     </div>
                )}
            </section>
        </main>
    )
}

export default Discounts;