import React from 'react'

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 " id='supportWrapper'>
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 ">
       <div className="col-lg-6 p-3">
        <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
       <input type="text" placeholder='Eg. How do i activate F&O,why is my order getting rejected' className='fs-6' /><br/>
        <a className='px-2' href=""> Track account opening</a> 
        <a className='px-2' href="">Track segment activation</a>
        <a className='px-2' href="">Intraday margins</a>
        <a className='px-2' href="">Kite user manual</a>
        <a  className='px-2' href="">Learn how to create a ticket</a>
       </div>
       <div className="col-lg-6 p-3 ">
        <h1 className='fs-3'>Feature</h1>
       <ol className='d-flex flex-column gap-2'>
        <li><a href="">Current Takeovers and Delisting 0 January 2024</a></li>
       <li><a href="">Latest Intraday Leverages-MIS & CO</a></li>
       </ol>
       
       </div>
      </div>
    </section>
  )
}

export default Hero
