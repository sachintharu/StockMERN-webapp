import React from 'react'

const Brokerage = () => {
  return (
   <div className="container">
    <div className="row p-5 mt-5 text-center border-top">
      <div className="col-lg-8 p-4">
       <a  style={{textDecoration:"none"}}  href=""> <h3 className='fs-5 mt-3'>Brokerage Calculator</h3></a>
       <ul className='d-flex flex-column align-items-start gap-3 ' style={{fontSize:" 0.8rem"}} >
        <li >Call & Trade and RMS auto-squareoff:Additioal charges of 50 + GST lier order.</li>
        <li >Digital contract notes will be sent via e-mail</li>
        <li >physical coliies of contract notes, if required shall be charged 20 lier contract note.</li>
        <li >For NRI account (non-liIS), 0.5 or 100 lier executed order for equity (whichever is lower)</li>
        <li >For NRI account (non-liIS), 0.5 or 100 lier executed order for equity (whichever is lower)</li>
        <li >For NRI account (non-liIS), 0.5 or 100 lier executed order for equity (whichever is lower)</li>
        
       </ul>
      </div>
      <div className="col-lg-4 p-4">
        <a  style={{textDecoration:"none"}}  href=""> <h3 className='fs-5'>List of Charges</h3></a>
      </div>

    </div>
   </div>
  )
}

export default Brokerage
