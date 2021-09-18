import React, {Component} from 'react';
import Slider from '../inc/Slider';
import Mv from './includes/Mv';
import Footer from '../inc/Footer';

class Home extends Component{
    render(){
        return(

        
        <div>
            <Slider />
            <section className="py-5">
                <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <h4> Our Company</h4>
                    <div className="underline mb-3">

                        </div>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </p>
                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    </p>
                    </div>
                    </div>
                    </div>
            </section>
            
            <Mv />
            <section className="py-5">
         <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4> Our Services</h4>
                    <div className="underline mb-3"></div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow">
                    <div className="card-body">
                            <h6> App Development</h6>
                            <div className="underline mb-3 sub-underline">
                            </div>
                                
                            <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            </p>
                            </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow">
                    <div className="card-body">
                            <h6> Web Designing</h6>
                            <div className="underline mb-3 sub-underline">
                            </div>
                                
                            <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            </p>
                            </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow">
                    <div className="card-body">
                            <h6> Development</h6>
                            <div className="underline mb-3 sub-underline">
                            </div>
                                
                            <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            </p>
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


export default Home;