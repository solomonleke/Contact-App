import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import NoteModal from '../Component/NoteModal';
import { UserContext } from '../Context/UserContext';





export default function Note() {

    const {Payload, setPayload} = useContext(UserContext)

    const [watch, setWatch] = useState(false)
    
    const [showTag, setShowTag] = useState(false)
    
      const [show, setShow] = useState(false);

      const handleShow = () => {
        setShow(true);
      };
    
      const handleClose = () => setShow(false);
    

   

      const handleFavorite = (index) =>{

        Payload.map((item, id)=>{
            if(id==index){
                console.log("item",item)
                item.favorite = item.favorite =="fav-selected" ? "not_favorite":"fav-selected";
                localStorage.setItem("Payload",JSON.stringify(Payload))
                setWatch(!watch)
                
            }
           
        })
    

      }

      const handleDelete = (id) =>{
       let updatedPayload = Payload
         updatedPayload.splice(id,1)
         setPayload(updatedPayload) 
         localStorage.setItem("Payload",JSON.stringify(updatedPayload))    
         setWatch(!watch)
      }

      const handleTag = (index) => {

        Payload.map((item, id)=>{
            if(id==index){
               
                item.tagTo = item.tagTo ==true ? false: true;

                localStorage.setItem("Payload",JSON.stringify(Payload))
                setWatch(!watch)
            
        
                
            }
           
        })
        
      }
      const tag = (tags, index)=> {
   
        Payload.map((item, id)=>{
            if(id==index){

                item.tag = item.tag == "" ? tags : "";
                item.tagTo = item.tagTo ==true ? false: false;
                setWatch(!watch)
                
            }
           
        })
      } 

      const updateTag = (index) =>{
        handleTag(index)
        tag(index)
      }
      
      useEffect(() => {
        
      }, [watch])

      
    
    return (
        <div>

        <div>

        <div className="main-container" id="container">
         
         
          <div id="content" className="main-content">
            <div className="layout-px-spacing">
              <div className="page-header">
                <nav className="breadcrumb-one" aria-label="breadcrumb">
                  <div className="title">
                    <h3>Notes</h3>
                  </div>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0);">Apps</a></li>
                    <li className="breadcrumb-item active" aria-current="page"><Link to="/note">Notes</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"><Link to="/">Contact</Link></li>
                  </ol>
                </nav>
                <div className="toggle-switch">
                  <label className="switch s-icons s-outline  s-outline-secondary">
                    <input type="checkbox" defaultChecked className="theme-shifter" />
                    <span className="slider round">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx={12} cy={12} r={5} /><line x1={12} y1={1} x2={12} y2={3} /><line x1={12} y1={21} x2={12} y2={23} /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1={1} y1={12} x2={3} y2={12} /><line x1={21} y1={12} x2={23} y2={12} /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                    </span>
                  </label>
                </div>
              </div>
              <div className="row app-notes layout-top-spacing" id="cancel-row">
                <div className="col-lg-12">
                  <div className="app-hamburger-container">
                    <div className="hamburger"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu chat-menu d-xl-none"><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg></div>
                  </div>
                  <div className="app-container">
                    <div className="app-note-container">
                      <div className="app-note-overlay" />
                      <div className="tab-title">
                        <div className="row">
                          <div className="col-md-12 col-sm-12 col-12 text-center">
                            <a onClick={handleShow} id="btn-add-notes" className="btn btn-primary" href="javascript:void(0);">Add</a>
                          </div>
                          <div className="col-md-12 col-sm-12 col-12 mt-5">
                            <ul className="nav nav-pills d-block" id="pills-tab3" role="tablist">
                              <li className="nav-item">
                                <a className="nav-link list-actions active" id="all-notes"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg> All Notes</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link list-actions " id="note-fav"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> Favourites</a>
                              </li>
                            </ul>
                            <hr />
                            <p className="group-section"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1={7} y1={7} x2={7} y2={7} /></svg> Tags</p>
                            <ul className="nav nav-pills d-block group-list" id="pills-tab" role="tablist">
                              <li className="nav-item">
                                <a className="nav-link list-actions g-dot-primary" id="note-personal">Personal </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link list-actions g-dot-warning" id="note-work">Work</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link list-actions g-dot-success" id="note-social">Social</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link list-actions g-dot-danger" id="note-important">Important</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>


                      <div id="ct" className="note-container note-grid">

                      {

                        Payload?.map((item, index) =>(

                            <div key={index} className={`note-item all-notes note-${item.tag}`}>
                          <div className="note-inner-content">
                            <div className="note-content">
                              <p className="note-title" data-notetitle={`${item.title}`}>{item.title}</p>
                              <p className="meta-time">{item.date}</p>
                              <div className="note-description-content">
                                <p className="note-description" data-notedescription={`${item.description}`}>{item.description}</p>
                              </div>
                            </div>
                            <div className="note-action">

                              <svg onClick={()=>handleFavorite(index)} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className ={`feather feather-star ${item.favorite} fav-note `} ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>

                              <svg onClick={()=>handleDelete(index)} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 delete-note"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg>
                            </div>

                            <div className="note-footer">
                              <div className={`tags-selector btn-group ${item.tagTo ? "show" : "" }`}>
                                <a className="nav-link dropdown-toggle d-icon label-group" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded={`${showTag}`}>
                                <div className="tags">
                                <div className="g-dot-personal" onClick={()=>updateTag(index)} />
                                <div className="g-dot-social" onClick={()=>updateTag(index)} />
                                <div className="g-dot-work" onClick={()=>updateTag(index)} />
                                <div className="g-dot-important" onClick={()=>updateTag(index)} />
                                <svg onClick={() =>handleTag(index)} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx={12} cy={12} r={1} /><circle cx={12} cy={5} r={1} /><circle cx={12} cy={19} r={1} /></svg>
                              </div>
                                </a>
                                <div className={`dropdown-menu dropdown-menu-right d-icon-menu ${item.tagTo ? "show" : "" }`}>
                                  <a className="note-personal label-group-item label-personal dropdown-item position-relative g-dot-personal" href="javascript:void(0);" onClick={()=>tag("personal", index)}>
                                   Personal</a>
                                  <a className="note-work label-group-item label-work dropdown-item position-relative g-dot-work" href="javascript:void(0);"  onClick={()=>tag("work", index)}>
                                   Work</a>
                                  <a className="note-social label-group-item label-social dropdown-item position-relative g-dot-social" href="javascript:void(0);" onClick={()=>tag("social", index)}> Social</a>
                                  <a className="note-important label-group-item label-important dropdown-item position-relative g-dot-important" href="javascript:void(0);"  onClick={()=>tag("important", index)}> Important</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        ))
                      }

                        

                        
                        
                        
                        
                        
                        
                        
                      </div>
                    </div>
                  </div>
                  {/* Modal */}

                  <NoteModal
                  show = {show}
                  close ={handleClose}
                  />

                  

                </div>
              </div>
            </div>
            <div className="footer-wrapper">
              <div className="footer-section f-section-1">
                <p className>Copyright © 2021 <a target="_blank" href="https://designreset.com/">DesignReset</a>, All rights reserved.</p>
              </div>
              <div className="footer-section f-section-2">
                <p className>Coded with <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></p>
              </div>
            </div>
          </div>
          {/*  END CONTENT AREA  */}
        </div>
        {/* END MAIN CONTAINER */}
        {/* BEGIN GLOBAL MANDATORY SCRIPTS */}
        {/* END GLOBAL MANDATORY SCRIPTS */}
        {/* BEGIN PAGE LEVEL SCRIPTS */}
        {/* END PAGE LEVEL SCRIPTS */}
        {/* Mirrored from designreset.com/cork/ltr/demo11/apps_notes.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 13 Jan 2022 00:25:21 GMT */}
      </div>
      
        </div>
    )
}
