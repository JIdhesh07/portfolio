import React from 'react'
import './About.css'
import ra from '../Asset/FullSizeRender.jpg'

function About() {
  return (
    <div>
        <section className='about' id='about'>
        <h1 className='heading'>About<span>Me</span></h1>


<div className='about-img'>
<img src={ra} alt="" />
<span className='circle-spin'></span>
</div>
<div className='about-content'>
    <h1>Fullstack Developer</h1>
    <p style={{padding:'80px'}}>I recently graduated from Bharathiar University with a degree in Bachelor Of Computer Application. I've always been passionated about programming and technology and i've completed several projects that have helped me to develop my skills. I have strong technical skill particularly in MERN stack..</p>

    <div className='btn-tn'>
        <a className='ar' href='https://drive.google.com/file/d/1Ork7EzDRb3nMmZ0MZiyHnSz7ezI3bQep/view?usp=drivesdk'>Resume</a>
    </div>

<br />
<br />
<br />

</div>

        </section>


    </div>
  )
}

export default About