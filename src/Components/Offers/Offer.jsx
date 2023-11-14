import React from 'react'
import './offer.css'
import { MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import img1 from '../../Assets/img5.jpg'
import img2 from '../../Assets/img6.jpg'
import img3 from '../../Assets/img3.jpg'


const OffersData = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Dubai',
    location: 'UAE',
    price: '$7452'
  },
  {
    id: 1,
    imgSrc: img2,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    price: '$3500'
  },
  {
    id: 1,
    imgSrc: img3,
    destTitle: 'Guanajuato',
    location: 'London',
    price: '$5400'
  },

]

const Offer = () => {
  return (
    <section className='offer container section'>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Special Offers
          </h2>
          <p>
            From historical cities to natural specteculars,
            come see the best of the world!
          </p>
        </div>
        <div className="mainContent grid">
          {OffersData.map(({id, imgSrc, destTitle, location, price}) => {
            return (
              <div className="singleOffer">
                <div className="destImage">
                  <img src={imgSrc} alt="" />
                  <span className="discount">
                    30% Off
                  </span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>
                      {price}
                    </h4>
                    <span className='status'>
                      For Rent
                    </span>
                  </div>
                  <div className="amenities flex">
                    <div className="singleAmenities flex">
                      <MdKingBed className='icon' />
                      <small>2 Beds</small>
                    </div>
                    <div className="singleAmenities flex">
                      <MdBathtub className='icon' />
                      <small>1 Bath</small>
                    </div>
                    <div className="singleAmenities flex">
                      <FaWifi className='icon' />
                      <small>Wi-fi</small>
                    </div>
                    <div className="singleAmenities flex">
                      <MdAirportShuttle className='icon' />
                      <small>Shuttle</small>
                    </div>
                  </div>
                  <div className="location flex">
                    <MdLocationOn className='icon' />
                    <small>450 Vine #310, {location}</small>
                  </div>
                  <button className='btn flex'>
                    View Details
                    <BsArrowRightShort className='icon' />
                  </button>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Offer