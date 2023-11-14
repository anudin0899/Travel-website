import React from 'react'
import './about.css'
import img1 from '../../Assets/customer.jpg'
import img2 from '../../Assets/climbing.jpg'
import img3 from '../../Assets/mountain.jpg'
import video from '../../Assets/Video1.mp4'

const About = () => {
  return (
    <section className='about section'>
      <div className="secContainer">

        <div className="title">
          Why Hikings?
        </div>

        <div className="mainContent container grid">

          <div className="singleItem">
            <img src={img3} alt="about Image" />
            <h3>100+ Mountains</h3>
            <p>
              Research shows that a chance to break away from the normal
              rhythms of daily life reduces stress and improves
              health and well-being.
            </p>
          </div>

          <div className="singleItem">
            <img src={img2} alt="about Image" />
            <h3>1000+ HiKings</h3>
            <p>
              Research shows that a chance to break away from the normal
              rhythms of daily life reduces stress and improves
              health and well-being.
            </p>
          </div>

          <div className="singleItem">
            <img src={img1} alt="about Image" />
            <h3>2000+ Customer</h3>
            <p>
              Research shows that a chance to break away from the normal
              rhythms of daily life reduces stress and improves
              health and well-being.
            </p>
          </div>

        </div>

        <div className="videoCard container">
          <div className="cardContent grid">

            <div className="cardText">
              <h2>
                Wonderful House Experience in there!
              </h2>
              <p>
                The Adventure subranking is based on an equally
                weighted average of scores from five country
              </p>
            </div>

            <div className="cardVideo">
              <video src={video} autoPlay loop muted
                type="video/mp4"></video>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}

export default About