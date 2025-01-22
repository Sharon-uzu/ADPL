import React from 'react'
import pix from '../Assets/image 1.png'
import { IoArrowForwardOutline } from "react-icons/io5";

const About = () => {
  return (
    <div>
        <div>
        <div className="serves about">
            
            
            <div className="s-txt">
                <h4>WHO WE ARE</h4>
                <h3>Making Homeownership Accessible and Affordable</h3>
                <p>Our Story: Founded to bridge the gap for Africans in the diaspora, we help individuals achieve their dream of owning a home of their own.</p>


                <div className="ab-cards">

                    <div className='s-card'>
                        <div className="ss">

                            <div>
                                <h5>Our Mission</h5>
                                <p>To empower Africans in the diaspora by providing accessible, reliable, and tailored real estate and mortgage services that make homeownership a seamless reality.</p>
                            </div>
                        </div>

                    </div>

                    <div className='s-card'>
                        <div className="ss">
                            
                            <div>
                                <h5>Our Vision</h5>
                                <p>To become the leading real estate platform connecting Africans in the diaspora to their dream homes, fostering a sense of belonging and creating lasting value for communities worldwide</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className="s-img">
                <img src={pix} alt="" />
            </div>

            <div className="more">
                <h3><IoArrowForwardOutline  className='r-i'/>Read More</h3>
            </div>


        </div>
    </div>
    </div>
  )
}

export default About