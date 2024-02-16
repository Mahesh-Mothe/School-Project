import React from 'react';
import './Bulletin.css'; 

const Bulletin = () => {
  return (
    <div className="container-fluid"  style={{margin:'50px 0'}}>
      <div className="row" style={{backgroundColor:'#9bd3b4',color:'white', height:'70vh',padding:'0 50px',display:"flex",flexDirection:"row"}}>
        {/* Left column for scrolling text */}
        <div className="col-md-4 " style={{width:'80%',backgroundColor:'#F5FFFA', color:'black' ,fontFamily:'sans-serif',fontSize:'20px', fontWeight:'bold',flex:"1",margin:"10px" }}>
        <h2  style={{ fontFamily: 'Arial, sans-serif', fontSize: '40px', fontWeight: '400', padding:'20px' }}>Bulletin</h2>
        <hr className="middle-hr" style={{width:'8%',height:'8px',backgroundColor:'#198d66',border:'none'}} />
          <div className="scrolling-text-container">
            <ul className="scrolling-text">
              <li>Academic Year Starts from June-2025</li>
              {/* Add more text items as needed */}
            </ul>
          </div>
        </div>
        {/* Right column for additional content */}
        
        <div className="col-md-8 p-4 d-flex align-items-center">
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', fontWeight: '400', }}>
            <h1 className="mb-4">Sowing of SEEDS</h1>
            <p className="mb-4">An exclusive Primary School promoted by The Creek Group at Miyapur for the Academic Year 2011-12, 
            is the result of deliberations, and planning on every aspect of the foundation school before formal schooling.</p>
             <p> Every minute detail has been addressed to with due care.</p>
               <p>The outcome is a Primary School of standards beyond compare.</p>  
               <button className="view-more-btn" style={{ width: '18%', backgroundColor: '#ffff', color: 'black', border: 'none', padding: '10px 0', cursor: 'pointer', borderRadius:'20px',textAlign:"center",fontWeight:"500" }}>View More</button>

          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Bulletin;
