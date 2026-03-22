import React from 'react'

const Team = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row  text-center">
        <h1 className=''>People</h1>
      </div>

      <div className="row  text-muted text-center mt-5  " style={{ lineHeight: "1.8" }}>
        <div className="col-lg-6 mt-5 p-4 d-flex flex-column align-items-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt=""
            className="img-fluid w-50 rounded-circle"
          />

          <p className="mt-3 mb-0">Nithin Kamath</p>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-lg-6  mt-5 p-3 text-start ">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a style={{textDecoration:"none"}} href=""> HomePage</a>/<a style={{textDecoration:"none"}} href=""> Trading QnA</a>/<a style={{textDecoration:"none"}} href=""> Twitter</a></p>
        </div>
      </div>
    </div>
  )
}

export default Team
