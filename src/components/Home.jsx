import React from 'react'
import Video  from './Video'
import CardList from './CardList'
import Images from './Images'
import Rates from './Rates'
import Life from './Life'

function Home({coffee}) {
  return (
    <>
   <section className="home">
  <div className="container">
    <div className="row home-content position-absolute">
      <div className="col-md-7 col-sm-6">
        <span>NOW YOU CAN FEEL THE ENERGY</span>
        <p>Start your day with
          a black Coffee</p>
        <button className="btn btn-light btn-lg rounded-5 w-25 " type="submit">Buy Now</button>
      </div>{/* col */}
    </div>{/* row */}
  </div>{/* container */}
</section>
<Video/>
<CardList coffee ={coffee}/>
<Images coffee ={coffee}/>
<Rates coffee ={coffee}/>
<Life/>

    </>
  )
}

export default Home