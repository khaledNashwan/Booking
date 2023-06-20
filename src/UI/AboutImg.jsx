
import React from 'react'
import './AboutImg.css'

const AboutImg = ({ airplan, ImgPhote }) => {
  return (
    <>
      <div className="AboutImg__airplan">
        <img className={ImgPhote} src={airplan} alt="airplane" />
      </div>
    </>
  );
};

export default AboutImg