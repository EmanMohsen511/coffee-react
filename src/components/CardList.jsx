import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'

export default function CardList({coffee}) {
  return (
    <>
    <section className="desc">
  <div className="container desc-content">
    <p className="text-center para-1">What kind of Coffee we serve for you</p>
    <p className="text-center para-2">Who are in extremely love with eco friendly system.</p>
    <div className="row">
        {
            coffee.slice(0,6).map ((coffe)=>{
                return <Cards key={coffe.id} coffe ={coffe}/>
            })
        }
    </div>{/* row */}
    <div className='text-center'>
      <Link className='btn btn-danger btn-lg text-center m-5' to='/coffeepage'>See More</Link>
    </div>
    
  </div>
</section>   
    
    </>
  )
}
