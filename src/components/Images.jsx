import React from 'react'

function Images({coffee}) {
  return (
    <>
   <section className="img-sec">
  <div className="container">
  <p className="text-center para-1">What kind of Coffee we serve for you</p>
    <p className="text-center para-2">Who are in extremely love with eco friendly system.</p>
    <div className="row">
  
  <div className="col col-md-4 .col-sm-12 ">
    <img src= {require("../images/g1.jpg" )} alt="" />
  </div>{/* coll-3 */}
  <div className="col col-md-8 .col-sm-12 ">
    <img src={require("../images/g3.jpg" )}alt=""  />
  </div>{/* coll-9 */}
  <div className="coll col-md-4 .col-sm-12 ">
    <img src={require("../images/g2.jpg" )} alt=""  />
  </div>{/* coll-3 */}
  <div className="col col-md-4 .col-sm-12 ">
    <img src={require("../images/g4.jpg" )} alt=""  />
  </div>{/* coll-4 */}
  <div className="col col-md-4 .col-sm-12 ">
    <img src={require("../images/g5.jpg" )} alt=""  />
  </div>{/* coll-4 */}
</div>{/* row */}
</div>{/*container  */}
</section>

    </>
  )
}

export default Images