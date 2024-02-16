import React from 'react';
import schoolImage from  './image1.jpeg';
import schoolbuilding from '../Gallery/images/schoolbuilding.jpg'

const Question = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#f5f5f5', padding: '20px', margin:'50px 0' }}>
      <div className="row">
        {/* Left column */}
        <div className="col-md-8 p-4 d-flex align-items-center">
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', fontWeight: '400' }}>
            <h1 className="mb-4">About <span style={{color:'#198d66', fontSize:'50px'}}>Seeds School?</span></h1>
            <hr className="middle-hr" style={{width:'8%',height:'8px',backgroundColor:'#198d66',border:'none'}} />
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum vestibulum ultricies. 
            Sed aliquet urna vitae augue vulputate, nec tempor quam luctus. Nam id ante vel arcu vehicula bibendum. Donec blandit mi sit amet porttitor eleifend.</p>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed vestibulum vestibulum ultricies. Sed aliquet urna vitae augue vulputate, nec tempor quam luctus. Nam id ante vel arcu vehicula bibendum. Donec blandit mi sit amet porttitor eleifend.</p>
            <button className="btn btn-success" style={{height:"45px"}}>Read More</button>
          </div>
        </div>

        {/* Right column */}
        <div className="col-md-4 d-flex align-items-center">
          <img src={schoolbuilding} alt="School" className="img-fluid" style={{ height: '500px', width: '450px', objectFit: 'contain',zIndex:'1' }} />
        </div>
      </div>
    </div>
  );
};

export default Question;
