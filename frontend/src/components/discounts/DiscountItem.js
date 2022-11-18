import React from 'react';

const DiscountItem = (props) => {
    const { enterprise_name, places, value } = props;
    return (
        <div className="col position-relative d-flex justify-content-evenly pt-2 ps-3 pe-3">
            <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">{enterprise_name}</span></p>
            <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">{places}</span></p>
            <p className="fs-2 fw-bold text-center"><span className="ps-3 pe-3">{value} %</span></p>
        </div>
    );
}

export default DiscountItem;