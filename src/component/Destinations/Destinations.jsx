import React from 'react'
import AboutImg from '../../UI/AboutImg';
import img1 from '../Assets/dubi_optimized.jpg'
import img2 from "../Assets/egypt_optimized.jpg";
import img3 from "../Assets/paris_optimized.jpg";
import img4 from "../Assets/tokio_optimized.jpg";
import './Destinations.css'
import avater1 from "../Assets/avatar1_optimized.jpg";
import avater2 from "../Assets/avatar2_optimized.jpg";
import avater3 from "../Assets/avatar3_optimized.jpg";
import avater4 from "../Assets/avatar4_optimized.jpg";
import DestinationsImgName from '../../UI/DestinationsImgName';



const Destinations = () => {
  return (
    <>
      <section id="Destinations" className="Destinations">
        <div className="contianer">
          <h1>Top Travel this Month</h1>
          <div className="Destinations__wrapper">
            <AboutImg airplan={img1} destination="Destinations__img">
              <img
                className="Destinations__avater"
                src={avater1}
                alt="avater"
              />
              <DestinationsImgName
                DestinationsClass="DestinationsImgName"
                name="Isra Teack"
                path="@IsraTeack97"
              />
            </AboutImg>
            <AboutImg airplan={img2} destination="Destinations__img">
              <img
                className="Destinations__avater"
                src={avater2}
                alt="avater"
              />
              <DestinationsImgName
                DestinationsClass="DestinationsImgName"
                name="Ali mohamed"
                path="@Ali2005"
              />
            </AboutImg>
            <AboutImg airplan={img3} destination="Destinations__img">
              <img
                className="Destinations__avater"
                src={avater3}
                alt="avater"
              />
              <DestinationsImgName
                DestinationsClass="DestinationsImgName"
                name="khaled nashwan"
                path="@khalednash97"
              />
            </AboutImg>
            <AboutImg airplan={img4} destination="Destinations__img">
              <img
                className="Destinations__avater"
                src={avater4}
                alt="avater"
              />
              <DestinationsImgName
                DestinationsClass="DestinationsImgName"
                name="aya ahmed"
                path="@ayaAH20"
              />
            </AboutImg>
          </div>
        </div>
      </section>
    </>
  );
}

export default Destinations