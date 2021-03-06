import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DoctorsDetails = (props) => {
    const { user, logout } = useAuth();
    const { id, name, title, img, description, fee, phone, shift } = props.doctorslist;
    return (
        <div class="col">
            <div class="card h-100  shadow p-3 mb-5  rounded-3" style={{backgroundColor:"#ecf0f1"}}>
                <img src={img} class="card-img-top" alt="..." height="200px" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <small style={{ color: 'blue', marginBottom: '10px' }}>{title}</small>
                    <p> {description}</p>

                    <a class="btn btn-dark" href={`/doctorsBooked/${id}`} role="button">Book {name}</a>
                </div>
            </div>
        </div>
    );
};

export default DoctorsDetails;