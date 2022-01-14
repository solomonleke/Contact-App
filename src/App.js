import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './Screens/ContactPage';
import GridContact from './Component/GridContact';
import GridPage from './Screens/GridPage';

function App() {

  return (
    <div className="App">
     <BrowserRouter>
    

   
   
        <Routes>
          <Route path="/" element={<ContactPage/>}/>
          <Route path="/gridCard" element={<GridPage/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
