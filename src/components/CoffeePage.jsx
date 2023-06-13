import React from 'react'
import Coffee from './Coffee'

function CoffeePage({coffee}) {
  return (
    <>
     <section >
  <div className="container">
    <div className="row">
        {
            coffee.map ((coffe)=>{
                return <Coffee key={coffe.id} coffe ={coffe}/>
            })
        }
    </div>
    </div>{/* row */} 

</section>  
</>
  )
}

export default CoffeePage