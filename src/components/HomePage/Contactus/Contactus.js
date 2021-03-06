import { faSimplybuilt } from '@fortawesome/free-brands-svg-icons';
import { faPenSquare, faPhone, faPowerOff, faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import mapimg from '../../../images/map.jpg'

const Contactus = () => {
    const contactStyle = {
        backgroundImage: `url(${mapimg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',

    }
    return (
        <div className="mt-5">
            <h1 className="text-center">CONTUCT US</h1>
           <div className="container" style={contactStyle}>
               <div className="row">
                   <div className="col-md-6">
                       <div className="shadow-lg p-3 mb-5 bg-body rounded mt-5 m-5">
                       <h3 className="text-center">CONTACT</h3>
                       <p><FontAwesomeIcon icon={faSimplybuilt}/>  health-care-service@gmail.com</p>
                       <p><FontAwesomeIcon icon={faPhone}/> +216442200</p>
                       <p><FontAwesomeIcon icon={faPenSquare}/>  Airasel.ml</p>
                       <p><FontAwesomeIcon icon={faStoreAlt}/>  33 Grosvenor Place London,SW1X 7HY</p>
                       <p><FontAwesomeIcon icon={faPowerOff}/>  Mon-Sun 9.00 Am - 12.00 Am</p>
                       </div>

                   </div>
                   <div className="col-md-6">

                   </div>
               </div>

           </div>
        </div>
    );
};

export default Contactus;