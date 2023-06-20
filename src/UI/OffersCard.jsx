import React from 'react'
import './OffersCard.css'

const OffersCard = ({
  Offers__icons,
  Offers__head,
  Offers__paragraph,
  OffersClass,
}) => {
  return (
    <>
      <div className="Offers__Card ">
        <span className={OffersClass}>{Offers__icons} </span>
        <h3>{Offers__head}</h3>
        <p>{Offers__paragraph}</p>
      </div>
    </>
  );
};

export default OffersCard