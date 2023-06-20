import React from 'react'
import './Navbar.css'
import {GiWitchFlight} from "react-icons/gi";
import {TbDeviceMobileVibration} from "react-icons/tb";
import { AiOutlineGlobal } from "react-icons/ai";


const High = () => {
    return (
      <>
        <div className="High">
          <div className="container">
            <div className="High__wrapper">
              <div className="High__left">
                <GiWitchFlight className="High__icon" />
              </div>
              <div className="High__center">
                <div className="High__paragraph__one">
                  <TbDeviceMobileVibration className="High__icon" />
                  <p>Support</p>
                </div>
                <div className="High__paragraph__two">
                  <AiOutlineGlobal className="High__icon" />
                  <p>Languages</p>
                </div>
              </div>
              <div className="High__right">
                <a href="#">Sign In</a>
                <a href="#">Sign Out</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default High