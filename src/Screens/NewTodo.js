import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TodoData from '../TodoData'

const Newtodo = () => {

    const [Payload, setPayload] = useState( localStorage.getItem("soloTodo") ? JSON.parse(localStorage.getItem('soloTodo')) : TodoData)

    const [Watch, setWatch] = useState(false);
    const [Change, setChange] = useState(false);
    const [Button, setButton] = useState("Submit");

    const saveData = () =>{
        localStorage.setItem("soloTodo", JSON.stringify(Payload))
    } 

    const [SingleTodo, setSingleTodo] = useState({
        id:"",
        title: "",
        description: "",
        completed: false
        

    })

    const handleChange = (e) => {
        setSingleTodo({...SingleTodo, [e.target.name]: e.target.value})
    }

    const handleSave = () => {

        if(Button == "Update"){

            let id = SingleTodo.id;
            Payload.splice(id,1,SingleTodo)
            localStorage.setItem("soloTodo", JSON.stringify(Payload))
            setSingleTodo({})
            setChange(!Change)
            setWatch(false)



        }else{
            const UpdatedSingle = SingleTodo

            setPayload([...Payload, UpdatedSingle])
    
            const updatedPayload = [...Payload, UpdatedSingle]
    
            localStorage.setItem("soloTodo", JSON.stringify(updatedPayload))
            setSingleTodo({})
            setWatch(false)
           
    
        }
        
      
    }

    const deleteTodo = (index) =>{

        let updatedPayload = Payload

        updatedPayload.splice(index,1)

        setPayload(updatedPayload) 
        localStorage.setItem("soloTodo",JSON.stringify(updatedPayload))    
        setChange(!Change)
        
    }

    const AddTodo = () =>{
        setWatch(true)
    }
    const TaskCompleted = (solo) =>{
        Payload.map((e,i)=>{

            if(solo === i){
                e.completed = e.completed == false ? true : false
            }
        })
        setChange(!Change)
        localStorage.setItem("soloTodo",JSON.stringify(Payload))   
        
        
        
    }
    const Discard = () =>{
        setWatch(false)
    }
    const EditTodo = (id) =>{
        
        
        setButton("Update")
        let editedTod = {...Payload[id], "id":id , "completed": false}
        setSingleTodo(editedTod)
        setWatch(true)
    }

    useEffect(() => {
        saveData()
      
    }, [Change]);

  
    console.log(TodoData)
    return (
        <div className="container mt-5">

        <button><Link to="/todo">todo</Link></button>
            <button onClick={AddTodo} className="btn btn-primary offset-lg-10">Add Todo</button>


            {
                Watch === false ? (
                    <table className="table mt-4">
                <thead>
                    <th>delete Action</th>
                    <th>S/N</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th>Action</th>
                </thead>

                <tbody>
                {
                    Payload.map((item,index) =>(
                    <tr>
                        <td><button className="btn btn-danger" onClick={()=>deleteTodo(index)}>delete</button></td>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.completed ? "Completed": "Not Completed"}</td>
                        <td>{item.completed ? (<button style={{padding: "8px 12px"}} onClick={()=>TaskCompleted(index)} className="btn btn-Primary">Good Job</button>):
                        (<button style={{padding: "8px 29px"}} className="btn btn-secondary " onClick={()=>TaskCompleted(index)}>Done</button>)} </td>
                        <td><button className="btn btn-secondary" onClick={()=>EditTodo(index)}>Edit</button> <button className="btn btn-secondary">View</button></td>
                    </tr>
                    ))
                }
                   
                </tbody>
            </table>
                ):("")
            }

                {
                    Watch === true ? (
                        
            <div className="form offset-lg-3 col-lg-6 ">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" onChange={handleChange} name='title' value={SingleTodo.title} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input type="text"  onChange={handleChange} name='description'  value={SingleTodo.description} className="form-control" id="exampleInputPassword1" />
                </div>
            
                <button type="submit" onClick={Discard} className="btn btn-danger mx-3">Discard</button>
                <button type="submit" onClick={handleSave} className="btn btn-primary">{Button}</button>
            </div>
                    ):('')
                }

        </div>
    );
}

export default Newtodo;
