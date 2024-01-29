import React from 'react'
import './Skill.css'

function Skill() {
  return (
    <div>
        <section className='skills'id='skills'>
        <h2 className='heading'>My<span>Skills</span></h2>

        <h4 style={{marginLeft:'90px'}}>these are the  thechnologies I've worked with </h4>
        <br />
        <br />

        <div className='skills-row'>
            <div className='skills-column'>
                <h3 className='title'></h3>


                <div className='skills-box'>
                    <div className='skills-content'>
                        <div className='progress'>
                            <h3>HTML<span>90%</span></h3>
                            <div className='bar'><span></span></div>
                        </div>
                        <div className='progress'>
                            <h3>CSS<span>80%</span></h3>
                            <div className='bar'><span></span></div>
                        </div>
                        <div className='progress'>
                            <h3>JAVASCRIPT<span>60%</span></h3>
                            <div className='bar'><span></span></div>
                        </div>
                        <div className='progress'>
                            <h3>MONGODB<span>70%</span></h3>
                            <div className='bar'><span></span></div>
                        </div>



                    </div>
                </div>

            </div>

            
            <div className='skills-column'>
                <h3 className='title'></h3>


                <div className='skills-box'>
                    <div className='skills-content'>
                        <div className='progress'>
                            <h3>REACT<span>60%</span></h3>
                            <div className='bar'><span></span></div>
                        </div>
                        <div className='progress'>
                            <h3>ANGULAR<span>70%</span></h3>
                            <div className='bar'><span></span></div>
                        </div>
                        <div className='progress'>
                            <h3>NODE JS<span>80%</span></h3>
                            <div className='bar'><span></span></div>
                        </div>
                        <div className='progress'>
                            <h3>EXPRESS JS<span>60%</span></h3>
                            <div className='bar'><span></span></div>
                        </div>



                    </div>
                </div>

            </div>
        </div>

        </section>
    </div>
  )
}

export default Skill