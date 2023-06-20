import React from 'react'
import './AboutCard.css';

const AboutCard = ({ number, head, paragraph , colo }) => {
  return (
    <>
      <div className="About__card">
        <span className={`number ${colo}`}>{number}</span>
        <h1>{head}</h1>
        <p>{paragraph}</p>
      </div>
    </>
  );
};

export default AboutCard