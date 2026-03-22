import React from 'react'

const Stats = () => {
  return (
    <section className="container mt-5 ">
      <div className="row">
        <div className="col-lg-6 fs-6 ">
          <h3 className='mb-4'>Trust with confidence</h3>
          <div className="row  flex-column gap-2">


            <div className="col-12">
              <h4 className='fs-5'>Customer-first always</h4>
              <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments,
                making us Nepal largest broker; contributing to 15% of daily retail exchange volumes in Nepal.</p>

            </div>

            <div className="col-12">
              <h4 className="fs-5">No spam or gimmicks</h4>
              <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications.
                High quality apps that you use at your pace, the way you like. Our philosophies.</p>

            </div>

            <h4 className='fs-5'>The Zerodha universe</h4>
            <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups
              offer you tailored services specific to your needs.</p>


            <div className="col-12">
              <h4 className='fs-5'>Do better with money</h4>
              <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions,
                but actively help you do better with your money.</p>

            </div>

          </div>


        </div>
        <div className="col-lg-6">
          <img src="media/images/ecosystem.png" alt="ecosystem" className='w-85 img-fluid' />
          <div className='text-center'>
            <a className='mx-5' style={{textDecoration:"none"}} href="#">Explore Our Products <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
            <a  style={{textDecoration:"none"}} href="#">Try Kite Demo <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
