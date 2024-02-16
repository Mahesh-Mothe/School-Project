import React from 'react'
import Fade from 'react-reveal/Fade'


const FadeComp = () => {
  return (
    <>
          <Fade left>
          <div className="col-md-4" style={{ margin: '40px 0' }}>
            <div className="text-center">
              <i className="bi bi-book" style={{ fontSize: '40px', color: '#fff' }}></i>
              <h3 style={{ fontSize: '22px', color: '#fff', marginTop: '20px' }}>Curriculum</h3>
              <div className="hr-container" style={{display:'flex',justifyContent:'center',alignItems:'center', }}>
            <hr className="middle-hr" style={{width:'8%',height:'3px',backgroundColor:'#FFFFFFD9',border:'none'}} />
              </div>
              <p style={{ fontSize: '18px', color: '#fff', marginTop: '20px' }}>Textbook and syllabus teaching is generally offered in every school. What makes Creek different and distinct is that it offers education..</p>
              <button className="btn" style={{ backgroundColor: 'white', color: 'black', marginTop: '20px',borderRadius:'80px',padding:'15px' }}>Read More</button>
            </div>
          </div>
          </Fade>
          <Fade top>
          <div className="col-md-4" style={{ margin: '40px 0' }}>
            <div className="text-center">
              <i className="bi bi-globe2" style={{ fontSize: '40px', color: '#fff' }}></i>
              <h3 style={{ fontSize: '22px', color: '#fff', marginTop: '20px' }}>Environment</h3>
              <div className="hr-container" style={{display:'flex',justifyContent:'center',alignItems:'center', }}>
                   <hr className="middle-hr" style={{width:'8%',height:'3px',backgroundColor:'#FFFFFFD9',border:'none'}} />
               </div>
              <p style={{ fontSize: '18px', color: '#fff', marginTop: '20px' }}>Outdoor Play-Pen includes swings, slides, merry-go-round and many other types of equipment. Through the use of appropriate apparatus..</p>
              <button className="btn" style={{ backgroundColor: 'white', color: 'black', marginTop: '20px',borderRadius:'80px',padding:'15px' }}>Read More</button>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="col-md-4" style={{ margin: '40px 0' }}>
            <div className="text-center">
              <i className="bi bi-tv" style={{ fontSize: '40px', color: '#fff' }}></i>
              <h3 style={{ fontSize: '22px', color: '#fff', marginTop: '20px' }}>Facilities</h3>
              <div className="hr-container" style={{display:'flex',justifyContent:'center',alignItems:'center', }}>
                <hr className="middle-hr" style={{width:'8%',height:'3px',backgroundColor:'#FFFFFFD9',border:'none'}} />
                 </div>
              <p style={{ fontSize: '18px', color: '#fff', marginTop: '20px' }}>Well conditioned buses with comfortable seating for pre primary kids. 
              Well trained drivers in contact with Transport In charge while on duty.
                </p>
              <button  className="btn" style={{ backgroundColor: 'white', color: 'black', marginTop: '20px', borderRadius:'80px',padding:'15px'}}>Read More</button>
            </div>
          </div>
          </Fade>
    </>
  )
}

export default FadeComp