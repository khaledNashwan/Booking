import React from 'react'
import  './card.css'

const Card = ({icone, head , paragraph }) => {
  return (
    <>
      <div className="card">
        <div className="icone">{icone}</div>
        <div className="paragraph">
          <h2>{head}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
}

export default Card