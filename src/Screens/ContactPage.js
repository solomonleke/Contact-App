import React from 'react'
import Button from '../Component/Button'
import ListContact from '../Component/ListContact'

export default function ContactPage() {
  const showModal = () =>{
    document.getElementById("myModal").style.display = "block"
  }
    return (
        <div>
          <div className="container">
                <div className="my-nav">
                  <h1>Contacts <span>| Apps . contacts</span></h1>
                </div>

                <div className="row nav-row">
                  <div className="col-lg-5 ">
                    <input type="text" className="search" placeholder='Search Contacts'/>
                    <i className="fas fa-search search-icon" />

                  </div>

                  <div className="col-lg-4"></div>

                  <Button
                    btn_style= "contact-btn btn-1 "
                    btn_icon= "fas fa-user-plus icon1"
                    link = "/wde"
                    />
                    <Button
                    btn_style= "contact-btn btn-2"
                    btn_icon= "fas fa-list icon2"
                    link = "/"
                    />
                    <Button
                    btn_style= "contact-btn"
                    btn_icon= "fas fa-th-large icon3"
                    link = "/gridCard"
                  />

                
                </div>
                <div className=" head-card">
                <div className="row">
                 
                    <div className="col-lg-4"> <h2 className="title">  <input className="checkbox" type="checkbox" />Name</h2></div>
                    <div className="col-lg-2"><h2 className="title">Email</h2></div>
                    <div className="col-lg-2"><h2 className="title">Location</h2></div>
                    <div className="col-lg-2"><h2 className="title">Phone</h2></div>
                    <div className="col-lg-2"><p><i className="fas fa-trash-alt trash" /></p>   </div>
                </div>
              
            </div>

              <ListContact
                img = "https://designreset.com/cork/ltr/demo11/assets/img/profile-5.jpeg"
                name = "Adeleke Solomon"
                designation= "Project Lead"
                email = "lordsoliz@gmail.com"
                location= "Lagos. Nigeria"
                phone = "+23448165413816"
                showModal={showModal}
              />

           
              <ListContact
                img = "https://designreset.com/cork/ltr/demo11/assets/img/profile-8.jpeg"
                name = "Collins Aboki"
                designation= "Project Lead"
                email = "lordsoliz@gmail.com"
                location= "Lagos. Nigeria"
                phone = "+23448165413816"
                showModal={showModal}
              />

           
             

              
          </div>
   
        </div>
    )
}
