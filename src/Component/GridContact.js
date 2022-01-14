import React from 'react'

export default function GridContact() {
    return (
        <div className="grid-card">
        <div className="grid-card-img">
            <img className="profile-pics" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80" alt="" />
        </div>
        <h3 className="grid-name">Andy king</h3>
        <h3 className="grid-designation" >Project lead</h3>
        <div className="row">
            <div className="col-lg-6 grid-email">Email:</div>
            <div className="col-lg-6 grid-tag">Andy@gmail.com</div>
        </div>
        <div className="row">
            <div className="col-lg-6 grid-email">Location:</div>
            <div className="col-lg-6 grid-tag">London . Abuja</div>
        </div>
        <div className="row">
            <div className="col-lg-6 grid-email">Phone</div>
            <div className="col-lg-6 grid-tag">+234568906544</div>
        </div>

     
        <div className="col-lg-12 fun-icon"><p><i className="fas fa-pencil-alt pen-grid" /><i className="fas fa-user-minus ps-2 pen-grid" /></p></div>
       
    </div>
    )
}
