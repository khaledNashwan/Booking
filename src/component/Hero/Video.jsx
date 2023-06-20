import React from 'react'
import './hero.css'
import sky from "../Assets/sky.mp4";
import plan from '../Assets/pngwing.com.png'

const Video = () => {
  return (
    <>
      <div className="vadio">
        <video autoPlay={true} muted loop>
          <source src={sky} type="video/mp4" />
        </video>
        <img className="plan" src={plan} alt="airplan" />
      </div>
    </>
  );
}

export default Video