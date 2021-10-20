import { faBed, faPrescriptionBottleAlt, faShuttleVan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Ourservice = () => {
    return (
        <div className="container mt-5">
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card border-0 text-light shadow-sm p-3 mb-5 bg-primary rounded  h-100">
     
      <div class="card-body ">
          <div ><FontAwesomeIcon style={{height:'50px', widows:'40px'}} icon={faBed}/></div>
        <h5 class="card-title">Over 100+ Stretcher</h5>
        <p class="card-text">A hospital is a health care institute providing patient treatment with specialized medical.</p>
        <button type="button" class="btn btn-dark">Read More</button>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div style={{backgroundColor:'#82C6F3 '}} class="card h-100 bg-success border-0 shadow-sm p-3 mb-5 rounded">
      
    <div class="card-body text-white">
          <div ><FontAwesomeIcon style={{height:'50px', widows:'40px'}} icon={faShuttleVan}/></div>
        <h5 class="card-title">24 Hours Service</h5>
        <p class="card-text">A Teaching hospital combine assistance to people with teaching to medical students and nurses</p>
        <button type="button" class="btn btn-dark">Read More</button>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card border-0 text-light shadow-sm p-3 mb-5 bg-info rounded  h-100">
     
    <div class="card-body ">
          <div ><FontAwesomeIcon style={{height:'50px', widows:'40px'}} icon={faPrescriptionBottleAlt}/></div>
        <h5 class="card-title">High Tech Equipment</h5>
        <p class="card-text">some hospitals have out patient departments and some have chronic treatment units..</p>
        <button type="button" class="btn btn-dark">Read More</button>

      </div>
      
    </div>
  </div>
  
</div>
        </div>
    );
};

export default Ourservice;