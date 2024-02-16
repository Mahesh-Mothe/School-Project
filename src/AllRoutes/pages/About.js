import React, { useEffect } from 'react';
import image from '../../courosel/image4.jpg'
import NavBar from '../../navbar/NavBar';
import NavBar2 from '../../navbar/NavBar2';
import Footer from '../../footer/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <NavBar />
    <NavBar2 />
    <div className="container-fluid" style={{backgroundColor:'#f8f9fa',backgroundAttachment:"fixed"}}>
    <img src={image} alt="About Us" style={{ width: '100%', height: '70vh',backgroundAttachment:"fixed" ,backgroundPosition: "0% 0%",
    backgroundSize:"cover" ,
    backgroundRepeat: "repeat"}} />
    <div className="row">
      <div className="col-md-8" style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', padding: '30px', margin: '20px 0' }}>
      <h2 style={{ fontWeight: 'bold' }}>Education is not just rote learning.</h2>
          <p>It is about life itself. This is the philosophy one should adopt while teaching and learning.</p>
          <p>The novelty is not in what is taught, but in how it is taught. This fresh approach and dimension in teaching and freshness in thoughts is what makes the Creek of knowledge cascade to glory.</p>
          <p>At The Creek- Seeds -Every child is provided teaching that goes beyond classroom learning and that help them prepare themselves for the future challenges confidently. Their progress is measured not just based on their academic performance but on their overall development that includes their analytical skills and personality developments.</p>
          <p>SEEDS value the uniqueness of each child as both a gift and an opportunity. Our integrated curriculum presents a uniqueness that is supported and enhanced by a learning environment that is respectful of the child as he/she seeks to make meaning of the socio-cultural context in which he/she lives.</p>
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
    <h2>Our approach makes Teaching and learning fun where in...</h2>
  <div style={{ display: 'flex', alignItems: 'center',fontSize: '20px', fontFamily: 'Arial, sans-serif', }}>
    <i className="bi bi-chevron-right" style={{ backgroundColor: '#b5c6c6', padding: '5px', borderRadius: '50%', marginRight: '10px' }}></i>
    <p>Children are respected as strong and competent learners, curious and interested in their world.</p>
  </div>
  <div style={{ display: 'flex', alignItems: 'center',fontSize: '20px', fontFamily: 'Arial, sans-serif', }}>
    <i className="bi bi-chevron-right" style={{ backgroundColor: '#b5c6c6', padding: '5px', borderRadius: '50%', marginRight: '10px' }}></i>
    <p>Children are encouraged and acknowledged as sophisticated thinkers and communicators.</p>
  </div>
  <div style={{ display: 'flex', alignItems: 'center',fontSize: '20px', fontFamily: 'Arial, sans-serif', }}>
    <i className="bi bi-chevron-right" style={{ backgroundColor: '#b5c6c6', padding: '5px', borderRadius: '50%', marginRight: '10px' }}></i>
    <p>Knowledge is constructed through reciprocal and responsive interactions.</p>
  </div>
  <div style={{ display: 'flex', alignItems: 'center',fontSize: '20px', fontFamily: 'Arial, sans-serif', }}>
    <i className="bi bi-chevron-right" style={{ backgroundColor: '#b5c6c6', padding: '5px', borderRadius: '50%', marginRight: '10px' }}></i>
    <p>Play and conversation are central modes of learning.</p>
  </div>
  <div style={{ display: 'flex', alignItems: 'center',fontSize: '20px', fontFamily: 'Arial, sans-serif', }}>
    <i className="bi bi-chevron-right" style={{ backgroundColor: '#b5c6c6', padding: '5px', borderRadius: '50%', marginRight: '10px' }}></i>
    <p>We partner with parents and recognize them as the child's first educator.</p>
  </div>
  <div style={{ display: 'flex', alignItems: 'center',fontSize: '20px', fontFamily: 'Arial, sans-serif', }}>
    <i className="bi bi-chevron-right" style={{backgroundColor: '#b5c6c6',padding: '5px', borderRadius: '50%', marginRight: '10px' }}></i>
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
    <div className='row'>
  <div className="col-md-8" style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif', padding: '20px', margin: '20px 0' }}>
    <h1>Our program for pre-primary</h1>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="bi bi-chevron-right" style={{ padding: '5px', borderRadius: '50%', marginRight: '10px' }}></i>
      <p><strong>Personal, Social and Emotional Development:</strong> To provide a smooth transition into the wider world from home and to be able to manage and take care of oneself. The end objective is to develop a strong self-image & esteem in each child.</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="bi bi-chevron-right" style={{ padding: '5px', borderRadius: '50%', marginRight: '10px' }}></i>
      <p><strong>Knowledge and Understanding of the World:</strong> To be able to find out the significance of the environment, people & places in their lives. By using problem-solving skills, experimentation, prediction, questioning and decision making a child can co-relate himself with the world he lives in.</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="bi bi-chevron-right" style={{ padding: '5px', borderRadius: '50%', marginRight: '10px' }}></i>
      <p><strong>Physical Development:</strong> To enable children to develop fine & gross motor skills and understand how their body works.</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="bi bi-chevron-right" style={{ padding: '5px', borderRadius: '50%', marginRight: '10px' }}></i>
      <p><strong>Language, Communication & Literacy Development:</strong> To be able to explore and enjoy the use of words in languages. To use language to communicate and express oneself and as well as learn to listen carefully to others.</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="bi bi-chevron-right" style={{ padding: '5px', borderRadius: '50%', marginRight: '10px' }}></i>
      <p><strong>Mathematical Development:</strong> To develop their understanding of number, patterns, shapes and space through exploration & practice.</p>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="bi bi-chevron-right" style={{ padding: '5px', borderRadius: '50%', marginRight: '10px' }}></i>
      <p><strong>Creative Development:</strong> To help children explore and share their thoughts, ideas, and feelings through a variety of mediums like art, music, movement, dance, and role-play activities.</p>
    </div>
  </div>
</div>

  </div>
  <Footer />
  </div>
   
  );
};

export default About;
