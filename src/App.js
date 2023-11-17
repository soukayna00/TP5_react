import './App.css';
import { Routes, Route } from 'react-router-dom'
import Calculatrice from './Routes/TP1/Calculatrice';
import Slider from './Routes/TP2/Slider';
import Form from './Routes/TP3/Form';
import Api from './Routes/TP4/Api';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
         <Route path="/" element={<Calculatrice/>} />
         <Route path='/TP2' element={<Slider/>}></Route>
         <Route path="/TP3" element={<Form/>}></Route>
         <Route path="/TP4" element={<Api/>}></Route>
        <Route path='*' element ={<><h4>404 page not found </h4></>}></Route>  
      </Routes>
    </div>
  );
}

export default App;
