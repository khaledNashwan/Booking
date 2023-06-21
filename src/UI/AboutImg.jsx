
import React from 'react'
import './AboutImg.css'

const AboutImg = ({ airplan, ImgPhote, destination, children }) => {
  return (
    <>
      <div className={`AboutImg__airplan ${destination}`}>
        <img className={ImgPhote} src={airplan} alt="airplane" />
        {children}
      </div>
    </>
  );
};

export default AboutImg