import React from 'react'


function Video() { 
  return (
    <>
      <section className="video">
       <div className="container">
    <div className="row vedio-pos">
      <div className="col-md-6 col-sm-6 col-1">
        <div className="overlay overlay-bg"></div>
        <div className="iframe">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ARA0AxrnHdM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>{/* left */}
      <div className="col-md-6 col-sm-6 col-2">
        <p className="p-1">LIVE COFFEE MAKING PROCESS.</p>
        <h2>We Telecast our
          Coffee Making Live</h2>
        <h5>We are here to listen from you deliver exellence</h5>
        <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        <img src={require('../images/signature.png')}  alt="" />
      </div>{/* right */}
    </div>{/* row */}
  </div>{/* container */}
</section>

    </>
  )
}

export default Video