import React from 'react'

function Cards({coffe}) {
  return (
    <>

      <div className="col-md-4 col-sm-6  ">
   <div className="card " >
   <img className='card-img-top' height={200} src= {coffe.image}  alt='' />
  <div className="card-body">
  <h5 className="card-title"> {coffe.title}<span>$49</span></h5> 
   <p className="card-text">{coffe.ingredients}</p>
    
  </div>
</div>    
      </div>{/* col-1 */}
 

    </>
    
  )
}

export default Cards