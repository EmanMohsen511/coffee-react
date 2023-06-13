import React from 'react'

function Coffee({coffe}) {
  return (
    <>
  
    <div className="col-md-4 col-sm-6  ">
   <div className="card m-3 " >
   <img className='card-img-top' height={200} src= {coffe.image}  alt='' />
  <div className="card-body">
  <h5 className="card-title"> {coffe.title}<span>$49</span></h5> 
   <p className="card-text">{coffe.ingredients}</p>
   <p className="card-text">{coffe.description}</p>
    
  </div>
</div>    
</div>{/* col-1 */}
  
    </>
  )
}

export default Coffee