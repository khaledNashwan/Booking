import React from 'react'
import Video from './Video'
import Search from './Search';

const Hero = () => {
  return (
    <>
      <section id="Hero" className="Hero">
        <div className="container">
          <div className="Hero__wrapper">
            <h1 className="Hero__heading">
              Create ever-lasting memories with us
            </h1>
            <Video />
            <Search />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero