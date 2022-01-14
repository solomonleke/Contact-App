import React from 'react'
import Button from '../Component/Button'
import GridContact from '../Component/GridContact'
import ListContact from '../Component/ListContact'

export default function GridPage() {
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
             
            <div className="row-grid">

                <GridContact/>
                <GridContact/>
                <GridContact/>
                <GridContact/>
                <GridContact/>
               
            
            </div>

              
              
           
             

              
          </div>
   
        </div>
    )
}
