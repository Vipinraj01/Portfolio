import React from 'react';
import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

export const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually and user-friendly websites. I have a strong understanding of design and a keen eye for details. I am proficient in HTML, CSS, JavaScript, Bootstrap, React.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt='UI Design' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>UI/Ux Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt='Web Design' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Web Design</h2>
            <p>This demo text can be changed while making the production ready websites</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt='App Design' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>App Design</h2>
            <p>You can write text related to mobile app development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
