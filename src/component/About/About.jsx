import React from 'react'
import AboutHead from '../../UI/AboutHead';
import AboutCard from '../../UI/AboutCard';
import './about.css'
import AboutImg from '../../UI/AboutImg';
import imgone from '../Assets/flightWinter.jpg'
import imgtwo from "../Assets/FlightTwo.jpg";
import imgthree from "../Assets/flightHand.jpg";


const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <AboutHead />
          <div className="About__wrapper">
            <div className="About__left">
              <AboutCard
                colo="blue"
                number="01"
                head="Travel requerment for dubai"
                paragraph="Find help with booking and travel plans , see what to expect along the journey!

"
              />
              <AboutCard
                colo="red"
                number="02"
                head="Chauffeur services at your arrivel"
                paragraph="Find help with booking and travel plans , see what to expect along the journey!

"
              />
              <AboutCard
                colo="white"
                number="03"
                head="Multi-risk Travel insurance"
                paragraph="Find help with booking and travel plans , see what to expect along the journey!

"
              />
            </div>
            <div className="About__right">
              <AboutImg ImgPhote="PhoteOne" airplan={imgtwo} />
              <AboutImg ImgPhote="PhoteTwo" airplan={imgone} />
              <AboutImg ImgPhote="PhoteThree" airplan={imgthree} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About