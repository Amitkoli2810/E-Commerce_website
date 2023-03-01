import React from 'react'
import './Banner.scss'
import BannerImg from '../../../assets/banner-img.png'


const Banner = () => {
  return (
    <div>
        <div className='hero-banner'>
            <div className='content'>
                <div className='text-content'>
                    <h1>SALES</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, iste odio voluptates cum, cupiditate possimus ab illo nulla libero corporis quidem nihil, totam suscipit laboriosam quam ut! Aspernatur, laborum maxime!</p>
                    <div className="ctas">
                        <div className='banner-cta'>Read More</div>
                        <div className='banner-cta v2'>Shop Now</div>
                    </div>
                </div>
                <img className='banner-img' src={BannerImg} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Banner