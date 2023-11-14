import React, { useState } from 'react'
import './navbar.css'
import { MdOutlineClose, MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

  const [active, setActive] = useState('navBar');
  const [transparent, setTransparent] = useState('header')

  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  const closeNav = () => {
    setActive('navBar')
  }

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader')
    } else {
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)


  return (
    <section className='navBarSection'>
      <div className={transparent}>

        <div className='logoDiv'>
          <a href="" className='logo'>
            <h1 className='flex'> <MdOutlineTravelExplore className='icon' /> Travel</h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>

            <li className='navItem'>
              <a href="" className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href="" className='navLink'>Products</a>
            </li>
            <li className='navItem'>
              <a href="" className='navLink'>Resources</a>
            </li>
            <li className='navItem'>
              <a href="" className='navLink'>Contact</a>
            </li>
            <li className='navItem'>
              <a href="" className='navLink'>Blog</a>
            </li>

            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <a href="#">Login</a>
              </button>
            </div>
            <div className="headerBtns flex">
              <button className='btn'>
                <a href="#">Sign up</a>
              </button>
            </div>

          </ul>

          <div onClick={closeNav} className="closeNavbar">
            <MdOutlineClose className='icon' />
          </div>

        </div>

        <div onClick={showNav} className='toggleNavBar'>
          <AiOutlineMenu className='icon' />
        </div>

      </div>
    </section>
  )
}

export default Navbar