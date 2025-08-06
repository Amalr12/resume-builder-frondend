import React from 'react'
import { Link } from 'react-router'

function ResumeGenerator() {
  return (
  <div className="resume-section text-white text-center">
    <h2 className='fw-bold mb-5 pt-5'>Create a jon winning Resume in minutes</h2>
    <div className="container">
      <div className="row justify-content-center g-4 mb-4">
        <div className="col-md-4">
          <div className="resume-card p-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="resume-icon text-primary"> 
                  <i className='bi bi-file-earmark-text-fill fs-1'></i>
                </div>
              </div>
              <span className='badge bg-danger fs-6 px-3 py-2'>Step 1</span>
              <h5 className='fw-bold text-success'> Add your Information</h5>
              <p className='text-muted small'>Use smart sections with pre-written exaples to fill quickly</p>
          </div>
        </div>

        <div className="col-md-4">
           <div className="resume-card p-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="resume-icon text-primary"> 
                  <i className='bi bi-file-earmark-text-fill fs-1'></i>
                </div>
              </div>
              <span className='badge bg-danger fs-6 px-3 py-2'>Step 2</span>
              <h5 className='fw-bold text-success'> Download your resume</h5>
              <p className='text-muted small'>Download and start applying</p>
          </div>
        </div>
      </div>
       <div>ResumeGenerator
     <Link to={"/Form"}> <button className=''>
        Lets Start
      </button></Link>
    </div>

    </div>
  </div>
    ) 
}

export default ResumeGenerator