import React, {Component} from 'react';
import Footer from '../inc/Footer';
class Contact extends Component{
    render(){
        return(
        <div>
            <section className="py-4 text-center bg-primary">
                <h1 className="text-white">Contact Us </h1>
                </section>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49094.947021308544!2d-75.56450395817173!3d39.72989673925777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c70f185c46af6f%3A0x8516da5077308c00!2sWilmington%2C%20DE!5e0!3m2!1sen!2sus!4v1631979745229!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div className="col-md-4">
                            <div className="card shadow">
                            <div className="card-body py-2">
                                <h4>Send Your Idea</h4>
                                <div className="underline mb-3"></div>
                                <form>

                                    <label for=""> Name</label>
                                    <input type="text" placeholder="Enter your Name" class="form-control mb-3" />
                                
                                    <label for=""> Email</label>
                                    <input type="text" placeholder="Enter your Email" class="form-control mb-3" />

                                    <label for=""> Message</label>
                                    <textarea rows="5" class="form-control mb-3"></textarea>

                                    <button type="submit" className="btn btn-primary w-100">Submit</button>

                                    </form>
                        
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
            
              
                    
            </section>
        <Footer />
        </div>
        )
    }
    }



export default Contact;