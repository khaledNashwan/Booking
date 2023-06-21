
import React from 'react'
import './DestinationsImgName.css'

const DestinationsImgName = ({ name, path, DestinationsClass }) => {
  return (
    <>
      <div className={`Destinations__Img__Name ${DestinationsClass}`}>
        <p className="Destinations__Img__Name__head">{name}</p>
        <p className="Destinations__Img__Name__paragraph">{path}</p>
      </div>
    </>
  );
};

export default DestinationsImgName