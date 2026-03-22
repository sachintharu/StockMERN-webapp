import React from 'react'

const Education = () => {
  return (
    <section className="container mt-5">

      <div className="row">
        <div className="col-lg-6">
          <img src="media/images/education.svg" alt="Education" className='img-fluid' />
        </div>
        <div className="col-lg-6 d-flex flex-column gap-3">
          <h4>Free and open market education</h4>
          <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
           <a  style={{textDecoration:"none"}} href="#">Varsity <i className="fa fa-arrow-right" aria-hidden="true"></i></a>

           <p className='text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
        <a  style={{textDecoration:"none"}} href="#">Trading Q&A <i className="fa fa-arrow-right" aria-hidden="true"></i></a>

        </div>
      </div>
    </section>
  )
}

export default Education
