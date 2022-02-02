import React from 'react';

const About = () => {
  return <div className='about'>
    <div className="about-container">
      <div className="about-header">
        <h1>About Project</h1>
      </div>
      <div className="underline"></div>
      <div className="about-content">
        <div className="about-desc">
          <h3>BRIEF DESCRIPTION</h3>
          <p>-This website built for selling furniture products.</p>
          <p>-There are SIX pages on this website each page used multiple ways to show things</p>
        </div>
        <div className="about-materiel">
          <h3>SKILLS USED</h3>
          <p>-Without question HTML and CSS & JAVASCRIPT is esseniall for building any website.</p>
          <p>-Here I used <span>REACT.JS</span> as a Library for building this website</p>
          <p>-I used <span>react redux</span> to make my website code clean</p>
          <p>-By defining <span>Reducers</span>,<span>Actions</span>,<span>Store</span> away from components.</p>
          <p>-And Calling it by <span>State</span> and <span>Dispatch</span> inside each component.</p>
          <p>-Beside <span>react redux</span>,I used react Hooks <span>UseState</span> and <span>UseEffect</span> to display data</p>
          <p>-For <span>CSS</span> I used both <span>FlexBox</span> and <span>Grid</span> To make my website look clean and beautiful on each Device.</p>
          <p>-I brought all data from Amazone website and did not used <span>APIs</span> I have enough knowledge to implement data from <span>APIs</span>, I can implement <span>PayPal</span> payments as well.</p>
          <p>-For more info about my services do not hesitate to contact me , This website is fully client side only.</p>
        </div>
      </div>
    </div>
  </div>;
};

export default About;
