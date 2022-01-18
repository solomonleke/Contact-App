import React, { useEffect, useState } from 'react'
import TodoData from '../TodoData';




export default function TodoList() {

    const [Payload, setPayload] = useState(localStorage.getItem('PayloadTodo')? JSON.parse(localStorage.getItem("PayloadTodo")): TodoData)
   
    const [todo, setTodo] = useState({

        title: "",
        description: "",
        completed: false,
        tag: "",

    })

    const [Watch, setWatch] = useState(false)
    const [Change, setChange] = useState(false)
    
    const SaveTodo = () => {

        localStorage.setItem("PayloadTodo", JSON.stringify(Payload))

    }

    
    const handleTodo = (e) => {

        setTodo({...todo, [e.target.name]: e.target.value })
    }

    const addTodo = () => {
      
        console.log(todo)
        const updatedTodo = todo
        setPayload([...Payload, updatedTodo])

        const updatedPayload = [...Payload, updatedTodo]

        localStorage.setItem("PayloadTodo", JSON.stringify(updatedPayload))
        setTodo({})
        setWatch(false)



    }

    const handleForm = () => {
        setWatch(true)
    }
    const handleFormClose = () => {
        setWatch(false)
    }
    const TaskDone = (index) => {

        Payload.map((item, id)=>{
            if(id==index){

                item.completed = item.completed == false ? true : "";
               
                setChange(!Change)
                
            }
           
        })
    }

    const deleteTodo = (index) =>{

        let updatedPayload = Payload
        updatedPayload.splice(index,1)
        setPayload(updatedPayload) 
        localStorage.setItem("Payload",JSON.stringify(updatedPayload))    
        setChange(!Change)
        
    }
    const TaskCompleted = (id) => {
        alert("job completed")
    }

    useEffect(() => {

      SaveTodo()
    }, [Change])

  
    return (
        <div className="container">
        <br/>
        <button onClick={handleForm} className="btn btn-primary offset-lg-10">Add Todo</button>
       
   
            <table className= "table mt-4">
                {
                    Watch == false ? (
                        <thead>
                <th><i className="fas fa-dumpster" /></th>
                <th>S/N</th>
                <th>Title</th>
                <th>Description</th>
                <th>Completed</th>
                <th>Tags</th>
                <th>Action</th>

                </thead>
                    ): (

                        ""
                    )
                
                }

                <tbody>
                {
                    Payload.length > 0 ? (
                        
                        Watch == false ? (
                            Payload.map((item, index) =>(

                                <tr>
                                <td className="mx-4" ><i onClick={()=>deleteTodo(index)} className="fas fa-times mx-3" /></td>
                                <td>{index+1}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.completed ? "Completed": "Not Completed"}</td>
                                <td>{item.tag}</td>
                                <td>{item.completed ? (<button className="btn btn-primary" onClick={()=>TaskCompleted(index)}>Good Job</button>): (
                                    <button className="btn btn-secondary" onClick={()=>TaskDone(index)}>Done</button>
                                ) }</td>
                                </tr>
                            ))
                        ) : (

                            ""
                        )
                      

                    ): (

                       
                        Watch == false ? (
                            <div>
                            <h1 className="text">you have not added any to do </h1>

                            <button onClick={handleForm} className="btn btn-primary">Add Todo</button>
                        </div>
                        ): (

                            ""
                        )   
                      
                    )

                }
                   
                   
                </tbody>
            </table>
        
        
         

               {
                Watch == true ? (
                    <div className="container">
                    
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                      <input type="text" name="title" value={todo.title} onChange={handleTodo} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                      <input type="text" name="description" value={todo.description} onChange={handleTodo}  className="form-control" id="exampleInputPassword1" />
                    </div>
                   
                    <button  onClick={handleFormClose} className="btn btn-danger mx-3">Discard</button>
                    <button  onClick={addTodo} className="btn btn-primary ">Submit</button>
               
                  
                    </div>
                ): (

                    ""
                )
               
               }
        </div>
    )
}
