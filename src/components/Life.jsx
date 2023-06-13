import React from 'react'
import { Link } from 'react-router-dom'

function Life() {
  return (
    <>
 <section className="life-sec">
  <div className="container">
    <p className="text-center para-1">What kind of Coffee we serve for you</p>
    <p className="text-center para-2">Who are in extremely love with eco friendly system.</p>
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <img src= {require("../images/b1.jpg")}  alt="" />
        <Link to="#" className="btn ">Travel</Link>
        <Link to="#" className="btn ">Life Style</Link>
        <Link to="#"> <h4>Portable latest Fashion for young women</h4></Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        <span>31st January, 2018</span>
      </div>{/* left */}
      <div className="col-md-6 col-sm-12">
        <img src={require("../images/b2.jpg")}  alt=""  />
        <Link to="#" className="btn ">Travel</Link>
        <Link to="#" className="btn ">Life Style</Link>
        <Link to="#"> <h4>Portable latest Fashion for young women</h4></Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        <span>31st January, 2018</span>
      </div>{/* right */}
    </div>{/* row */}
  </div>{/* container */}
</section>

    </>
  )
}

export default Life