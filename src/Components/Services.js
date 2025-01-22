import React from 'react'
import pix from '../Assets/Rectangle 1.png'
import frame from '../Assets/Frame 2086.png'
const Services = () => {
  return (
    <div>
        <div className="serves">
            <div className="s-img">
                <img src={pix} alt="" />
            </div>
            
            <div className="s-txt">
                <h4>OUR SERVICES</h4>
                <h3>Assisting individuals in locating the appropriate homes.</h3>
                <p>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh.</p>

                <div className='s-card'>
                    <div className="ss">

                        <img src={frame} alt="" />
                        <div>
                            <h5>Property Listings</h5>
                            <p>Browse homes tailored to your needs.</p>
                        </div>
                    </div>

                </div>

                <div className='s-card'>
                    <div className="ss">
                        <img src={frame} alt="" />
                        
                        <div>
                            <h5>Mortgage Assistance</h5>
                            <p>Flexible mortgage options to simplify ownership</p>
                        </div>
                    </div>
                </div>


                <div className='s-card'>
                    <div className="ss">
                        <img src={frame} alt="" />
                        <div>
                            <h5>Personalized Support</h5>
                            <p>Expert guidance every step of the way.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Services