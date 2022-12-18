import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="form-container">
                <form action="">
                    <h1><span>Contact</span>Us</h1>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter your name ' />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter your email' />
                    </div>
                    <div>
                        <label htmlFor="">Massage</label>
                        <textarea rows='10' cols='50'  placeholder='Enter your Name ' />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact