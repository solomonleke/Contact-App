import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './Screens/ContactPage';
import GridContact from './Component/GridContact';
import GridPage from './Screens/GridPage';
import { UserContext } from './Context/UserContext';

import { useState } from 'react';


function App() {

  const [ContactId, setContactId] = useState("")
  const [Watch, setWatch] = useState(false)

  return (
    <div className="App">

    <UserContext.Provider value = {{ContactId, setContactId, Watch, setWatch}}>
     <BrowserRouter>
    

   
   
        <Routes>
          <Route path="/" element={<ContactPage/>}/>
          <Route path="/gridCard" element={<GridPage/>}/>
        </Routes>
     </BrowserRouter>
     </UserContext.Provider>
    </div>
  );
}

export default App;
