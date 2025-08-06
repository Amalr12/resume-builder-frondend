import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import Button from '@mui/material/Button';
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <>
    <div className=" bg-primary p-3">
        <div className="row">
            <div className="col-4">
                <h1>RBuilder</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt ullam est sapiente laboriosam tempore eum, quas fugit illum? Sapiente libero optio asperiores vero velit, recusandae vitae suscipit sint ea.</p>
            </div>
            <div className="col-4">
                <h1>Quick Links</h1>
                <ul>
                    <li><a href="" className='text-dark text-decoration-none'>Home</a></li>
                    <li><a href="" className='text-dark text-decoration-none'>Resume Creator</a></li>
                    <li><a href="" className='text-dark text-decoration-none'>History</a></li>
                </ul>
            </div>
            <div className="col-4">
                     <h1>Contact Us</h1>
                <form action="">
                    <div className="d-flex justify-content-between align-items-center ">
                       
                        <input type="text"  className='form-control me-3' placeholder='Enter Your EmailID'/>
                       <Button variant="outlined" color='warning' className='py-1 px-3 text-light' >Outlined</Button>
                    </div>
                </form>
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <IoLogoFacebook className='fs-2'/>
                    <FiInstagram className='fs-2'/>
                    <BsTwitterX className='fs-2'/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer