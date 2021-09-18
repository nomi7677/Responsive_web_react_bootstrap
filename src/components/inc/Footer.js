import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(

        <section className="bg-dark text-white py-5">

<div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h6> Company Info</h6>
                    <hr />
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </p>
                </div>
            
                <div className="col-md-4">
                    <h6> Quick Links</h6>
                    <hr />
                    <div> <Link to="/" className="text-decoration-none text-white">Home</Link></div>
                    <div> <Link to="/about" className="text-decoration-none text-white">About Us</Link></div>
                    <div> <Link to="/contact" className="text-decoration-none text-white" >Contact Us</Link></div>
                </div>
                <div className="col-md-4">
                    <h6> Contact Information</h6>
                    <hr />
                    <div> <p>112 French St, Wilmington, DE 19801</p>  </div>
                    <div><p>302-317-3020</p></div>
                    <div><p>demo@gmail.com</p></div>
                
                </div>
                </div>
            </div>
        
        </section>
      

    )
}
export default Footer;