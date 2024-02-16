import React, { useEffect } from 'react';
import image from '../../courosel/image4.jpg'
import NavBar from '../../navbar/NavBar';
import NavBar2 from '../../navbar/NavBar2';
import Footer from '../../footer/Footer';

const Career = () => {
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
      <p>We welcome committed, determined and passionate educators who are certified and possess a degree in Early Childhood Education.</p>
          <p>We look forward for Facilitators who are able to work in small groups to reach individual needs, offering challenging but appropriate instruction to bring their expertise to the program to further enhance the curriculum.</p>
          <p>Apart from qualification and experience the faculty must have a genuine appreciation of a child’s individuality as it will provide diverse opportunities for growth. They need to be committed to develop all domains and intelligences of each child.</p>
          <p>The education and care we provide directly relates to the high quality of our staff and management. That’s why we select and look forward for the best and we are determined to provide great benefits and continuous training to our employees.</p>
          <p>The facilitators who sign up with SEEDS are provided opportunities to continually improve themselves through extensive trainings and workshops that will keep them abreast on the latest trends and developments in preschool education. They will maintain an attitude of being Life Long Learners themselves.</p>
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
      <h5>THREE PROCESS SYSTEM:</h5>
          <p>If your profile meets our expectations you will receive a telephonic message.</p>
          <p>Firstly – candidates will have to attend an aptitude test.</p>
          <p>If short listed – candidates have to give a demonstration for the post they’ve applied for.</p>
          <p>If selected – candidates attend a personal interview and sign up</p>
          <p>A desire to keep oneself updated with the latest happenings in the field of education.</p>

          <h5>IF INTERESTED- YOUR COURSE OF ACTION: Click On Apply Now Button</h5>
          <p><strong>How to apply?</strong></p>
          <ol>
            <li>Click On Apply Now Button</li>
            <li>Apply for the jobs listed on the page.</li>
            <li>Fill in all the details mentioned on the page.</li>
            <li>The Shortlisted candidates will be intimated by telephone for the next process.</li>
          </ol>
          <p>SEEDS is open for passionate individuals who are ready to make and feel the difference</p>
          <p><strong>Eligible Candidates to post their C.V</strong></p>
          <p>E-mail: hr@futuristicedu.com</p>

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
   
  );
};

export default Career;
