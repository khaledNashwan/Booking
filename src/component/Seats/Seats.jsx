import React from 'react'
import './Seats.css'
import AboutImg from '../../UI/AboutImg';
import SeatsImgOne from '../Assets/travel_optimized.jpg'
import SeatsImgTwo from '../Assets/traveltwo_optimized.jpg'
import SeatsCard from '../../UI/SeatsCard';


const Seats = () => {
  return (
    <>
      <section id="Seats" className="Seats">
        <div className="container">
          <div className="Seats__wrapper">
            <div className="Seats__left">
              <h1>unaccompanied minor lounge</h1>
              <div className="SeatsCard__wrapper">
                <SeatsCard
                  SeatsHead="help through the airport"
                  SeatsParagraph="you can also call airline from your phone and book a flight ticket to one of your favorite destination"
                />
                <SeatsCard
                  SeatsHead="priority boarding"
                  SeatsParagraph="you can also call airline from your phone and book a flight ticket to one of your favorite destination"
                />
                <SeatsCard
                  SeatsHead="core on flight"
                  SeatsParagraph="you can also call airline from your phone and book a flight ticket to one of your favorite destination"
                />
                <SeatsCard
                  SeatsHead="Chauffeur-drive service"
                  SeatsParagraph="you can also call airline from your phone and book a flight ticket to one of your favorite destination"
                />
              </div>
            </div>
            <div className="Seats__right">
              <AboutImg ImgPhote="imgOne" airplan={SeatsImgOne} />
              <AboutImg ImgPhote="imgTwo" airplan={SeatsImgTwo} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Seats