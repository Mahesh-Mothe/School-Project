import React from 'react';
import NavBar from '../../navbar/NavBar';
import NavBar2 from '../../navbar/NavBar2';
import Footer from '../../footer/Footer';

const Contact = () => {
  return (
    <>
    <NavBar/>
    <NavBar2 />
    <div className="container" style={{ marginTop: '50px' }}>
      <div className="row">
        <div className="col-md-6" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '5px' }}>
          <h2>SEEDS (Primary School)</h2>
          <p>
            Plot No: 106C, Opp. Aparna Grande, Nallagandla HUDA Layout,<br />
            Serilingampally, Hyderabad – 500 019.
          </p>
          <p>
            Landmark: Opp. Aparna Grande, Nallagandla HUDA Layout.
          </p>
          <p>
            Tel.: +91 91 00 44 11 11/ 91 00 45 11 11
          </p>
          <p>
            Helpline: +91-9100441111
          </p>
          <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '5px' }}>
          <h2>Corporate Office Address:</h2>
          <p>Flat No.: 102, Fortune Chambers<br />
          Image Gardens Road,<br />
          VIP Hills, Silicon Valley,<br />
          Madhapur, Hyderabad – 500081.</p>

          <p><strong>Email:</strong> info@thecreekschool.com</p>
          <p><strong>Phone No:</strong> 1800-425-3389</p>
          </div>
        </div>
        <div className="col-md-6" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '5px' }}>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn " style={{ width: '100%',backgroundColor:'#10898d',color:'white'}}>Submit</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
