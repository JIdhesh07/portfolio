import React from 'react'
import './Home.css'
import ju from '../Asset/Instagram post - 1 (1).png'

function Home() {
  return (
    <div>
<header className='header'>

<a href='#' className='logo'>Jidhesh</a>

<nav className='navbar'>
  <a href='./' className='active'>home </a>
  <a href='#about'>About</a>
  <a href='#skills'>Skills </a>
  <a href='#services'>Projects</a>
  <a href='#contact'>Contact</a>


</nav>
</header>
<section className='home'>
<div className='home-content'>
 

  <h1 style={{marginTop:'10px'}}>Hi, I'm Jidhesh vs</h1>
  <h3> MEA(R)N Stack Developer</h3>
  <p style={{marginTop:'40px'}}>I recently graduated from Bharathiar University with a degree in Bachelor Of Computer Application. I've always been passionated about programming and technology and i've completed several projects that have helped me to develop my skills. I have strong technical skill particularly in MERN stack..</p>

  <div style={{marginTop:'50px'}} className="btn-box">
  <a href='https://www.linkedin.com/in/jidheshvs/'>Hire me</a>
  <a href='#'>Let's Talk</a>
  </div>
</div>
<div className='home-sci'>

<a href='https://www.linkedin.com/in/jidheshvs/'><i class="fa-brands fa-linkedin"></i></a>
<a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>
<a href='https://github.com/JIdhesh07'><i class="fa-brands fa-github"></i></a>
  



</div>
</section>

<br />
<br />
<br />
<img className='tt' style={{marginLeft:'900px',marginTop:'-3000px'}} width={'430px'} src={ju} alt="" />
    </div>
  )
}

export default Home