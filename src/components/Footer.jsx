import React from 'react'
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaCopyright } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaAngleRight} from "react-icons/fa";
function Footer() {
  return (
    <>
    <footer className="footer-content">
  <div className="container">
    <div className="row">
      <div className="col-md-5 col-sm-6">
        <h4>About Us</h4>
        <p className="p-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
        <p>Copyright <FaCopyright/> <span>2013</span> All rights reserved | This template is made with <FaHeart className='heart' /> by <Link to="#">Colorlib</Link> </p>
      </div>{/* col */}
      <div className="col-md-5 col-sm-6">
        <h4>Newsletter</h4>
        <p>Stay update with our latest</p>
        <input className="input-group-lg " type="email" placeholder="Enter Email" />
        <button className="btn btn-warning "><FaAngleRight/></button>
      </div>{/* col */}
      <div className="col-md-2 col-sm-6 social">
        <h4>Follow Us</h4>
        <p>Let us be social</p>
        <Link to="https://www.facebook.com"><FaFacebookF className='i'/></Link>
        <Link to="#"><FaTwitter className='i'/></Link>
        <Link to="#"><FaDribbble className='i'/></Link>
        <Link to="#"><FaBehance className='i'/></Link>
      </div>{/* col */}
    </div>{/* row */}
  </div>{/*container*/}
</footer>




    </>
  )
}

export default Footer