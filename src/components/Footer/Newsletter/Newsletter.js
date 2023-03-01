import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'
import './Newsletter.scss'



const Newsletter = () => {
  return (
    <div>
      <div className="newsletter-section">
        <div className="newsletter-content">
          <span className="small-text">NewsLetter</span>
          <span className="big-text">Sign up for latest updates and offers</span>
          <div className='form'>
            <input type='text' placeholder='Email'/>
            <button>Subscribe</button>
          </div>
          <div className="text">Will be used in Accordance with our Privacy Policy</div>
          <div className="social-icons">
            <div className="icon">
              <FaFacebookF size={14}/>
            </div>
            <div className="icon">
              <FaTwitter size={14}/>
            </div>
            <div className="icon">
              <FaInstagram size={14}/>
            </div>
            <div className="icon">
              <FaLinkedinIn size={14}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter