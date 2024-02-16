import React, { useState } from 'react';
import './Footer.css'

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', handleScroll);
  return (
    <footer className="footer" style={{ backgroundColor: '#000', color: '#fff', fontSize: '18px', fontWeight: '50px' ,fontFamily:'sans-serif' }}>
      <div className="container">
        <div className="row">
          {/* Column 1: Address, Call, Email */}
          <div className="col-md-4">
            <h5>Address</h5>
            <hr style={{backgroundColor:'green', width:'50px',height:'5px',border:'none',zIndex:'1'}}/>
            <p>Best Campus (Hyderabad)</p>
            <p>Plot No: 10B, Opp. My School Zone,</p>
            <p>HI-Tech City, Hyderabad – 500 085.</p>
            <p>Landmark: Opp. My School Zone,</p>
            <hr />
            <p>Phone: 123-456-7890</p>
            <hr />
            <p>Email: example@example.com</p>
            <hr />
          </div>

          {/* Column 2: Google Maps */}
          <div className="col-md-4">
            <h5>Location</h5>
            {/* <div className="embed-responsive embed-responsive-4by3">
              <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.472250249223!2d79.18834567372649!3d18.732431362671356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcd3a8787a59915%3A0xacf4dd50787c07e7!2sbrilliant%20model%20school!5e0!3m2!1sen!2sus!4v1707830152273!5m2!1sen!2sus" allowFullScreen title="Google Maps"></iframe>
            </div> */}
            <div className="embed-responsive embed-responsive-4by3">
            <p><iframe className="embed-responsive-item"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10763.879084823408!2d78.31146460053588!3d17.478564723418806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb92e9b706a75d%3A0xa6394c66d3a9ff67!2sSeeds+School+-+Uranus+campus!5e0!3m2!1sen!2sin!4v1526715240586" allowFullScreen title="Google Maps" allowfullscreen=""></iframe></p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled" style={{ marginBottom: '30px', padding: 0 }}>
    <li className="nav-item"><a href="/about" className="text-white" style={{ textDecoration: 'none',fontSize:'20px' }}>About Us</a></li>
    <li className="nav-item"><a href="/academics" className="text-white" style={{ textDecoration: 'none',fontSize:'20px' }}>Academics</a></li>
    <li className="nav-item" ><a href="/happen" className="text-white" style={{ textDecoration: 'none',fontSize:'20px' }}>Happenings</a></li>
    <li className="nav-item"><a href="/contacts" className="text-white" style={{ textDecoration: 'none',fontSize:'20px' }}>Contact Us</a></li>
    <li className="nav-item"><a href="/career1" className="text-white" style={{ textDecoration: 'none',fontSize:'20px' }}>Careers</a></li>
  </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p className="text-white">Copyright © 2024 My Zone School. All rights reserved.</p>
          </div>
        </div>
        {isVisible && (
        <div className="fixed-bottom d-flex justify-content-end mb-4 mr-10">
          <button className="btn btn-success btn-lg" style={{ borderRadius: '50%', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',marginRight: '30px', marginBottom: '30px' }} onClick={scrollToTop}>
            <i className="bi bi-chevron-up"></i>
          </button>
        </div>
      )}
      </div>
    </footer>
  );
};

export default Footer;
