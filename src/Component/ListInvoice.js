import React from 'react'

export default function ListInvoice() {
    return (
        <tr>
        <td className="checkbox-column"> 1 </td>
        <td><a href="apps_invoice-preview.html"><span className="inv-number">#098424</span></a></td>
        <td>
          <div className="d-flex">
            <div className="usr-img-frame mr-2 rounded-circle">
              <img alt="avatar" className="img-fluid rounded-circle" src="assets/img/profile-12.jpg" />
            </div>
            <p className="align-self-center mb-0 user-name"> Alma Clarke </p>
          </div>
        </td>
        <td><span className="inv-email"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg> alma.clarke@gmail.com</span></td>
        <td><span className="inv-date"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x={3} y={4} width={18} height={18} rx={2} ry={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /></svg> 10 Feb 2021</span></td>
        <td><span className="inv-amount">$234.40</span></td>
        <td><span className="badge badge-success inv-status">Paid</span></td>
        <td>
          <div className="dropdown">
            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
              <a className="dropdown-item action-edit" href="apps_invoice-edit.html"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>Edit</a>
              <a className="dropdown-item action-delete" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>Delete</a>
            </div>
          </div>
        </td>
      </tr>
    )
}
