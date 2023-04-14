import { useState } from "react";
import './Style.css';
export default function SearchBar({onSearch}) {
   
   const [id, setId] = useState('');
   const handleChange = (event)=>{
      setId(event.target.value)
   };

   return (
      
      <div className="inputContainer"> 
           <input className="inputNumber" type="number" onChange={handleChange}/>
           <button className="loginButton" onClick={()=>{ onSearch(id); setId(id)}}>Agregar</button>
      </div>
         
           
      
   );
}
 