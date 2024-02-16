import React, { useEffect } from 'react'
import NavBar from '../../navbar/NavBar'
import NavBar2 from '../../navbar/NavBar2'
import image from '../../courosel/mountains-.jpg'
import img1 from '../../Gallery/images/img1.jpg'
import img2 from '../../Gallery/images/img2.jpg'
import img3 from '../../Gallery/images/img3.jpg'
import img4 from '../../Gallery/images/img4.jpg'
import Footer from '../../footer/Footer'
export default function Happenings() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <NavBar />
    <NavBar2 />
    <div className="container-fluid" style={{backgroundColor:'#f8f9fa'}}>
    <img src={image} alt="About Us" style={{ width: '100%', height: '70vh' }} />
    <div className="row">
      <div className="col-md-8" style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', padding: '30px', margin: '20px 0' }}>
      <div style={{ backgroundColor:'#646464',color:'white', fontSize: '20px', fontFamily: 'Arial, sans-serif', padding: '30px', margin: '20px 0' }}>
      <marquee behavior="scroll" direction="left" scrollamount="5">
      Happenings for 2022-2023,<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
       Happenings for 2021-2022,<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        Happenings for 2020-2021,<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
         Happenings for 2019-2020<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </marquee>
      </div>
      <h2 style={{ fontWeight: 'bold' }}>Photo Gallery</h2> 
      <img src={img1} className="" style={{ height: '300px',width:'400px',margin:'20px' }} alt="img1" />
      <img src={img2} className="" style={{ height: '300px',width:'400px', margin:'20px' }} alt="img1" />
      <img src={img3} className="" style={{ height: '300px',width:'400px',margin:'20px' }} alt="img1" />
      <img src={img4} className="" style={{height: '300px',width:'400px', margin:'20px'}} alt="img1" />

      </div>
      <div className="col-md-4">
      <div className="card" style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', padding: '20px', margin: '20px 0', borderRight: '1px solid #ccc' }}>
  <div className="card-body">
    <h5 className="card-title">Quick Links</h5>
    <ul className="list-group list-group-flush">
      <li className="list-group-item" style={{ border: 'none', display: 'flex', alignItems: 'center', backgroundColor: '#f8f9fa' }}>
        <i className="bi bi-chevron-right" style={{ marginRight: '10px' }}></i>
        <a href="/happen" style={{ textDecoration: 'none', color: '#333' }}>Happenings</a>
      </li>
      <li className="list-group-item" style={{ border: 'none', display: 'flex', alignItems: 'center', backgroundColor: '#f8f9fa' }}>
        <i className="bi bi-chevron-right" style={{ marginRight: '10px' }}></i>
        <a href="/about" style={{ textDecoration: 'none', color: '#333' }}>About Us</a>
      </li>
      <li className="list-group-item" style={{ border: 'none', display: 'flex', alignItems: 'center', backgroundColor: '#f8f9fa' }}>
        <i className="bi bi-chevron-right" style={{ marginRight: '10px' }}></i>
        <a href="/academics" style={{ textDecoration: 'none', color: '#333' }}> Academics</a>
      </li>
      <li className="list-group-item" style={{ border: 'none', display: 'flex', alignItems: 'center', backgroundColor: '#f8f9fa' }}>
        <i className="bi bi-chevron-right" style={{ marginRight: '10px' }}></i>
        <a href="/contacts" style={{ textDecoration: 'none', color: '#333' }}>Contact Us</a>
      </li>
      <li className="list-group-item" style={{ border: 'none', display: 'flex', alignItems: 'center', backgroundColor: '#f8f9fa' }}>
        <i className="bi bi-chevron-right" style={{ marginRight: '10px' }}></i>
        <a href="/career1" style={{ textDecoration: 'none', color: '#333' }}>Career</a>
      </li>
    </ul>
  </div>
</div>


</div>
    </div>
    <div className="row">
      <div className="col-md-8"style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', padding: '20px', margin: '20px 0' }}>
    
  <div style={{ display: 'flex', alignItems: 'center',fontSize: '20px', fontFamily: 'Arial, sans-serif', }}>
    <i className="bi bi-chevron-right" style={{padding: '5px', borderRadius: '50%', marginRight: '10px' }}></i>
    <p>We provide many opportunities to engage young learners with a range of materials and resources that extend and challenge their thinking.</p>
  </div>

      </div>
      <div className="col-md-4" style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', padding: '20px', margin: '20px 0' }}>
      <div className="scrolling-text-container" style={{ backgroundColor: '#F5FFFA', fontFamily: 'sans-serif', fontSize: '20px', fontWeight: 'bold', padding: '20px', margin: '20px 0' }}>
            <ul className="scrolling-text">
              <li>Academic Year Starts from June-2025</li>
              {/* Add more text items as needed */}
            </ul>
          </div>
      </div>
    </div>

  </div>
  <Footer />
  </div>
  )
}
