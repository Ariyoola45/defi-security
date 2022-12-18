import React from 'react'
import './footer.css'
import {SiDatabricks,} from 'react-icons/si'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import { FiMail,FiInstagram,FiFacebook,FiLinkedin,FiDribbble,FiGithub } from 'react-icons/fi'
import {Link} from 'react-scroll'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="top">
                <div className="loop-footer">
                    <SiDatabricks className='icon'/>
                    <h2>Secured</h2>
                </div>
                <Link activeClass="active" to="top" spy={true} smooth={true} offset={50} duration={500} >
                <BsFillArrowUpCircleFill  className='icon'/>
                </Link>
                
            </div>
            <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Could</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>My Account</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Could</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>Information</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Could</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>Legal</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Could</p>
                        <p>Contact</p>
                    </div>
                    <form action="">
                        <h3>Join Our Team</h3>
                        <input type="email" name="email" id="email" placeholder='Enter your email' />
                        <FiMail className='mail-icon'/>
                        <div>
                            < FiInstagram className='social-icon' />
                            <FiFacebook className='social-icon' />
                            <FiLinkedin className='social-icon' />
                            <FiDribbble className='social-icon' />
                            < FiGithub className='social-icon' />
                        </div>
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Footer