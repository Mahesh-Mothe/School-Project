import React from 'react';
import img1 from '../courosel/image4.jpg';
import FadeComp from './FadeComp';
const Advantage = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${img1})`,
      backgroundSize: 'cover',
      backgroundColor: '#9bd3b4',
      fontFamily: 'Arial, sans-serif',
      fontSize: '20px',
      fontWeight: 'bold',
      padding: '50px',
      margin: '0',
      position: 'relative' // Added position relative
    }}>
      <div style={{ 
        position: 'absolute', // Position the overlay absolutely
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#9bd3b4', // Color of the overlay
        opacity: 0.8 // Adjust opacity as needed
      }}></div>
      
      <div className="container-fluid" style={{ marginTop: '40px 0',padding:'20px' }}>
        <div className="row" style={{ height:'80vh', position: 'relative', zIndex: 1, }}>
          <div className='col-md-12' style={{ textAlign: 'center', paddingTop: '20px', color: '#fff' }}>
            <h4 style={{ fontSize: '30px', fontFamily:'serif',fontWeight:'bold', }}>Advantages of <br />
            <span style={{color:'#198d66', fontSize:'50px'}}>Seeds School</span></h4>
          </div>
         <FadeComp/>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
