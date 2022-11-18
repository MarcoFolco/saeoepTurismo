import React from "react";
import axios from "axios";
import TravelItem from "../../components/travels/TravelItem";
import { useState } from "react";
import { useEffect } from "react";

const CordobaPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [travels, setTravels] = useState([]);

    useEffect(() => {
        const loadTravels = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/travels');
            setTravels(response.data);
            setLoading(false);
        };

        loadTravels();
    }, []);

    return (
        <main className="container mt-2 mb-2 p-4 position-relative">
        <section className="main-info w-100 h-100 p-2">
            <h2 className="fw-bold text-center display-3 mb-4">
                ¡Viajá a Córdoba!
            </h2>
            { loading ? (<div className="loader text-center m-auto"></div>) : (
                <div className="travels row row-cols-1 row-cols-sm-2 g-4 p-4">
                    {travels.map(travel => <TravelItem key={travel.id} title={travel.title} img={travel.img} page_name={travel.page_name}
                                            dates={travel.dates} assets={travel.assets} extras={travel.extras} hotel={travel.hotel}
                                            price={travel.price} current_page_name='Cordoba'/>)}
                </div>
                )
            }
        </section>
    </main>
    )
}

export default CordobaPage;