import React from 'react'
import Modal from './Modal'

export default function ListContact({img,name,designation,email, location, phone, showModal}) {
    return (
        <div className=" contact-card">
        <div className="row">
         
         
            <div className="col-lg-4"> 
                <div className="row">
                    <div className="col-lg-4">
                    <input className="checkbox" type="checkbox" />  <img className="contact-img" src={img} alt="" />
                    </div>
                    <div className="col-lg-8">
                        <p className="contact-name">{name}</p>
                        <p className="contact-designation">{designation}</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-2"><h2 className="contact-text">{email}</h2></div>
            <div className="col-lg-2"><h2 className="contact-text">{location}</h2></div>
            <div className="col-lg-2"><h2 className="contact-text">{phone}</h2></div>
            <div className="col-lg-2">
                <div className="row">
                   
                    <div className="col-lg-12 fun-icon"><p><i onClick={showModal} data-bs-toggle="modal" data-bs-target="#exampleModal"  className="fas fa-pencil-alt pen trash" /><i className="fas fa-user-minus  trash" /></p></div>
                </div>
            </div>
        </div>
        <div id='myModal'>
            <Modal/>
        </div>
    </div>
    )
}
