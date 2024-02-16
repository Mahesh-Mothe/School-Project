import React, { useState, useEffect } from 'react';
import img1 from './image4.jpg';
import img2 from './mountains-.jpg';
import img3 from './photo.avif';

const Carousel = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 3000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="carousel-with-form-container" style={{ position: 'relative', marginBottom: '60px'}}>
      {/* Carousel */}
      <div className="carousel" id="carouselExampleControls" data-bs-ride="carousel" style={{ height: '100%' }}>
        <div className="carousel-inner">
          {/* Carousel items */}
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" style={{ height: '100vh', objectFit: 'cover' }} alt="img1" />
            {showText && (
              <div className="carousel-caption" style={{ position: 'absolute', top: '30%', left: '-40%', zIndex: '1', color:'white' }}>
                <h5>Education is not just about learning</h5>
                <h3 style={{ fontFamily: 'cursive', fontSize: '40px', margin: '10px' }}>It Is About Lifestyle</h3>
                <p>There should be a philosophy one should adopt while teaching and learning</p>
              </div>
            )}
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" style={{ height: '100vh', objectFit: 'cover' }} alt="img2" />
            {showText && (
              <div className="carousel-caption" style={{ position: 'absolute', top: '30%', left: '-40%', zIndex: '1', color:'white' }}>
                <h5>Education is not just about learning</h5>
                <h3 style={{ fontFamily: 'cursive', fontSize: '40px', margin: '10px' }}>It Is About Lifestyle</h3>
                <p>There should be a philosophy one should adopt while teaching and learning</p>
              </div>
            )}
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" style={{ height: '100vh', objectFit: 'cover' }} alt="img3" />
            {showText && (
              <div className="carousel-caption" style={{ position: 'absolute', top: '30%', left: '-40%', zIndex: '1', color:'white' }}>
                <h5>Education is not just about learning</h5>
                <h3 style={{ fontFamily: 'cursive', fontSize: '40px', margin: '10px' }}>It Is About Lifestyle</h3>
                <p>There should be a philosophy one should adopt while teaching and learning</p>
              </div>
            )}
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Form */}
      <div className="form-container" style={{ position: 'absolute', top: '50%', right: '9rem', transform: 'translateY(-50%)', width: '30%', maxWidth: '400px', zIndex: '2', borderRadius: '20px', backgroundColor: '#FFFFFF', padding: '20px', border: 'none', }}>
        <form className="form" style={{ margin: 'auto' }}>
          <h3>Enquiry</h3>
          <input type="text" placeholder="Children Name" style={{ width: '100%', height: '50px', marginBottom: '10px', border: 'none', borderBottom: '1px solid #000', padding: '5px', margin: '5px 0' }} />
          <input type="text" placeholder="Date of Birth" style={{ width: '100%', height: '50px', marginBottom: '10px', border: 'none', borderBottom: '1px solid #000', padding: '5px', margin: '5px 0' }} />
          <input type="text" placeholder="Phone Number" style={{ width: '100%', height: '50px', marginBottom: '10px', border: 'none', borderBottom: '1px solid #000', padding: '5px', margin: '5px 0' }} />
          <input type="email" placeholder="Email Address" style={{ width: '100%', height: '50px', marginBottom: '10px', border: 'none', borderBottom: '1px solid #000', padding: '5px', margin: '5px 0' }} />
          <label>Gender</label>
          <div style={{ display: 'flex', padding: '10px' }}>
            <label style={{ marginRight: '10px' }}>
              <input type="radio" name="gender" value="male" style={{ marginRight: '5px' }} />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" style={{ marginRight: '5px' }} />
              Female
            </label>
          </div>
          <select style={{ width: '100%', height: '50px', marginBottom: '10px', border: 'none', borderBottom: '1px solid #000', padding: '5px', margin: '5px 0' }}>
            <option value="" disabled selected>Select seeking admission</option>
            <option value="pre-school">Pre-School</option>
            <option value="primary-school">Primary School</option>
            <option value="secondary-school">Secondary School</option>
          </select>
          <textarea placeholder="Message" style={{ width: '100%', height: '120px', marginBottom: '10px', border: 'none', borderBottom: '1px solid #000', padding: '5px', margin: '5px 0' }}></textarea>
          <div style={{ width: '100%', backgroundColor: '#72b791', color: 'white', border: 'none', padding: '10px 0', cursor: 'pointer', borderRadius: '20px', textAlign: "center", fontWeight: "500" }}>Submit</div>
        </form>
      </div>
    </div>
  );
};

export default Carousel;
