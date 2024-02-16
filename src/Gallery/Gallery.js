import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';
import { Link } from 'react-router-dom';

const Gallery = () => {
  // Dummy image URLs
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  

  return (
    <>
    <h2 className='text-center' style={{fontFamily:'inherit',fontSize:'50px',fontWeight:'bold',margin:'20px'}}>Recent <span style={{color:'green'}}>Gallery</span></h2>
    <div className="hr-container" style={{display:'flex',justifyContent:'center',alignItems:'center', }}>
      <hr className="middle-hr" style={{width:'8%',height:'8px',backgroundColor:'#198d66',border:'none'}} />
    </div>
    <div className="photo-gallery-container" style={{ position: 'relative', overflow: 'scroll',margin:'40px 0' }}>
    
     
      <div className="photo-gallery" style={{ display: 'flex', transition: 'transform 0.3s' ,}}>
        {images.map((image, index) => (
          <div key={index} style={{  position: 'relative' }}>
           <Link to='/happen'>  <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{ width: '250px', height: '25vh', margin: '10px', padding: '5px', transition: 'transform 0.3s' }}
              onMouseEnter={(e) => { e.target.style.transform = 'scale(1.1)'; }}
              onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
            /></Link>
          </div>
        ))}
      </div>
      
    </div>
    </>
  );
};

export default Gallery;
