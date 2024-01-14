import { useState } from 'react'
import './App.css'
import useGeneratePassword from './hooks/useGeneratePassword'
import StrengthChecker from './components/StrengthChecker';

function App() {
  const [length,setLength] = useState(5);
  const [copied,setCopied] = useState(false);
  const [checkBox, setCheckBox] = useState([{
    title:"Include uppercase",
    state:false,
  },
  {
    title:"Include lowercase",
    state:false,
  },
  {
    title:"Include characters",
    state:false,
  },
  {
    title:"Include Numbers",
    state:false,
  },
 ])
 const handleSelect=(index)=>{
    const updatedCheckBox = [...checkBox]
    updatedCheckBox[index].state = !updatedCheckBox[index].state;
    setCheckBox(updatedCheckBox);
    // console.log(updatedCheckBox);
 }
 const handleCopy = ()=>{
  navigator.clipboard.writeText(password);
  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 1000);
 }
 const {password,error,generatePassword} = useGeneratePassword()
 console.log(password,error)
  return (
 <>
    <h1>Password Generator</h1>
   <div className='container'>
   {
    password&&<div className="head">
     <p>{password}</p>
     <button onClick={handleCopy}>{copied?"copied":"copy"}</button>
    </div>
   }
   <div className='lengthSelector'>
    <input type="range" value={length} min="5" max="20" onChange={(e)=>setLength(e.target.value)}/>
    <span>len: {length}</span>
   </div>
      <div className='checkboxes'>
      {
        checkBox.map((checkbox,idx)=>(
          <div key={idx}>
             <input type="checkbox" id={idx}/>
             <label htmlFor={idx}
             onClick={()=>handleSelect(idx)}
             >{checkbox.title}</label>
          </div>
        ))
       }
       {
        error&&<div className='errorMsg'>
          *{error}
        </div>
       }
       {
        password&&<StrengthChecker password={password}/>

       }
       <button className="generatePassword" onClick={()=>generatePassword(checkBox,length)}>Generate Password</button>
      </div>
   </div>
 </>
  )
}

export default App
