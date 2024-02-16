import React, { useEffect } from 'react'
import NavBar from '../../navbar/NavBar'
import NavBar2 from '../../navbar/NavBar2'
import image from '../../courosel/mountains-.jpg'
import Footer from '../../footer/Footer';
export default function Academics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <NavBar />
    <NavBar2 />
    <div className="container-fluid" style={{backgroundColor:'#b5c6c6'}}>
    <img src={image} alt="About Us" style={{ width: '100%', height: '70vh' }} />
    <div className="row">
      <div className="col-md-8" style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif', padding: '30px', margin: '20px 0' }}>
      <p>
            Our integrated curriculum is a thematic learning programme that builds on the child’s 
            existing knowledge through establishing a correlation with different domains of learning. 
            It transports them to a higher level of thinking & provides them with a plethora of opportunities to be meaningfully engaged in tandem with their interests and intelligences. 
            This gives the children multiple ways of expressing themselves.
          </p>
          <p>
            Education is not about making them literate, restricting them to writing and reading; it’s
             about expanding their mental horizons, broadening their thinking, enriching their experiences, 
             empowering them with knowledge and skills, inculcating values, developing their personal and social skills, making them self-reliant and regulated, 
             imparting awareness about health and safety, building a sense of physical wellness, igniting their enquiry skills and creating a need for citizenship.
          </p>
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
    
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Curriculum Framework
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>
              The curriculum is based on the National Curriculum Framework that reminds us as to what information should be given within each of the Key 
              Learning Areas. It assures the continuum of learning that begins at birth and continues through graduation. The curriculum framework includes big ideas, essential questions, vocabulary, 
              concepts and competencies that further define the learning standards.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Clear Standards
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
             <p>
             Learning standards provide the framework for learning. They provide the foundational information for what children should know and be able to do.
              Our school’s standards are based on the National Curriculum Framework and built on information learnt previously creating a continuum of learning and linked learning that begins in infancy, 
             gradually getting more challenging as it extends through high school.
             </p>
            </div>
          </div>
        </div>
        {/* Add similar accordion-items for the remaining sections */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Material and Resources
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>
              Our learning classroom, is comfortable, safe and has nurturing environment where children can interact with manipulatives and materials to enhance skill development.
               Children discover and understand science, social studies and math information when they actively explore materials and ideas that are guided by teachers who intentionally design activities that engage children in critical thinking and processing. 
              Children also learn about their own abilities and learning styles and how to get along with others through a diverse set of materials and experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Instruction
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
           <p> Learning occurs within the context of play and active learning strategies where children are engaged in concrete and hands – on discovery, experimentation and interaction with materials, their peers and nurturing adults.

            Our educators helps construct knowledge during these active learning times by designing activities that build on children’s prior knowledge to create understanding and information. Educators ask open ended questions that encourage children to think about what comes next or to know more and they support children’s creativity, problem solving, 
             intuition and inventiveness by challenging and encouraging them.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              Fair Assessments
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>
              The children are assessed formally as well as informally. Formative assessments provide information about how children are progressing in the classroom and allow the educators to 
              make adaptations or adjustments. The assessments are fair and aim at assessing the teaching – learning process and are documented to be used as information to formulate individualized learning plans.


              </p>
            </div>
          </div>
        </div>
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

