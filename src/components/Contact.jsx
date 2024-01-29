import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div>

        <section className='contact' id='contact'>
<h2 className='heading'>Contact</h2>
<form  action='#'>
    <div className='input-box'>
<div className='input-field'>

    <input type="text" placeholder='full name' required />
    <span className='focus'></span>
</div>
<div className='input-field'>

    <input type="text" placeholder='Email address' required />
    <span className='focus'></span>
</div>


    </div>
    <div className='input-box'>
<div className='input-field'>

    <input type="number" placeholder='mobile number' required />
    <span className='focus'></span>
</div>
<div className='input-field'>

    <input type="text" placeholder='Email Subject' required />
    <span className='focus'></span>
</div>


    </div>
<div className='textarea-field'>
    <textarea name='' id='' cols={'30'} rows={'10'} placeholder='your message' required></textarea>
    <span className='focus'></span>

</div>
<br />
<br />
<div className='btn-box '>
    <button  style={{width:'100px',backgroundColor:'#00abf0'}} type='submit' className='btn '>Submit</button>

</div>

</form>
 
        </section>
    </div>
  )
}

export default Contact