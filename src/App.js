import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './Screens/ContactPage';
import GridContact from './Component/GridContact';
import GridPage from './Screens/GridPage';
import { UserContext } from './Context/UserContext';

import { useEffect, useState } from 'react';
import Note from './Screens/Note';
import Data from './Data';
import TodoList from './Screens/TodoList';
import InvoiceList from './Screens/InvoiceList';
import Newtodo from './Screens/NewTodo';


function App() {

  const [Payload, setPayload] = useState(localStorage.getItem('Payload')? JSON.parse(localStorage.getItem("Payload")): Data)

    
    const AddNote = () =>{

      localStorage.setItem("Payload", JSON.stringify(Payload))
  }

  useEffect(() => {
      AddNote()
  }, [])

  const [ContactId, setContactId] = useState("")
  const [Watch, setWatch] = useState(false)

  return (
    <div className="App">

    <UserContext.Provider value = {{ContactId, setContactId, Watch, setWatch, Payload, setPayload}}>
     <BrowserRouter>
    

   
   
        <Routes>
          <Route path="/note" element={<Note/>}/>
          <Route path="/todo" element={<TodoList/>}/>
          <Route path="/" element={<Newtodo/>}/>
          <Route path="/ss" element={<InvoiceList/>}/>
          <Route path="/gridCard" element={<GridPage/>}/>
        </Routes>
     </BrowserRouter>
     </UserContext.Provider>
    </div>
  );
}

export default App;
