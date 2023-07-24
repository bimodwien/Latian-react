import React from 'react'
import './style.css'

const Fitness = () => {
  return (
    <>
        <div className='header-utama'>
            <div className='header-menu'>Menu</div>
            <div className='header-content'>
                <div>Workout and Program</div>
                <div>Nutrition Plan</div>
                <div>Community</div>
            </div>
        </div>
        <div className='body-utama'>
            <div className='body-content'>
                <div className='body-title'>It's Time to Regain Your Fitness</div>
                <div className='body-description'>Do Fitness anywhere and anytime with our training videos</div>
                <a href="#" className='body-button'>Try it For Free</a>
                {/* <a href="#" className='body-button'>Try it For Free</a> */}
            </div>
            <div className='body-img'>gambar</div>
        </div>
        <div className='footer-utama'>
            <div className='footer-card'>
                <div className='footer-icon'>icon</div>
                <div className='footer-title'>Daily Workout 7 Days a Week</div>
                <div className='footer-description'>Get personalise workouts on a daily basis from professional.</div>
            </div>
            <div className='footer-card'>
                <div className='footer-icon'>icon</div>
                <div className='footer-title'>Access From Any Platform</div>
                <div className='footer-description'>Use all the benefit of the service anywhere and on any device.</div>
            </div>
            <div className='footer-card'>
                <div className='footer-icon'>icon</div>
                <div className='footer-title'>Guides & Community</div>
                <div className='footer-description'>A private community where we help each others.</div>
            </div>
        </div>
    </>
  )
}

export default Fitness