import React from 'react';

import banner1 from '../../../images/1.png';
import banner2 from '../../../images/2.png';
import banner3 from '../../../images/3.png';
import bannerbg from '../../../images/bannerbg.jpg';
import './Banner.css'

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${bannerbg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',

    }
    return (
        <div style={bannerStyle}>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div className='container-fluid'>
                    <div class=" carousel-item active">
                      <div className="row ">
                          <div className="col-md-6">
                           <div className="banner-heading">
                           <h1><span>Our Commitment to Safe Care</span> <br /> So Life Can be Better.</h1>
                            <p>We're here when you need us. For everyday care or life-changing care, you can count on us to keep you and your loved ones safe and healthy.</p>
                            <a class="btn btn-dark" href="/" role="button">EXPLORE NOW!</a>
                           </div>
                   
                          </div>
                          <div className="col-md-6">
                          <img src={banner1} class="d-block slider-img" alt="..." />
                          </div>
                      </div>
                    </div>
                    <div class=" carousel-item">
                    <div className="row">
                          <div className="col-md-6">
                          <div className="banner-heading">
                           <h1><span>The unknown is just a question</span> <br />we find the answers.</h1>
                            <p>Getting an accurate diagnosis can be one of the most impactful experiences that you can have — especially if you've been in search of that answer for a while. We can help you get there.</p>
                            <a class="btn btn-dark" href="/" role="button">VIEW COLLECTION</a>
                           </div>
                   
                          </div>
                          <div className="col-md-6">
                          <img src={banner2} class="d-block slider-img" alt="..." />
                          </div>
                      </div>
                    </div>
                    <div class=" carousel-item">
                    <div className="row">
                          <div className="col-md-6">
                          <div className="banner-heading">
                          <h1><span>Making Health Easier</span> <br /> So Life Can be Better.</h1>
                            <p>We come through for you whether you’re in the hospital, on our mobile web site, in a Banner clinic, on the phone or helping you use your health plan to the fullest..</p>
                            <a class="btn btn-dark" href="/" role="button">VIEW COLLECTION</a>
                           </div>
                   
                          </div>
                          <div className="col-md-6">
                          <img src={banner3} class="d-block slider-img" alt="..." />
                          </div>
                      </div>
                    </div>
                 
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
           
        </div>
    );
};

export default Banner;