import React from 'react'
import './Offers.css'
import Button from '../../UI/Button';
import OffersCard from '../../UI/OffersCard';
import {BsCalendar2Week, BsFillBookmarkCheckFill, BsShieldFillCheck} from 'react-icons/bs'

const Offers = () => {
  return (
    <section id="Offers" className="Offers">
      <div className="container">
        <div className="Offers__wrapper">
          <div className="Offers__top">
            <h1>Travel to make Memories all around the world</h1>
            <Button name="view All" />
          </div>
          <div className="Offers__bottom">
            <OffersCard
              Offers__head="Book & Relax"
              Offers__paragraph="You can also call airlines from your phone and book  a Right ticket"
              Offers__icons={<BsCalendar2Week />}
              OffersClass="Offers__one"
            />
            <OffersCard
              Offers__head="Smart Chacklist"
              Offers__paragraph="You can also call airlines from your phone and book  a Right ticket"
              Offers__icons={<BsShieldFillCheck />}
              OffersClass="Offers__two"
            />
            <OffersCard
              Offers__head="SAVE More"
              Offers__paragraph="You can also call airlines from your phone and book  a Right ticket"
              Offers__icons={<BsFillBookmarkCheckFill />}
              OffersClass="Offers__three"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers