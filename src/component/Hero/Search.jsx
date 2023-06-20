import React from 'react'
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import { CiLocationOn } from 'react-icons/ci'
import { CgProfile } from "react-icons/cg";
import { BsCalendar3 } from "react-icons/bs";



const Search = () => {
  return (
    <>
      <div className="Search">
        <div className="container">
          <div className="Search__wrapper">
            <div className="Search__top">
              <p>Econemy</p>
              <p>bussiness class</p>
              <p>fiest class</p>
            </div>
            <div className="Search__bottom">
              <Card
                icone=<CiLocationOn />
                head="Location"
                paragraph="where do you went to"
              />
              <Card
                icone=<CgProfile />
                head="Travelers"
                paragraph="add guests"
              />
              <Card
                icone=<BsCalendar3 />
                head="Check In"
                paragraph="Add date"
              />
              <Card
                icone=<BsCalendar3 />
                head="Check Out"
                paragraph="Add date"
              />
              <Button name="Search Flight" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search