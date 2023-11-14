import React from 'react'
import './popular.css'
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'

const Data = [
  {
    id: '01',
    imgSrc: img1,
    destTitle: 'Dubai',
    location: 'UAE',
    grade: 'CULTURAL RELAX'
  },
  {
    id: '02',
    imgSrc: img2,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX'
  },
  {
    id: '03',
    imgSrc: img3,
    destTitle: 'Guanajuato',
    location: 'London',
    grade: 'CULTURAL RELAX'
  },
  {
    id: '04',
    imgSrc: img4,
    destTitle: 'Paris',
    location: 'France',
    grade: 'CULTURAL RELAX'
  },

]


const Popular = () => {


  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              From historical cities to natural specteculars,
              come see the best of the world!
            </p>
          </div>

          <div className="iconDiv flex">
            <BsArrowLeftShort className='icon leftIcon' />
            <BsArrowRightShort className='icon' />
          </div>

        </div>

        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="" />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort className='icon' />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">{id}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className='flex'>
                      <span className='dot'>
                        <BsDot className='icon' />
                      </span>
                      Travel
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Popular