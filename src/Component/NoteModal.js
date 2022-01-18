import React, { useState } from 'react'
import { Button, Modal, ModalBody } from 'react-bootstrap';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../Context/UserContext';


export default function NoteModal({show , close }) {
    const {Payload, setPayload} = useContext(UserContext)

    const date = new Date()

    const [note, setNote] = useState({
        title: "",
        description: "",
        favorite: "",
        tagTo: false,
        tag: "",
        date: "",
      });
    
    const handleChange = (e) => {

        setNote({...note, [e.target.name]: e.target.value})
          
    }
    const saveChange = () => {
        
        const updatedNote = {...note, "date": new Date(). toDateString().toString()}
        setNote(updatedNote) 
        
        const updatedPayload = [...Payload, updatedNote]
        setPayload(updatedPayload);

        let local = JSON.parse(localStorage.getItem("Payload"));
        
        localStorage.setItem("Payload",JSON.stringify(updatedPayload))
            close()
            setNote({})
    }
    return (
        <div>
        
          

            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                <Modal.Title>Add Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                <form action="javascript:void(0);" id="notesMailModalTitle">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex note-title">
                      <input type="text" id="n-title" name = "title" value={note.title} onChange={handleChange} className="form-control"  placeholder="Title" />
                    </div>
                    <br/>
                    <span className="validation-text" />
                  </div>
                 
                  <div className="col-md-12">
                    <div className="d-flex note-description">
                      <textarea id="n-description" className="form-control" name = "description" onChange={handleChange} value={note.description} maxLength={60} placeholder="Description" rows={3}  />
                    </div>
                    <br/>
                    <span className="validation-text" />
                  </div>
                 
                  
                </div>
              </form>
                
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChange}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
