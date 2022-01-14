import React, { useEffect, useState } from 'react'
import { useContext } from 'react/cjs/react.development'
import { UserContext } from '../Context/UserContext'

export default function EditModal() {

    const {ContactId, setContactId} = useContext(UserContext)

    const [Contacts, setContacts] = useState({
        name: "",
        email: "",
        designation: "",
        location: "",
        image: "",
        phone: ""
    })

    const handleChange = (e) =>{

        setContacts({...Contacts, [e.target.name]: e.target.value})

    }

    const UpdateContact = () =>{

    }

    const fetchSingle = () =>{
     
            fetch(`http://localhost:8000/api/single_contacts/${ContactId}`)
            .then(response => response.json())
            .then(result =>{
                if(ContactId !== ''){

                    

                        setContacts({ ...Contacts,
                            name: result.name,
                            email: result.email,
                            designation: result.designation,
                            location: result.location,
                            image: result.image,
                            phone: result.phone,
                        })
                  
               
            }
                }
            )
             
          
      
       
    }

    useEffect(() => {
       fetchSingle()
       UpdateContact()
    }, [])

    return (
        <div>
      
        <div className="modal fade" id="MexampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Contact Info {ContactId}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-3">
                           
                            <input type="text" className="form-control" name="name" value={Contacts.name} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name' />
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                           
                            <input type="email" className="form-control" name="email" value={Contacts.email} onChange={handleChange} placeholder='Email'  id="exampleInputEmail1" aria-describedby="emailHelp" />
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                           
                            <input type="text" className="form-control" name="designation" value={Contacts.designation}  onChange={handleChange} placeholder='Designation'  id="exampleInputEmail1" aria-describedby="emailHelp" />
                           
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                           
                            <input type="text" className="form-control" name="phone" value={Contacts.phone}   onChange={handleChange} placeholder='Phone'  id="exampleInputEmail1" aria-describedby="emailHelp" />
                           
                        </div>
                    </div>
                   
                </div>
            

                <div className="mb-3">
                   
                    <input type="text" className="form-control" name="image" value={Contacts.image}  onChange={handleChange} placeholder='Add Picture Url'  id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                   
                    <input type="text" className="form-control" name="location" value={Contacts.location}  onChange={handleChange} placeholder='Location'  id="exampleInputPassword1" />
                </div>
               
               
                

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
                <button type="button" onClick={UpdateContact} className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

