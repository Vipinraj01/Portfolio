import React from 'react';
import './intro.css';
import bg from '../../assets/vipin.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <div className="introName">Vipin Raj</div><br/><div className='no'>Front End Developer</div></span>
        <p className="introPara">I am a skilled web designer with experience in creating <br /> visually appealing and user-friendly websites</p>
        <Link to="hire" smooth={true} duration={500}><button className='btn'><img src={btnImg} alt="" className='btnImg' />Hire me</button></Link>
      </div>
      <img src={bg} alt="Profile" className='bg' />
    </section>
  );
}

export default Intro;
