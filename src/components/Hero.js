import React from 'react';
import sofa from '../assets/sofa.png'
import lamp from '../assets/floor_lamp.png'
import deco from '../assets/decoration.jpg'

const Hero = () => {
  return <div className="hero">
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-title">
                    <div className="hero-card">
                        <h1>Find Your Best Furniture</h1>
                        <img src={deco} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus numquam commodi hic quaerat deleniti cumque illum .</p>
                        <div className="hero-card-buttons">
                            <button className='btn-active'>GET Started</button> <button>WATCH VIDEO</button>
                        </div>
                    </div>
                </div>
                <div className="hero-img">
                    <div className="image-sofa">
                        <img src={sofa} alt="" />
                        <div className="image-sofa-title">
                            <span>.</span>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div className="image-sofa-title1">
                            <span className></span>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div className="image-sofa-title2">
                            <span className></span>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <div className="image-lamp">
                        <img src={lamp} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
  </div>;
};

export default Hero;
