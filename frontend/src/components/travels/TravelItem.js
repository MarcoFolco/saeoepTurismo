import React from 'react';

const TravelItem = (props) => {
    const { title, img, page_name, dates, assets, extras, hotel, price, current_page_name } = props;
    return page_name === current_page_name ? (
        <div className="col position-relative">
            <p className={`display-5 fw-bold text-center travel-title mt-2 ${ img ? '' : 'mb-4 pb-4' }`}><span className="ps-2 pe-2">{title}</span></p>
            { img ? <img src={img} alt="Travel" className="mb-4"/> : null}
            <p className="fs-4 fw-bold text-center travel-date">Salidas: {dates}</p>
            <p className="fs-4 fw-bold text-center travel-assets">{assets}</p>
            <p className="fs-4 fw-bold text-center travel-extra">{extras}</p>
            <p className="fs-4 fw-bold text-center travel-hotel">{hotel}</p>
            <p className="fs-5 fw-bold text-center travel-price"><span className="ps-2 pe-2 fs-2">${price}</span><br/>(por pax)</p>
        </div>
    ) : null;
}

export default TravelItem;