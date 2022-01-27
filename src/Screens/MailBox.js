import React, { useState } from 'react';

function MailBox() {
    

    // const[mail, setMail] = useState(false)
    const[watch, setWatch] = useState("table")


    const handleNewMail = ()=>{
        // setMail(true)
    }

    const handleClose = ()=>{
        setWatch("table")
    }



  return (
    

    {
        watch == "table"

    }
<div className="main-container" id="container">
  <div className="overlay" />
  <div className="search-overlay" />
  {/*  BEGIN CONTENT AREA  */}
  <div id="content" className="main-content">
    <div className="layout-px-spacing">
      <div className="page-header">
        <nav className="breadcrumb-one" aria-label="breadcrumb">
          <div className="title">
            <h3>Mailbox</h3>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="javascript:void(0);">Apps</a></li>
            <li className="breadcrumb-item active" aria-current="page"><a href="javascript:void(0);">Mailbox</a></li>
          </ol>
        </nav>
        <div className="toggle-switch">
          <label className="switch s-icons s-outline  s-outline-secondary">
            <input type="checkbox" defaultChecked className="theme-shifter check" />
            <span className="slider round">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx={12} cy={12} r={5} /><line x1={12} y1={1} x2={12} y2={3} /><line x1={12} y1={21} x2={12} y2={23} /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1={1} y1={12} x2={3} y2={12} /><line x1={21} y1={12} x2={23} y2={12} /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            </span>
          </label>
        </div>
      </div>
      <div className="row layout-top-spacing">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="row">
            <div className="col-xl-12  col-md-12">
              <div className="mail-box-container">
                <div className="mail-overlay" />
                <div className="tab-title">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-12 text-center mail-btn-container" >
                      <a id="btn-compose-mail" className="btn btn-block" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"  data-bs-toggle="modal" data-bs-target="#composeMailModal" onClick={handleNewMail}><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg></a>
                    </div>
                    <div className="col-md-12 col-sm-12 col-12 mail-categories-container">
                      <div className="mail-sidebar-scroll">
                        <ul className="nav nav-pills d-block" id="pills-tab" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link list-actions active" id="mailInbox"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg> <span className="nav-names">Inbox</span> <span className="mail-badge badge" /></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions" id="important"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> <span className="nav-names">Important</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions" id="draft"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg> <span className="nav-names">Draft</span> <span className="mail-badge badge" /></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions" id="sentmail"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1={22} y1={2} x2={11} y2={13} /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg> <span className="nav-names"> Sent Mail</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions" id="spam"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-circle"><circle cx={12} cy={12} r={10} /><line x1={12} y1={8} x2={12} y2={12} /><line x1={12} y1={16} x2={12} y2={16} /></svg> <span className="nav-names">Spam</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions" id="trashed"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg> <span className="nav-names">Trash</span></a>
                          </li>
                        </ul>
                        <p className="group-section"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1={7} y1={7} x2={7} y2={7} /></svg> Groups</p>
                        <ul className="nav nav-pills d-block group-list" id="pills-tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link list-actions active g-dot-primary" id="personal"><span>Personal</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions g-dot-warning" id="work"><span>Work</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions g-dot-success" id="social"><span>Social</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions g-dot-danger" id="private"><span>Private</span></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="mailbox-inbox" className="accordion mailbox-inbox">
                  <div className="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu mail-menu d-lg-none"><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg>
                    <input type="text" className="form-control input-search" placeholder="Search Here..." />
                  </div>
                  <div className="action-center">
                    <div className>
                      <div className="n-chk">
                        <label className="new-control new-checkbox checkbox-primary">
                          <input type="checkbox" className="new-control-input" id="inboxAll" />
                          <span className="new-control-indicator" /><span>Check All</span>
                        </label>
                      </div>
                    </div>
                    <div className>
                      <a className="nav-link dropdown-toggle d-icon label-group" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" data-toggle="tooltip" data-placement="top" data-original-title="Label" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg></a>
                      <div className="dropdown-menu dropdown-menu-right d-icon-menu">
                        <a className="label-group-item label-personal dropdown-item position-relative g-dot-primary" href="javascript:void(0);"> Personal</a>
                        <a className="label-group-item label-work dropdown-item position-relative g-dot-warning" href="javascript:void(0);"> Work</a>
                        <a className="label-group-item label-social dropdown-item position-relative g-dot-success" href="javascript:void(0);"> Social</a>
                        <a className="label-group-item label-private dropdown-item position-relative g-dot-danger" href="javascript:void(0);"> Private</a>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" data-toggle="tooltip" data-placement="top" data-original-title="Important" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star action-important"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-toggle="tooltip" data-placement="top" data-original-title="Spam" className="feather feather-alert-circle action-spam"><circle cx={12} cy={12} r={10} /><line x1={12} y1={8} x2={12} y2={12} /><line x1={12} y1={16} x2={12} y2={16} /></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" data-toggle="tooltip" data-placement="top" data-original-title="Revive Mail" strokeLinejoin="round" className="feather feather-activity revive-mail"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-toggle="tooltip" data-placement="top" data-original-title="Delete Permanently" className="feather feather-trash permanent-delete"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                      <div className="dropdown d-inline-block more-actions">
                        <a className="nav-link dropdown-toggle" id="more-actions-btns-dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx={12} cy={12} r={1} /><circle cx={12} cy={5} r={1} /><circle cx={12} cy={19} r={1} /></svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="more-actions-btns-dropdown">
                          <a className="dropdown-item action-mark_as_read" href="javascript:void(0);">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg> Mark as Read
                          </a>
                          <a className="dropdown-item action-mark_as_unRead" href="javascript:void(0);">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> Mark as Unread
                          </a>
                          <a className="dropdown-item action-delete" href="javascript:void(0);">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-toggle="tooltip" data-placement="top" data-original-title="Delete" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg> Trash
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-box">
                    <div className="message-box-scroll" id="ct">      
                      <div id="unread-verification-link-new" className="mail-item mailInbox">
                        <div className="animated animatedFadeInUp fadeInUp" id="mailHeadingSixteen">
                          <div className="mb-0">
                            <div className="mail-item-heading personal collapsed" data-toggle="collapse" role="navigation" data-target="#mailCollapseSixteen" aria-expanded="false">
                            <div className="mail-item-inner">
                                <div className="d-flex">
                                <label className="new-control new-checkbox checkbox-primary"><input type="checkbox" className="new-control-input" /><span className="new-control-indicator" /><span /></label>

                                  <div className="f-body">
                                    <div className="meta-mail-time">
                                      <p className="user-email" data-mailto="alan@mail.com">Alan</p>
                                    </div>
                                    <div className="meta-title-tag">
                                      <p className="mail-content-excerpt" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"><span className="mail-title" data-mailtitle="Mozilla Update">Mozilla Update - </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>
                                      <div className="tags">
                                        <span className="g-dot-primary" />
                                        <span className="g-dot-warning" />
                                        <span className="g-dot-success" />
                                        <span className="g-dot-danger" />
                                      </div>
                                      <p className="meta-time align-self-center">8:45 AM</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>                    
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="d-flex msg-close">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left close-message"><line x1={19} y1={12} x2={5} y2={12} /><polyline points="12 19 5 12 12 5" /></svg>
                      <h2 className="mail-title" data-selectedmailtitle />
                    </div>               

                  </div>
                </div>
              </div>

              {/* Modal */}

              <div className="modal fade" id="composeMailModal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x close" data-dismiss="modal" onClick={handleClose}><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                      <div className="compose-box">
                        <div className="compose-content">
                          <form>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="d-flex mb-4 mail-form">
                                  <p>From:</p>
                                  <select className id="m-form">
                                    <option value="info@mail.com">Info &lt;info@jeanicks.com&gt;</option>
                                    <option value="shaun@mail.com">Personal &lt;goddammy@mail.com&gt;</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="d-flex mb-4 mail-to">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                                  <div className>
                                    <input type="email" id="m-to" placeholder="To" className="form-control" />
                                    <span className="validation-text" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="d-flex mb-4 mail-cc">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-list"><line x1={8} y1={6} x2={21} y2={6} /><line x1={8} y1={12} x2={21} y2={12} /><line x1={8} y1={18} x2={21} y2={18} /><line x1={3} y1={6} x2={3} y2={6} /><line x1={3} y1={12} x2={3} y2={12} /><line x1={3} y1={18} x2={3} y2={18} /></svg>
                                  <div>
                                    <input type="text" id="m-cc" placeholder="Cc" className="form-control" />
                                    <span className="validation-text" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex mb-4 mail-subject">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                              <div className="w-100">
                                <input type="text" id="m-subject" placeholder="Subject" className="form-control" />
                                <span className="validation-text" />
                              </div>
                            </div>
                            <div className="d-flex">
                              <input type="file" className="form-control-file" id="mail_File_attachment" multiple="multiple" />
                            </div>
                            <div id="editor-container">
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button id="btn-save" className="btn float-left"> Save</button>
                      <button id="btn-reply-save" className="btn float-left"> Save Reply</button>
                      <button id="btn-fwd-save" className="btn float-left"> Save Fwd</button>
                      <button className="btn" data-dismiss="modal"> <i className="flaticon-delete-1" /> Discard</button>
                      <button id="btn-reply" className="btn"> Reply</button>
                      <button id="btn-fwd" className="btn"> Forward</button>
                      <button id="btn-send" className="btn"> Send</button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
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
  )
}

export default MailBox;
