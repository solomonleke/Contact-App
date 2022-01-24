import React, { useState } from 'react'

export default function InvoiceAdd() {

    const [data, setData] = useState({
        "picture":"",
        "from_name":"",
        "from_email":"",
        "from_address":"",
        "from_phone":"",
        bill:"",
        "bill_name":"",
        "bill_phone":"",
        "invoice_label":"",
        "currency":"",
        "invoice_no":"",
        "due_date":"",
        "items":[{
            "description":"",
            "details":"",
            "price":0,
            "qty":0,
            "amount":0,
        },{
            "description":"",
            "details":"",
            "price":0,
            "qty":0,
            "amount":0,
        }],
        "acct_no":"",
        "acct_name":"",
        "swift":"",
        "country":"",
        "notes":""
    })
    return (
        <div>
  <div className="header-container">
    <header className="header navbar navbar-expand-sm">
      <a href="javascript:void(0);" className="sidebarCollapse" data-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg></a>
      <div className="nav-logo align-self-center">
        <a className="navbar-brand" href="index.html"><img alt="logo" src="assets/img/logo2.svg" /> <span className="navbar-brand-name">CORK</span></a>
      </div>
      <ul className="navbar-item topbar-navigation">
        {/*  BEGIN TOPBAR  */}
        <div className="topbar-nav header navbar" role="banner">
          <nav id="topbar">
            <ul className="navbar-nav theme-brand flex-row  text-center">
              <li className="nav-item theme-logo">
                <a href="index.html">
                  <img src="assets/img/logo2.svg" className="navbar-logo" alt="logo" />
                </a>
              </li>
              <li className="nav-item theme-text">
                <a href="index.html" className="nav-link"> CORK </a>
              </li>
            </ul>
            <ul className="list-unstyled menu-categories" id="topAccordion">
              <li className="menu single-menu">
                <a href="#dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle autodroprown">
                  <div className>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                    <span>Dashboard</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <ul className="collapse submenu list-unstyled animated fadeInUp" id="dashboard" data-parent="#topAccordion">
                  <li>
                    <a href="index.html"> Sales </a>
                  </li>
                  <li>
                    <a href="index2.html"> Analytics </a>
                  </li>
                </ul>
              </li>
              <li className="menu single-menu active">
                <a href="#app" data-toggle="collapse" aria-expanded="true" className="dropdown-toggle">
                  <div className>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-cpu"><rect x={4} y={4} width={16} height={16} rx={2} ry={2} /><rect x={9} y={9} width={6} height={6} /><line x1={9} y1={1} x2={9} y2={4} /><line x1={15} y1={1} x2={15} y2={4} /><line x1={9} y1={20} x2={9} y2={23} /><line x1={15} y1={20} x2={15} y2={23} /><line x1={20} y1={9} x2={23} y2={9} /><line x1={20} y1={14} x2={23} y2={14} /><line x1={1} y1={9} x2={4} y2={9} /><line x1={1} y1={14} x2={4} y2={14} /></svg>
                    <span>Apps</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <ul className="collapse submenu list-unstyled animated fadeInUp" id="app" data-parent="#topAccordion">
                  <li>
                    <a href="apps_chat.html"> Chat </a>
                  </li>
                  <li>
                    <a href="apps_mailbox.html"> Mailbox </a>
                  </li>
                  <li>
                    <a href="apps_todoList.html"> Todo List </a>
                  </li>
                  <li>
                    <a href="apps_notes.html">Notes</a>
                  </li>
                  <li>
                    <a href="apps_scrumboard.html">Task Board</a>
                  </li>
                  <li>
                    <a href="apps_contacts.html">Contacts</a>
                  </li>
                  <li className="sub-sub-submenu-list active">
                    <a href="#appInvoice" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Invoice <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                    <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="appInvoice" data-parent="#appInvoice">
                      <li>
                        <a href="apps_invoice-list.html"> List </a>
                      </li>
                      <li>
                        <a href="apps_invoice-preview.html"> Preview </a>
                      </li>
                      <li className="active">
                        <a href="apps_invoice-add.html"> Add </a>
                      </li>
                      <li>
                        <a href="apps_invoice-edit.html"> Edit </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="apps_calendar.html"> Calendar</a>
                  </li>
                </ul>
              </li>
              <li className="menu single-menu">
                <a href="#components" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  <div className>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1={12} y1="22.08" x2={12} y2={12} /></svg>
                    <span>Components</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <ul className="collapse submenu list-unstyled animated fadeInUp" id="components" data-parent="#topAccordion">
                  <li className="sub-sub-submenu-list">
                    <a href="#uiKit" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> UI Kit <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                    <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="uiKit" data-parent="#components">
                      <li>
                        <a href="ui_alerts.html"> Alerts </a>
                      </li>
                      <li>
                        <a href="ui_avatar.html"> Avatar </a>
                      </li>
                      <li>
                        <a href="ui_badges.html"> Badges </a>
                      </li>
                      <li>
                        <a href="ui_breadcrumbs.html"> Breadcrumbs </a>
                      </li>                            
                      <li>
                        <a href="ui_buttons.html"> Buttons </a>
                      </li>
                      <li>
                        <a href="ui_buttons_group.html"> Button Groups </a>
                      </li>
                      <li>
                        <a href="ui_color_library.html"> Color Library </a>
                      </li>
                      <li>
                        <a href="ui_dropdown.html"> Dropdown </a>
                      </li>
                      <li>
                        <a href="ui_infobox.html"> Infobox </a>
                      </li>
                      <li>
                        <a href="ui_jumbotron.html"> Jumbotron </a>
                      </li>
                      <li>
                        <a href="ui_loader.html"> Loader </a>
                      </li>
                      <li>
                        <a href="ui_pagination.html"> Pagination </a>
                      </li>
                      <li>
                        <a href="ui_popovers.html"> Popovers </a>
                      </li>
                      <li>
                        <a href="ui_progress_bar.html"> Progress Bar </a>
                      </li>
                      <li>
                        <a href="ui_search.html"> Search </a>
                      </li>
                      <li>
                        <a href="ui_tooltips.html"> Tooltips </a>
                      </li>
                      <li>
                        <a href="ui_treeview.html"> Treeview </a>
                      </li>
                      <li>
                        <a href="ui_typography.html"> Typography </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="component_tabs.html"> Tabs </a>
                  </li>
                  <li>
                    <a href="component_accordion.html"> Accordions</a>
                  </li>
                  <li>
                    <a href="component_modal.html"> Modals </a>
                  </li>                            
                  <li>
                    <a href="component_cards.html"> Cards </a>
                  </li>
                  <li>
                    <a href="component_bootstrap_carousel.html">Carousel</a>
                  </li>
                  <li>
                    <a href="component_blockui.html"> Block UI </a>
                  </li>
                  <li>
                    <a href="component_countdown.html"> Countdown </a>
                  </li>
                  <li>
                    <a href="component_counter.html"> Counter </a>
                  </li>
                  <li>
                    <a href="component_sweetalert.html"> Sweet Alerts </a>
                  </li>
                  <li>
                    <a href="component_timeline.html"> Timeline </a>
                  </li>
                  <li>
                    <a href="component_snackbar.html"> Notifications </a>
                  </li>
                  <li>
                    <a href="component_session_timeout.html"> Session Timeout </a>
                  </li>
                  <li>
                    <a href="component_media_object.html"> Media Object </a>
                  </li>
                  <li>
                    <a href="component_list_group.html"> List Group </a>
                  </li>
                  <li>
                    <a href="component_pricing_table.html"> Pricing Tables </a>
                  </li>
                  <li>
                    <a href="component_lightbox.html"> Lightbox </a>
                  </li>
                </ul>
              </li>
              <li className="menu single-menu">
                <a href="#tables" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  <div className>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-layout"><rect x={3} y={3} width={18} height={18} rx={2} ry={2} /><line x1={3} y1={9} x2={21} y2={9} /><line x1={9} y1={21} x2={9} y2={9} /></svg>
                    <span>Tables</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <ul className="collapse submenu list-unstyled animated fadeInUp" id="tables" data-parent="#topAccordion">
                  <li>
                    <a href="table_basic.html"> Basic </a>
                  </li>
                  <li className="sub-sub-submenu-list">
                    <a href="#datatable" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> DataTables <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                    <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="datatable" data-parent="#datatable">
                      <li>
                        <a href="table_dt_basic.html"> Basic </a>
                      </li>
                      <li>
                        <a href="table_dt_striped_table.html"> Striped Table </a>
                      </li>
                      <li>
                        <a href="table_dt_ordering_sorting.html"> Order Sorting </a>
                      </li>
                      <li>
                        <a href="table_dt_multi-column_ordering.html"> Multi-Column </a>
                      </li>
                      <li>
                        <a href="table_dt_multiple_tables.html"> Multiple Tables</a>
                      </li>
                      <li>
                        <a href="table_dt_alternative_pagination.html"> Alt. Pagination</a>
                      </li>
                      <li>
                        <a href="table_dt_custom.html"> Custom </a>
                      </li>
                      <li>
                        <a href="table_dt_range_search.html"> Range Search </a>
                      </li>
                      <li>
                        <a href="table_dt_html5.html"> HTML5 Export </a>
                      </li>
                      <li>
                        <a href="table_dt_live_dom_ordering.html"> Live DOM ordering </a>
                      </li>
                      <li>
                        <a href="table_dt_miscellaneous.html"> Miscellaneous </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu single-menu">
                <a href="#forms" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  <div className>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x={8} y={2} width={8} height={4} rx={1} ry={1} /></svg>
                    <span>Forms</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <ul className="collapse submenu list-unstyled animated fadeInUp" id="forms" data-parent="#topAccordion">
                  <li>
                    <a href="form_bootstrap_basic.html"> Basic </a>
                  </li>
                  <li>
                    <a href="form_input_group_basic.html"> Input Group </a>
                  </li>
                  <li>
                    <a href="form_layouts.html"> Layouts </a>
                  </li>
                  <li>
                    <a href="form_validation.html"> Validation </a>
                  </li>
                  <li>
                    <a href="form_input_mask.html"> Input Mask </a>
                  </li>
                  <li>
                    <a href="form_bootstrap_select.html"> Bootstrap Select </a>
                  </li>
                  <li>
                    <a href="form_select2.html"> Select2 </a>
                  </li>
                  <li>
                    <a href="form_bootstrap_touchspin.html"> TouchSpin </a>
                  </li>
                  <li>
                    <a href="form_maxlength.html"> Maxlength </a>
                  </li>
                  <li>
                    <a href="form_checkbox_radio.html"> Checkbox &amp; Radio </a>
                  </li>
                  <li>
                    <a href="form_switches.html"> Switches </a>
                  </li>
                  <li>
                    <a href="form_wizard.html"> Wizards </a>
                  </li>
                  <li>
                    <a href="form_fileupload.html"> File Upload </a>
                  </li>
                  <li>
                    <a href="form_quill.html"> Quill Editor </a>
                  </li>
                  <li>
                    <a href="form_markdown.html"> Markdown Editor </a>
                  </li>
                  <li>
                    <a href="form_date_range_picker.html"> Date &amp; Range Picker </a>
                  </li>
                  <li>
                    <a href="form_clipboard.html"> Clipboard </a>
                  </li>
                  <li>
                    <a href="form_typeahead.html"> Typeahead </a>
                  </li>
                </ul>
              </li>
              <li className="menu single-menu menu-extras">
                <a href="#more" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                  <div className>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg> <span className="d-xl-none">More</span></span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                </a>
                <ul className="collapse submenu list-unstyled animated fadeInUp" id="more" data-parent="#topAccordion">
                  <li className="sub-sub-submenu-list">
                    <a href="#page" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Pages <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                    <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="page" data-parent="#more">
                      <li>
                        <a href="pages_helpdesk.html"> Helpdesk </a>
                      </li>
                      <li>
                        <a href="pages_contact_us.html"> Contact Form </a>
                      </li>
                      <li>
                        <a href="pages_faq.html"> FAQ </a>
                      </li>
                      <li>
                        <a href="pages_faq2.html"> FAQ 2 </a>
                      </li>
                      <li>
                        <a href="pages_privacy.html"> Privacy Policy </a>
                      </li>
                      <li>
                        <a href="pages_coming_soon.html" target="_blank"> Coming Soon </a>
                      </li>
                      <li>
                        <a href="user_profile.html"> Profile </a>
                      </li>
                      <li>
                        <a href="user_account_setting.html"> Account Settings </a>
                      </li>
                      <li className="sub-sub-submenu-list">
                        <a href="#pages-error" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Error <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                        <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="pages-error" data-parent="#page"> 
                          <li>
                            <a href="pages_error404.html" target="_blank"> 404 </a>
                          </li>
                          <li>
                            <a href="pages_error500.html" target="_blank"> 500 </a>
                          </li>
                          <li>
                            <a href="pages_error503.html" target="_blank"> 503 </a>
                          </li>
                          <li>
                            <a href="pages_maintenence.html" target="_blank"> Maintanence </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-sub-submenu-list">
                        <a href="#user-login" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Login <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                        <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="user-login" data-parent="#page"> 
                          <li>
                            <a href="auth_login.html" target="_blank"> Login </a>
                          </li>
                          <li>
                            <a href="auth_login_boxed.html" target="_blank"> Login Boxed </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-sub-submenu-list">
                        <a href="#user-register" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Register <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                        <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="user-register" data-parent="#page"> 
                          <li>
                            <a href="auth_register.html" target="_blank"> Register </a>
                          </li>
                          <li>
                            <a href="auth_register_boxed.html" target="_blank"> Register Boxed </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-sub-submenu-list">
                        <a href="#user-passRecovery" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Password Recovery <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                        <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="user-passRecovery" data-parent="#page"> 
                          <li>
                            <a href="auth_pass_recovery.html" target="_blank"> Recover ID </a>
                          </li>
                          <li>
                            <a href="auth_pass_recovery_boxed.html" target="_blank"> Recover ID Boxed </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sub-sub-submenu-list">
                        <a href="#user-lockscreen" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Lockscreen <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                        <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="user-lockscreen" data-parent="#page"> 
                          <li>
                            <a href="auth_lockscreen.html" target="_blank"> Unlock </a>
                          </li>
                          <li>
                            <a href="auth_lockscreen_boxed.html" target="_blank"> Unlock Boxed </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="dragndrop_dragula.html"> Drag and Drop</a>
                  </li>
                  <li>
                    <a href="widgets.html"> Widgets </a>
                  </li>
                  <li>
                    <a href="map_jvector.html"> Vector Maps</a>
                  </li>
                  <li>
                    <a href="charts_apex.html"> Charts </a>
                  </li>
                  <li>
                    <a href="fonticons.html"> Font Icons </a>
                  </li>
                  <li className="sub-sub-submenu-list">
                    <a href="#starter-kit" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> Starter Kit <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg> </a>
                    <ul className="collapse list-unstyled sub-submenu animated fadeInUp" id="starter-kit" data-parent="#more">
                      <li>
                        <a href="starter_kit_blank_page.html"> Blank Page </a>
                      </li>
                      <li>
                        <a href="starter_kit_boxed.html"> Boxed </a>
                      </li>
                      <li>
                        <a href="starter_kit_breadcrumb.html"> Breadcrumb </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a target="_blank" href="https://designreset.com/cork/documentation/index.html"> Documentation </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        {/*  END TOPBAR  */}
      </ul>
      <ul className="navbar-item flex-row ml-auto">
        <li className="nav-item align-self-center search-animated">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search toggle-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
          <form className="form-inline search-full form-inline search" role="search">
            <div className="search-bar">
              <input type="text" className="form-control search-form-control  ml-lg-auto" placeholder="Search..." />
            </div>
          </form>
        </li>
      </ul>
      <ul className="navbar-item flex-row nav-dropdowns">
        <li className="nav-item dropdown language-dropdown more-dropdown">
          <div className="dropdown custom-dropdown-icon">
            <a className="dropdown-toggle btn" href="#" role="button" id="customDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/img/ca.png" className="flag-width" alt="flag" />
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="customDropdown">
              <div className="search-dropdown">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <a className="dropdown-item" data-img-value="de" data-value="de" href="javascript:void(0);"><img src="assets/img/de.png" className="flag-width" alt="flag" /> German</a>
              <a className="dropdown-item" data-img-value="jp" data-value="jp" href="javascript:void(0);"><img src="assets/img/jp.png" className="flag-width" alt="flag" /> Japanese</a>
              <a className="dropdown-item" data-img-value="fr" data-value="fr" href="javascript:void(0);"><img src="assets/img/fr.png" className="flag-width" alt="flag" /> French</a>
              <a className="dropdown-item" data-img-value="ca" data-value="en" href="javascript:void(0);"><img src="assets/img/ca.png" className="flag-width" alt="flag" /> English</a>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown message-dropdown">
          <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="messageDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg><span className="badge badge-success" />
          </a>
          <div className="dropdown-menu p-0 position-absolute" aria-labelledby="messageDropdown">
            <div className="dropdown-menu-title">
              <h5>Messages</h5>
            </div>
            <div className>
              <a className="dropdown-item unseen-msg">
                <div className>
                  <div className="media">
                    <div className="user-img">
                      <div className="avatar avatar-xl">
                        <img src="assets/img/profile-15.jpg" alt="admin-profile" />
                      </div>
                    </div>
                    <div className="media-body">
                      <div className>
                        <h5 className="usr-name">Kara Young</h5>
                        <p className="msg-title">ACCOUNT UPDATE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a className="dropdown-item">
                <div className>
                  <div className="media">
                    <div className="user-img">
                      <div className="avatar avatar-xl">
                        <span className="avatar-title rounded-circle">DA</span>
                      </div>
                    </div>
                    <div className="media-body">
                      <div className>
                        <h5 className="usr-name">Daisy Anderson</h5>
                        <p className="msg-title">ACCOUNT UPDATE</p>
                      </div>
                    </div>
                  </div>                                    
                </div>
              </a>
              <a className="dropdown-item unseen-msg">
                <div className>
                  <div className="media">
                    <div className="user-img">
                      <div className="avatar avatar-xl">
                        <img src="assets/img/profile-3.jpg" alt="admin-profile" />
                      </div>
                    </div>
                    <div className="media-body">
                      <div className>
                        <h5 className="usr-name">Oscar Garner</h5>
                        <p className="msg-title">ACCOUNT UPDATE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown notification-dropdown">
          <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg><span className="badge badge-success" />
          </a>
          <div className="dropdown-menu position-absolute" aria-labelledby="notificationDropdown">
            <div className="notification-scroll">
              <div className="dropdown-item">
                <div className="media server-log">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-server"><rect x={2} y={2} width={20} height={8} rx={2} ry={2} /><rect x={2} y={14} width={20} height={8} rx={2} ry={2} /><line x1={6} y1={6} x2={6} y2={6} /><line x1={6} y1={18} x2={6} y2={18} /></svg>
                  <div className="media-body">
                    <div className="data-info">
                      <h6 className>Server Rebooted</h6>
                      <p className>45 min ago</p>
                    </div>
                    <div className="icon-status">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="media ">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  <div className="media-body">
                    <div className="data-info">
                      <h6 className>Licence Expiring Soon</h6>
                      <p className>8 hrs ago</p>
                    </div>
                    <div className="icon-status">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown-item">
                <div className="media file-upload">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg>
                  <div className="media-body">
                    <div className="data-info">
                      <h6 className>Kelly Portfolio.pdf</h6>
                      <p className>670 kb</p>
                    </div>
                    <div className="icon-status">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown user-profile-dropdown order-lg-0 order-1">
          <a href="javascript:void(0);" className="nav-link dropdown-toggle user" id="user-profile-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="media">
              <img src="assets/img/profile-7.jpg" className="img-fluid" alt="admin-profile" />
            </div>
          </a>
          <div className="dropdown-menu position-absolute" aria-labelledby="userProfileDropdown">
            <div className="user-profile-section">
              <div className="media mx-auto">
                <div className="media-body">
                  <h5>Shaun Park</h5>
                  <p>Project Leader</p>
                </div>
              </div>
            </div>
            <div className="dropdown-item">
              <a href="user_profile.html">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> <span>Profile</span>
              </a>
            </div>
            <div className="dropdown-item">
              <a href="apps_mailbox.html">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg> <span>Inbox</span>
              </a>
            </div>
            <div className="dropdown-item">
              <a href="auth_lockscreen.html">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg> <span>Lock Screen</span>
              </a>
            </div>
            <div className="dropdown-item">
              <a href="auth_login.html">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1={21} y1={12} x2={9} y2={12} /></svg> <span>Log Out</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </header>
  </div>
  {/*  END NAVBAR  */}
  {/*  BEGIN MAIN CONTAINER  */}
  <div className="main-container" id="container">
    <div className="overlay" />
    <div className="search-overlay" />
    {/*  BEGIN CONTENT AREA  */}
    <div id="content" className="main-content">
      <div className="layout-px-spacing">
        <div className="page-header">
          <nav className="breadcrumb-one" aria-label="breadcrumb">
            <div className="title">
              <h3>Add</h3>
            </div>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="javascript:void(0);">Apps</a></li>
              <li className="breadcrumb-item"><a href="javascript:void(0);">Invoice</a></li>
              <li className="breadcrumb-item active" aria-current="page"><a href="javascript:void(0);">Add</a></li>
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
        <div className="row invoice layout-top-spacing layout-spacing">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="doc-container">
              <div className="row">
                <div className="col-xl-9">
                  <div className="invoice-content">
                    <div className="invoice-detail-body">
                      <div className="invoice-detail-title">
                        <div className="invoice-logo">
                          <div className="upload">
                            <input type="file" id="input-file-max-fs" className="dropify" data-max-file-size="2M" />
                          </div>
                        </div>
                        <div className="invoice-title">
                          <input type="text" className="form-control" placeholder="Invoice Label" defaultValue="Invoice Label" />
                        </div>
                      </div>
                      <div className="invoice-detail-header">
                        <div className="row justify-content-between">
                          <div className="col-xl-5 invoice-address-company">
                            <h4>From:-</h4>
                            <div className="invoice-address-company-fields">
                              <div className="form-group row">
                                <label htmlFor="company-name" className="col-sm-3 col-form-label col-form-label-sm">Name</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control form-control-sm" id="company-name" placeholder="Business Name" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="company-email" className="col-sm-3 col-form-label col-form-label-sm">Email</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control form-control-sm" id="company-email" placeholder="name@company.com" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="company-address" className="col-sm-3 col-form-label col-form-label-sm">Address</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control form-control-sm" id="company-address" placeholder="XYZ Street" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="company-phone" className="col-sm-3 col-form-label col-form-label-sm">Phone</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control form-control-sm" id="company-phone" placeholder="(123) 456 789" />
                                </div>
                              </div>                                                                
                            </div>
                          </div>
                          <div className="col-xl-5 invoice-address-client">
                            <h4>Bill To:-</h4>
                            <div className="invoice-address-client-fields">
                              <div className="form-group row">
                                <label htmlFor="client-name" className="col-sm-3 col-form-label col-form-label-sm">Name</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control form-control-sm" id="client-name" placeholder="Client Name" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="client-email" className="col-sm-3 col-form-label col-form-label-sm">Email</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control form-control-sm" id="client-email" placeholder="name@company.com" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="client-address" className="col-sm-3 col-form-label col-form-label-sm">Address</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control form-control-sm" id="client-address" placeholder="XYZ Street" />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label htmlFor="client-phone" className="col-sm-3 col-form-label col-form-label-sm">Phone</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control form-control-sm" id="client-phone" placeholder="(123) 456 789" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invoice-detail-terms">
                        <div className="row justify-content-between">
                          <div className="col-md-3">
                            <div className="form-group mb-4">
                              <label htmlFor="number">Invoice Number</label>
                              <input type="text" className="form-control form-control-sm" id="number" placeholder="#0001" />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group mb-4">
                              <label htmlFor="date">Invoice Date</label>
                              <input type="text" className="form-control form-control-sm" id="date" placeholder="Add date picker" />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group mb-4">
                              <label htmlFor="due">Due Date</label>
                              <input type="text" className="form-control form-control-sm" id="due" placeholder="None" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invoice-detail-items">
                        <div className="table-responsive">
                          <table className="table table-bordered item-table">
                            <thead>
                              <tr>
                                <th className />
                                <th>Description</th>
                                <th className>Rate</th>
                                <th className>Qty</th>
                                <th className="text-right">Amount</th>
                                <th className="text-center">Tax</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="delete-item-row">
                                  <ul className="table-controls">
                                    <li><a href="javascript:void(0);" className="delete-item" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle"><circle cx={12} cy={12} r={10} /><line x1={15} y1={9} x2={9} y2={15} /><line x1={9} y1={9} x2={15} y2={15} /></svg></a></li>
                                  </ul>
                                </td>
                                <td className="description"><input type="text" className="form-control form-control-sm" placeholder="Item Description" /> <textarea className="form-control" placeholder="Additional Details" defaultValue={""} /></td>
                                <td className="rate">
                                  <input type="text" className="form-control form-control-sm" placeholder="Price" />
                                </td>
                                <td className="text-right qty"><input type="text" className="form-control form-control-sm" placeholder="Quantity" /></td>
                                <td className="text-right amount"><span className="editable-amount"><span className="currency">$</span> <span className="amount">100.00</span></span></td>
                                <td className="text-center tax">
                                  <div className="n-chk">
                                    <label className="new-control new-checkbox new-checkbox-text checkbox-primary" style={{height: 18, margin: '0 auto'}}>
                                      <input type="checkbox" className="new-control-input" />
                                      <span className="new-control-indicator" /><span className="new-chk-content">Tax</span>
                                    </label>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <button className="btn btn-secondary additem btn-sm">Add Item</button>
                      </div>
                      <div className="invoice-detail-total">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row invoice-created-by">
                              <label htmlFor="payment-method-account" className="col-sm-3 col-form-label col-form-label-sm">Account #:</label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control form-control-sm" id="payment-method-account" placeholder="Bank Account Number" />
                              </div>
                            </div>
                            <div className="form-group row invoice-created-by">
                              <label htmlFor="payment-method-bank-name" className="col-sm-3 col-form-label col-form-label-sm">Bank Name:</label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control form-control-sm" id="payment-method-bank-name" placeholder="Insert Bank Name" />
                              </div>
                            </div>
                            <div className="form-group row invoice-created-by">
                              <label htmlFor="payment-method-code" className="col-sm-3 col-form-label col-form-label-sm">SWIFT code:</label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control form-control-sm" id="payment-method-code" placeholder="Insert Code" />
                              </div>
                            </div>
                            <div className="form-group row invoice-created-by">
                              <label htmlFor="payment-method-country" className="col-sm-3 col-form-label col-form-label-sm">Country:</label>
                              <div className="col-sm-9">
                                <select name="country_code" className="form-control country_code  form-control-sm" id="payment-method-country">
                                  <option value>Choose Country</option>
                                  <option value="United States">United States</option>
                                  <option value="United Kingdom">United Kingdom</option>
                                  <option value="Canada">Canada</option>
                                  <option value="Australia">Australia</option>
                                  <option value="Germany">Germany</option>
                                  <option value="Sweden">Sweden</option>
                                  <option value="Denmark">Denmark</option>
                                  <option value="Norway">Norway</option>
                                  <option value="New-Zealand">New Zealand</option>
                                  <option value="Afghanistan">Afghanistan</option>
                                  <option value="Albania">Albania</option>
                                  <option value="Algeria">Algeria</option>
                                  <option value="American-Samoa">Andorra</option>
                                  <option value="Angola">Angola</option>
                                  <option value="Antigua Barbuda">Antigua &amp; Barbuda</option>
                                  <option value="Argentina">Argentina</option>
                                  <option value="Armenia">Armenia</option>
                                  <option value="Aruba">Aruba</option>
                                  <option value="Austria">Austria</option>
                                  <option value="Azerbaijan">Azerbaijan</option>
                                  <option value="Bahamas">Bahamas</option>
                                  <option value="Bahrain">Bahrain</option>
                                  <option value="Bangladesh">Bangladesh</option>
                                  <option value="Barbados">Barbados</option>
                                  <option value="Belarus">Belarus</option>
                                  <option value="Belgium">Belgium</option>
                                  <option value="Belize">Belize</option>
                                  <option value="Benin">Benin</option>
                                  <option value="Bermuda">Bermuda</option>
                                  <option value="Bhutan">Bhutan</option>
                                  <option value="Bolivia">Bolivia</option>
                                  <option value="Bosnia">Bosnia &amp; Herzegovina</option>
                                  <option value="Botswana">Botswana</option>
                                  <option value="Brazil">Brazil</option>
                                  <option value="British">British Virgin Islands</option>
                                  <option value="Brunei">Brunei</option>
                                  <option value="Bulgaria">Bulgaria</option>
                                  <option value="Burkina">Burkina Faso</option>
                                  <option value="Burundi">Burundi</option>
                                  <option value="Cambodia">Cambodia</option>
                                  <option value="Cameroon">Cameroon</option>
                                  <option value="Cape">Cape Verde</option>
                                  <option value="Cayman">Cayman Islands</option>
                                  <option value="Central-African">Central African Republic</option>
                                  <option value="Chad">Chad</option>
                                  <option value="Chile">Chile</option>
                                  <option value="China">China</option>
                                  <option value="Colombia">Colombia</option>
                                  <option value="Comoros">Comoros</option>
                                  <option value="Costa-Rica">Costa Rica</option>
                                  <option value="Croatia">Croatia</option>
                                  <option value="Cuba">Cuba</option>
                                  <option value="Cyprus">Cyprus</option>
                                  <option value="Czechia">Czechia</option>
                                  <option value="Côte">Côte d’Ivoire</option>
                                  <option value="Djibouti">Djibouti</option>
                                  <option value="Dominica">Dominica</option>
                                  <option value="Dominican">Dominican Republic</option>
                                  <option value="Ecuador">Ecuador</option>
                                  <option value="Egypt">Egypt</option>
                                  <option value="El-Salvador">El Salvador</option>
                                  <option value="Equatorial-Guinea">Equatorial Guinea</option>
                                  <option value="Eritrea">Eritrea</option>
                                  <option value="Estonia">Estonia</option>
                                  <option value="Ethiopia">Ethiopia</option>
                                  <option value="Fiji">Fiji</option>
                                  <option value="Finland">Finland</option>
                                  <option value="France">France</option>
                                  <option value="Gabon">Gabon</option>
                                  <option value="Georgia">Georgia</option>
                                  <option value="Ghana">Ghana</option>
                                  <option value="Greece">Greece</option>
                                  <option value="Grenada">Grenada</option>
                                  <option value="Guatemala">Guatemala</option>
                                  <option value="Guernsey">Guernsey</option>
                                  <option value="Guinea">Guinea</option>
                                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                                  <option value="Guyana">Guyana</option>
                                  <option value="Haiti">Haiti</option>
                                  <option value="Honduras">Honduras</option>
                                  <option value="Hong-Kong">Hong Kong SAR China</option>
                                  <option value="Hungary">Hungary</option>
                                  <option value="Iceland">Iceland</option>
                                  <option value="India">India</option>
                                  <option value="Indonesia">Indonesia</option>
                                  <option value="Iran">Iran</option>
                                  <option value="Iraq">Iraq</option>
                                  <option value="Ireland">Ireland</option>
                                  <option value="Israel">Israel</option>
                                  <option value="Italy">Italy</option>
                                  <option value="Jamaica">Jamaica</option>
                                  <option value="Japan">Japan</option>
                                  <option value="Jordan">Jordan</option>
                                  <option value="Kazakhstan">Kazakhstan</option>
                                  <option value="Kenya">Kenya</option>
                                  <option value="Kuwait">Kuwait</option>
                                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                                  <option value="Laos">Laos</option>
                                  <option value="Latvia">Latvia</option>
                                  <option value="Lebanon">Lebanon</option>
                                  <option value="Lesotho">Lesotho</option>
                                  <option value="Liberia">Liberia</option>
                                  <option value="Libya">Libya</option>
                                  <option value="Liechtenstein">Liechtenstein</option>
                                  <option value="Lithuania">Lithuania</option>
                                  <option value="Luxembourg">Luxembourg</option>
                                  <option value="Macedonia">Macedonia</option>
                                  <option value="Madagascar">Madagascar</option>
                                  <option value="Malawi">Malawi</option>
                                  <option value="Malaysia">Malaysia</option>
                                  <option value="Maldives">Maldives</option>
                                  <option value="Mali">Mali</option>
                                  <option value="Malta">Malta</option>
                                  <option value="Mauritania">Mauritania</option>
                                  <option value="Mauritius">Mauritius</option>
                                  <option value="Mexico">Mexico</option>
                                  <option value="Moldova">Moldova</option>
                                  <option value="Monaco">Monaco</option>
                                  <option value="Mongolia">Mongolia</option>
                                  <option value="Montenegro">Montenegro</option>
                                  <option value="Morocco">Morocco</option>
                                  <option value="Mozambique">Mozambique</option>
                                  <option value="Myanmar">Myanmar (Burma)</option>
                                  <option value="Namibia">Namibia</option>
                                  <option value="Nepal">Nepal</option>
                                  <option value="Netherlands">Netherlands</option>
                                  <option value="Nicaragua">Nicaragua</option>
                                  <option value="Niger">Niger</option>
                                  <option value="Nigeria">Nigeria</option>
                                  <option value="North-Korea">North Korea</option>
                                  <option value="Oman">Oman</option>
                                  <option value="Pakistan">Pakistan</option>
                                  <option value="Palau">Palau</option>
                                  <option value="Palestinian">Palestinian Territories</option>
                                  <option value="Panama">Panama</option>
                                  <option value="Papua">Papua New Guinea</option>
                                  <option value="Paraguay">Paraguay</option>
                                  <option value="Peru">Peru</option>
                                  <option value="Philippines">Philippines</option>
                                  <option value="Poland">Poland</option>
                                  <option value="Portugal">Portugal</option>
                                  <option value="Puerto">Puerto Rico</option>
                                  <option value="Qatar">Qatar</option>
                                  <option value="Romania">Romania</option>
                                  <option value="Russia">Russia</option>
                                  <option value="Rwanda">Rwanda</option>
                                  <option value="Réunion">Réunion</option>
                                  <option value="Samoa">Samoa</option>
                                  <option value="San-Marino">San Marino</option>
                                  <option value="Saudi-Arabia">Saudi Arabia</option>
                                  <option value="Senegal">Senegal</option>
                                  <option value="Serbia">Serbia</option>
                                  <option value="Seychelles">Seychelles</option>
                                  <option value="Sierra-Leone">Sierra Leone</option>
                                  <option value="Singapore">Singapore</option>
                                  <option value="Slovakia">Slovakia</option>
                                  <option value="Slovenia">Slovenia</option>
                                  <option value="Solomon-Islands">Solomon Islands</option>
                                  <option value="Somalia">Somalia</option>
                                  <option value="South-Africa">South Africa</option>
                                  <option value="South-Korea">South Korea</option>
                                  <option value="Spain">Spain</option>
                                  <option value="Sri-Lanka">Sri Lanka</option>
                                  <option value="Sudan">Sudan</option>
                                  <option value="Suriname">Suriname</option>
                                  <option value="Swaziland">Swaziland</option>
                                  <option value="Switzerland">Switzerland</option>
                                  <option value="Syria">Syria</option>
                                  <option value="Sao-Tome-and-Principe">São Tomé &amp; Príncipe</option>
                                  <option value="Tajikistan">Tajikistan</option>
                                  <option value="Tanzania">Tanzania</option>
                                  <option value="Thailand">Thailand</option>
                                  <option value="Timor-Leste">Timor-Leste</option>
                                  <option value="Togo">Togo</option>
                                  <option value="Tonga">Tonga</option>
                                  <option value="Trinidad-and-Tobago">Trinidad &amp; Tobago</option>
                                  <option value="Tunisia">Tunisia</option>
                                  <option value="Turkey">Turkey</option>
                                  <option value="Turkmenistan">Turkmenistan</option>
                                  <option value="Uganda">Uganda</option>
                                  <option value="Ukraine">Ukraine</option>
                                  <option value="UAE">United Arab Emirates</option>
                                  <option value="Uruguay">Uruguay</option>
                                  <option value="Uzbekistan">Uzbekistan</option>
                                  <option value="Vanuatu">Vanuatu</option>
                                  <option value="Venezuela">Venezuela</option>
                                  <option value="Vietnam">Vietnam</option>
                                  <option value="Yemen">Yemen</option>
                                  <option value="Zambia">Zambia</option>
                                  <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="totals-row">
                              <div className="invoice-totals-row invoice-summary-subtotal">
                                <div className="invoice-summary-label">Subtotal</div>
                                <div className="invoice-summary-value">
                                  <div className="subtotal-amount">
                                    <span className="currency">$</span><span className="amount">100</span>
                                  </div>
                                </div>
                              </div>
                              <div className="invoice-totals-row invoice-summary-total">
                                <div className="invoice-summary-label">Discount</div>
                                <div className="invoice-summary-value">
                                  <div className="total-amount">
                                    <span className="currency">$</span><span>10</span>
                                  </div>
                                </div>
                              </div>
                              <div className="invoice-totals-row invoice-summary-tax">
                                <div className="invoice-summary-label">Tax</div>
                                <div className="invoice-summary-value">
                                  <div className="tax-amount">
                                    <span>0%</span>
                                  </div>
                                </div>
                              </div>
                              <div className="invoice-totals-row invoice-summary-balance-due">
                                <div className="invoice-summary-label">Total</div>
                                <div className="invoice-summary-value">
                                  <div className="balance-due-amount">
                                    <span className="currency">$</span><span>90</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="invoice-detail-note">
                        <div className="row">
                          <div className="col-md-12 align-self-center">
                            <div className="form-group row invoice-note">
                              <label htmlFor="invoice-detail-notes" className="col-sm-12 col-form-label col-form-label-sm">Notes:</label>
                              <div className="col-sm-12">
                                <textarea className="form-control" id="invoice-detail-notes" placeholder="Notes - For example, &quot;Thank you for doing business with us&quot;" style={{height: 88}} defaultValue={""} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="invoice-actions">
                    <div className="invoice-action-currency">
                      <div className="form-group mb-0">
                        <label htmlFor="currency">Currency</label>
                        <div className="dropdown selectable-dropdown invoice-select">
                          <a id="currencyDropdown" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/img/flag-us.svg" className="flag-width" alt="flag" /> <span className="selectable-text">USD - US Dollar</span> <span className="selectable-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg></span></a>
                          <div className="dropdown-menu" aria-labelledby="currencyDropdown">
                            <a className="dropdown-item" data-img-value="assets/img/flag-us.svg" data-value="USD - US Dollar" href="javascript:void(0);"><img src="assets/img/flag-us.svg" className="flag-width" alt="flag" /> USD - US Dollar</a>
                            <a className="dropdown-item" data-img-value="assets/img/flag-gbp.svg" data-value="GBP - British Pound" href="javascript:void(0);"><img src="assets/img/flag-gbp.svg" className="flag-width" alt="flag" /> GBP - British Pound</a>
                            <a className="dropdown-item" data-img-value="assets/img/flag-idr.svg" data-value="IDR - Indonesian Rupiah" href="javascript:void(0);"><img src="assets/img/flag-idr.svg" className="flag-width" alt="flag" /> IDR - Indonesian Rupiah</a>
                            <a className="dropdown-item" data-img-value="assets/img/flag-inr.svg" data-value="INR - Indian Rupee" href="javascript:void(0);"><img src="assets/img/flag-inr.svg" className="flag-width" alt="flag" /> INR - Indian Rupee</a>
                            <a className="dropdown-item" data-img-value="assets/img/flag-brl.svg" data-value="BRL - Brazilian Real" href="javascript:void(0);"><img src="assets/img/flag-brl.svg" className="flag-width" alt="flag" /> BRL - Brazilian Real</a>
                            <a className="dropdown-item" data-img-value="assets/img/flag-de.svg" data-value="EUR - Germany (Euro)" href="javascript:void(0);"><img src="assets/img/flag-de.svg" className="flag-width" alt="flag" /> EUR - Germany (Euro)</a>
                            <a className="dropdown-item" data-img-value="assets/img/flag-try.svg" data-value="TRY - Turkish Lira" href="javascript:void(0);"><img src="assets/img/flag-try.svg" className="flag-width" alt="flag" /> TRY - Turkish Lira</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="invoice-action-tax">
                      <h5>Tax</h5>
                      <div className="invoice-action-tax-fields">
                        <div className="row">
                          <div className="col-6">
                            <div className="form-group mb-0">
                              <label htmlFor="type">Type</label>
                              <div className="dropdown selectable-dropdown invoice-tax-select">
                                <a id="currencyDropdown" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span className="selectable-text">None</span> <span className="selectable-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg></span></a>
                                <div className="dropdown-menu" aria-labelledby="currencyDropdown">
                                  <a className="dropdown-item" data-value="Deducted" href="javascript:void(0);">Deducted</a>
                                  <a className="dropdown-item" data-value="Per Item" href="javascript:void(0);">Per Item</a>
                                  <a className="dropdown-item" data-value="On Total" href="javascript:void(0);">On Total</a>
                                  <a className="dropdown-item" data-value="None" href="javascript:void(0);">None</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-group mb-0 tax-rate-deducted" style={{display: 'none'}}>
                              <label htmlFor="rate">Rate (%)</label>
                              <input type="number" className="form-control input-rate" id="rate" placeholder="Rate" defaultValue={10} />
                            </div>
                            <div className="form-group mb-0 tax-rate-per-item" style={{display: 'none'}}>
                              <label htmlFor="rate">Rate (%)</label>
                              <input type="number" className="form-control input-rate" id="rate" placeholder="Rate" defaultValue={5} />
                            </div>
                            <div className="form-group mb-0 tax-rate-on-total" style={{display: 'none'}}>
                              <label htmlFor="rate">Rate (%)</label>
                              <input type="number" className="form-control input-rate" id="rate" placeholder="Rate" defaultValue={25} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="invoice-action-discount">
                      <h5>Discount</h5>
                      <div className="invoice-action-discount-fields">
                        <div className="row">
                          <div className="col-6">
                            <div className="form-group mb-0">
                              <label htmlFor="type">Type</label>
                              <div className="dropdown selectable-dropdown invoice-discount-select">
                                <a id="currencyDropdown" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span className="selectable-text">None</span> <span className="selectable-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg></span></a>
                                <div className="dropdown-menu" aria-labelledby="currencyDropdown">
                                  <a className="dropdown-item" data-value="Percent" href="javascript:void(0);">Percent</a>
                                  <a className="dropdown-item" data-value="Flat Amount" href="javascript:void(0);">Flat Amount</a>
                                  <a className="dropdown-item" data-value="None" href="javascript:void(0);">None</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-group mb-0 discount-amount" style={{display: 'none'}}>
                              <label htmlFor="rate">Amount</label>
                              <input type="number" className="form-control input-rate" id="rate" placeholder="Rate" defaultValue={25} />
                            </div>
                            <div className="form-group mb-0 discount-percent" style={{display: 'none'}}>
                              <label htmlFor="rate">Percent</label>
                              <input type="number" className="form-control input-rate" id="rate" placeholder="Rate" defaultValue={10} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="invoice-actions-btn">
                    <div className="invoice-action-btn">
                      <div className="row">
                        <div className="col-xl-12 col-md-4">
                          <a href="javascript:void(0);" className="btn btn-primary btn-send">Send Invoice</a>
                        </div>
                        <div className="col-xl-12 col-md-4">
                          <a href="apps_invoice-preview.html" className="btn btn-dark btn-preview">Preview</a>
                        </div>
                        <div className="col-xl-12 col-md-4">
                          <a href="javascript:void(0);" className="btn btn-success btn-download">Save</a>
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
</div>

    )
}
