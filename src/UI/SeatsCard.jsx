import React from 'react'
import './SeatsCard.css'

const SeatsCard = ({ SeatsHead, SeatsParagraph }) => {
  return (
    <>
      <div className="Seats__Card">
        <h5>{SeatsHead}</h5>
        <p>{SeatsParagraph}</p>
      </div>
    </>
  );
};

export default SeatsCard