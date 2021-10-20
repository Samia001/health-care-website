import React from 'react';
import footerlogo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div>
            <div style={{backgroundColor:"#212529", height:"100%", overflow:"hidden", marginTop:"90px"}}>
<div className="container">
    <div className="row">
    <div className="col-md-6 ">
        <img styly={{ width:"15px"}} src={footerlogo} alt="" />
        <hr style={{color:"#395A7D", width:"50%"}}/>
        <p style={{color:"#395A7D",marginTop:"30%"}}>Copyright © 2021 Health Care Service.All Rights Reserved.</p>

    </div>
    <div className="col-md-6 mt-5">
        <div className="row">
        <div className="col-md-6 text-white">
            <p>Pay Your Bill Online </p>
            <p>Refer a Patient</p>
            <p> Privecy Policy</p>
            <p>Send Us Feed back</p>
            <hr />
        </div>
        <div className="col-md-6 text-white">
            <p>Get help</p>
            <p>Read FAQs</p>
            <p>Newsroom</p>
            <p>Health Essentials</p>
            <hr />
        </div>
        </div>
    </div>
    </div>
</div>

</div>
        </div>
    );
};

export default Footer;