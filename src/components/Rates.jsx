import React ,{useEffect} from 'react'
import { FaStar } from "react-icons/fa";
import Aos from 'aos'




function Rates() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
  <section className="rate-sec">
  <div className="container">
    <p className="text-center para-1">What kind of Coffee we serve for you</p>
    <p className="text-center para-2">Who are in extremely love with eco friendly system.</p>
    <div className="row">
      <div className="col-md-6 col-sm-12 rate-details">
        <img src= {require("../images/r1.png" )} alt='' />
        <span>Lorem ipsum</span>         
        <FaStar className='fa-solid'/>
        <FaStar className='fa-solid'/>
        <FaStar className='fa-solid'/> 
        <FaStar className='star'/>
        <FaStar className='star'/>
        <p>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.</p>
      </div>{/* col-1 */}
      <div className="col-md-6 col-sm-12 rate-details">
        <img src= {require("../images/r2.png" )} alt =''/>
        <span>Lorem ipsum</span>         
        <FaStar className='fa-solid'/>
        <FaStar className='fa-solid'/>
        <FaStar className='star'/> 
        <FaStar className='star'/>
        <FaStar className='star'/>
        <p>Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.</p>
      </div>{/* col-2 */}
    </div>{/* row */}
    <div className="row">
      <div className="col-md-3 col-sm-12 rate-detail">
        <span 
     >2536</span>
        <p>Happy Client</p>
      </div>{/* col-md-3 */}
      <div className="col-md-3 col-sm-12 rate-detail">
        <span  >7562</span>
        <p>Total Projects</p>
      </div>{/* col-md-3 */}
      <div className="col-md-3 col-sm-12 rate-detail">
        <span  >2013</span>
        <p>Cups Coffee</p>
      </div>{/* col-md-3 */}
      <div className="col-md-3 col-sm-12 rate-detail">
        <span  >10536</span>
        <p>Total Submitted</p>
      </div>{/* col-md-3 */}
    </div>{/* row */}
  </div>{/* container */}
</section>

    </>
  )
}

export default Rates