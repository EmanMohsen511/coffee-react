import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
        <header className="header-nav">
  <nav className="navbar  navbar-expand-lg fixed-top ">
    <div className="container nav-details ">
      <Link className="navbar-brand" to="/">
        <img src={require('../images/logo.png') } alt="logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse nav-li" id="navbarNavDropdown">         
        <div className="deatail row  ">
          <ul className="deatail-list d-flex ">             
            <li className="pe-3"> Mon-Fri: 8am to 2pm</li>
            <li className="pe-3">Sat-Sun: 11am to 4pm</li>
            <li className="pe-3"><Link to="/">(012) 6985 236 7512</Link></li>           
          </ul> {/*deatail-list  */}           
        </div>{/*deatail  */}
        <div className="det">                  
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link  text-white" aria-current="page" to="/">Home</Link>
            </li>{/* nav-item */}
            <li className="nav-item">
              <Link className="nav-link" to="/">About</Link>
            </li>{/* nav-item */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Coffee</Link>
            </li>{/* nav-item */}
            <li className="nav-item">              
              <Link className="nav-link" to="/">Review</Link>
            </li>{/* nav-item */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Blog</Link>
            </li>{/* nav-item */}
            <div className="dropdown">
              <Link className="dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </Link>             
              <ul className="dropdown-menu pages">
                <li><Link className="dropdown-item" to="/generic">Generic</Link></li>
                <li><Link className="dropdown-item" to="/element">Elements</Link></li>
              </ul>{/* pages */}
            </div>{/* dropdown */}               
          </ul>{/* nav */}</div> 
      </div>{/* navbar */}
    </div>{/* container */}
  </nav>
</header>

    </>
  )
}

export default Navbar