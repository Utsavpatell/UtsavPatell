import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='container nav_bar'
              data-aos="fade-down"
              data-aos-duration="1000"
            >
                <div className='left nav_items'>Utsav Patel</div>
                <div className='right'>
                    <a href="#home" className="nav_items">Home</a>
                    <a href="#certificates" className="nav_items">Certificates</a>
                    <a href="#skills" className="nav_items">Skills</a>
                    <a href="#projects" className="nav_items">Projects</a>
                    <a href="#contact" className="nav_items">Contact</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;