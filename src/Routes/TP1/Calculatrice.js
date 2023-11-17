import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Calculatrice() {
   const[result,setResult]=useState(0);
   const changer=(e)=>{
       setResult(e.target.value);
   }
   const taperNumber=(x)=>{
      setResult(result+x);
   }
   const operateur=(O)=>{ 
    setResult(result+O)
   }
   const Reponse=()=>{
     try {
         setResult(eval(result));
      } catch (error) {
         setResult("Error");
      }
   }
   const clear =()=>{
     setResult(0);
   }

  return (
    <div className='p-5 m-4'>
      <input type="text" name="resultat" id="" value={result} onChange={(e)=>changer(e)} />
      <input type="button" value="C" className="btn btn-secondary m-2" onClick={clear} />
      <br />
      <input type="button" className='btn btn-dark m-1 ' value="9" onClick={()=>taperNumber(9)} />
      <input type="button" className='btn btn-dark  m-1' value="8" onClick={()=>taperNumber(8)} />
   
      <input type="button" className='btn btn-dark m-1 'value="7" onClick={()=>taperNumber(7)}/>
      <input type="button" value="+" className='btn btn-primary  m-1' onClick={()=>operateur('+')} />
      <br />
      <input type="button" className='btn btn-dark  m-1' value="6" onClick={()=>taperNumber(6)} />
      <input type="button" className='btn btn-dark  m-1' value="5" onClick={()=>taperNumber(5)} />
      <input type="button" className='btn btn-dark  m-1' value="4" onClick={()=>taperNumber(4)}/>
      <input type="button" className='btn btn-primary  m-1' value="-" onClick={()=>operateur('-')} />
       <br />
      <input type="button" className='btn btn-dark  m-1' value="3" onClick={()=>taperNumber(3)} />
      <input type="button" className='btn btn-dark  m-1' value="2" onClick={()=>taperNumber(2)} />
      <input type="button" className='btn btn-dark  m-1' value="1" onClick={()=>taperNumber(1)} />
      <input type="button" className='btn btn-primary  m-1' value="x" onClick={()=>operateur('*')} />
       <br />
      <input type="button" className='btn btn-dark  m-1' value="." onClick={()=>taperNumber('.')} />
      <input type="button" className='btn btn-dark  m-1'  value="0"  onClick={()=>taperNumber(0)}/>
      <input type="button" className='btn btn-primary  m-1' value="=" onClick={Reponse}/>
      <input type="button" className='btn btn-primary  m-1'value="/" onClick={()=>operateur('/')} />

    </div>
  )
}




