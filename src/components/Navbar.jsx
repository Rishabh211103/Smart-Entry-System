import React from 'react';
import logo from "../assets/Tedx-logo.svg";
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom'

const Navbar = ()=> {

    const navigate = useNavigate();

    return (

            <div className="navabr">
                <motion.div 
                 
                 initial={{ opacity:0,y:-30 }}
                 animate={{opacity:1, y: 0 }}
                 transition={{ duration: 1}} 
                 className="logo">
                    <img src={logo} alt="logo" onClick={()=>navigate('/')}/>
                </motion.div>
                <div className="nav-links">
                    <motion.ul 
                    initial={{ opacity:0,y:-30 }}
                    animate={{opacity:1, y: 0 }}
                    transition={{ duration: 1}} 
                         className='nav-links-list'>
                        <a href="/#about-section" className="nav-a-tag"><li>About</li> </a>
                        <a href="/#speaker-section" className="nav-a-tag"><li>Speakers</li> </a>
                        {/* <a href="#" className="nav-a-tag"><li>Team</li> </a> */}
                        <a href="/#contact-section" className="nav-a-tag"><li>Contact</li> </a>
                        <a onClick={()=>navigate('/team')} className="nav-a-tag"><li>Team</li> </a>
                    </motion.ul>
                </div>
            </div>
    )
}

export default Navbar
