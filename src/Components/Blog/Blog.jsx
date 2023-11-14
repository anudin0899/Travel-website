import React from 'react'
import './blog.css'
import { BsArrowRightShort } from "react-icons/bs";
import img1 from '../../Assets/blog.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/blog2.jpg'

const Posts = [
  {
    id: 1,
    postImage: img1,
    title: 'Beautiful Moroco,let us travel.',
    desc: 'The Kingdom of Moroco is a Muslim country in western North Africa, with coastline on the Alantic Ocean and Mediterranean Sea',
  },
  {
    id: 1,
    postImage: img2,
    title: 'Beautiful Moroco,let us travel.',
    desc: 'The Kingdom of Moroco is a Muslim country in western North Africa, with coastline on the Alantic Ocean and Mediterranean Sea',
  },
  {
    id: 1,
    postImage: img3,
    title: 'Beautiful Moroco,let us travel.',
    desc: 'The Kingdom of Moroco is a Muslim country in western North Africa, with coastline on the Alantic Ocean and Mediterranean Sea',
  },
]
const Blog = () => {
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Our Best Blog ?
          </h2>
          <p>
            An insight to the incredible experience in the world.
          </p>
        </div>
        <div className="mainContainer grid">

          {Posts.map(({ id, postImage, desc, title }) => {
            return (
              <div className="singlePost grid">
                <div className='imgDiv'>
                  <img src={postImage} alt="" />
                </div>
                <div className="postDetails">
                  <h3>
                    {title}
                  </h3>
                  <p>
                    {desc}
                  </p>
                </div>
                <a href="#" className='flex'>
                  <BsArrowRightShort />
                  Read More
                </a>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Blog